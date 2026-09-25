import type { Program } from "./data";

export type AssessmentData = {
  age: number;
  location: string;
  householdSize: number;
  annualIncome: number;
  employment: string;
  student: string;
  business: string;
  documents: string[];
};

export type CriterionStatus = "met" | "not_met" | "missing";
export type EligibilityResult = {
  result: "eligible" | "conditional" | "not_eligible";
  criteriaMet: number;
  criteriaTotal: number;
  criteria: { name: string; status: CriterionStatus; explanation: string }[];
  missingDocuments: string[];
  nextSteps: string[];
};

export function evaluateEligibility(userData: AssessmentData, program: Program): EligibilityResult {
  const hasIncome = userData.annualIncome > 0;
  const criteria = [
    {
      name: "Basic profile",
      status: userData.age > 0 && userData.location ? "met" as const : "missing" as const,
      explanation: userData.age > 0 && userData.location ? "Age and location were provided for this assessment." : "Add your age and location so the programme rules can be applied.",
    },
    {
      name: "Household context",
      status: userData.householdSize > 0 ? "met" as const : "missing" as const,
      explanation: userData.householdSize > 0 ? "Household size is available to interpret the programme threshold." : "Household size helps explain how the rule applies to you.",
    },
    {
      name: "Income information",
      status: hasIncome ? "met" as const : "missing" as const,
      explanation: hasIncome ? "Annual household income was included in the assessment." : "Income information is needed before an income-based rule can be evaluated.",
    },
    {
      name: "Relevant status",
      status: userData.employment || userData.student || userData.business ? "met" as const : "missing" as const,
      explanation: userData.employment || userData.student || userData.business ? "Employment, study, or business context was provided." : "One relevant status helps narrow the programme pathway.",
    },
    {
      name: "Proof of income",
      status: userData.documents.includes("Proof of income") ? "met" as const : "missing" as const,
      explanation: userData.documents.includes("Proof of income") ? "Proof of income is marked as available." : "This document is still needed to verify the income information.",
    },
  ];
  const criteriaMet = criteria.filter((criterion) => criterion.status === "met").length;
  const missingDocuments = criteria.filter((criterion) => criterion.status === "missing").map((criterion) => criterion.name === "Proof of income" ? "Proof of income" : "Profile information");
  const result = criteriaMet === criteria.length ? "eligible" : criteriaMet >= 3 ? "conditional" : "not_eligible";
  return {
    result,
    criteriaMet,
    criteriaTotal: criteria.length,
    criteria,
    missingDocuments: Array.from(new Set(missingDocuments)),
    nextSteps: result === "eligible" ? ["Review the programme source and official application route.", "Keep copies of the information you used for this assessment."] : ["Add the missing profile information or document.", "Review the criteria explanation and correct anything inaccurate.", "Request human review if the result does not reflect your situation."],
  };
}
