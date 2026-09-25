export type ProgramCategory = "Students" | "Families" | "Entrepreneurs" | "Senior citizens" | "Employment" | "Financial assistance";

export type Program = {
  id: string;
  name: string;
  category: ProgramCategory;
  eyebrow: string;
  description: string;
  benefit: number;
  benefitLabel: string;
  criteria: string[];
  documents: string[];
  ruleVersion: string;
  sourceName: string;
  sourceUrl: string;
  accent: "blue" | "teal" | "amber" | "green";
};

export const programs: Program[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    category: "Financial assistance",
    eyebrow: "Farmers · Direct income support",
    description: "Income support for eligible landholding farmer families, transferred in three equal instalments.",
    benefit: 6000,
    benefitLabel: "annual support",
    criteria: ["Landholding farmer family", "No exclusion under scheme guidelines", "Verified bank account and eKYC"],
    documents: ["Land ownership record", "Identity document", "Bank account proof"],
    ruleVersion: "PMKISAN-2026.1",
    sourceName: "pmkisan.gov.in",
    sourceUrl: "https://pmkisan.gov.in/",
    accent: "green",
  },
  {
    id: "pm-svanidhi",
    name: "PM SVANidhi",
    category: "Entrepreneurs",
    eyebrow: "Street vendors · Working capital",
    description: "Collateral-free working-capital support with subsequent loan tranches for eligible street vendors.",
    benefit: 10000,
    benefitLabel: "first loan tranche",
    criteria: ["Street vendor identified by local body", "Vending activity on or before the scheme cut-off", "Digital or bank repayment readiness"],
    documents: ["Certificate of Vending or ID", "Identity document", "Bank account proof"],
    ruleVersion: "SVANIDHI-2026.1",
    sourceName: "UMANG · PM SVANidhi",
    sourceUrl: "https://web.umang.gov.in/landing/scheme/detail/pm-street-vendors-atmanirbhar-nidhi-pm-svanidhi_pm-svanidhi.html",
    accent: "blue",
  },
  {
    id: "pmmvy",
    name: "Pradhan Mantri Matru Vandana Yojana",
    category: "Families",
    eyebrow: "Maternity support · Nutrition",
    description: "Maternity benefit support for the first child and for a second child when the child is a girl, subject to conditions.",
    benefit: 5000,
    benefitLabel: "first-child benefit",
    criteria: ["Eligible pregnant or lactating beneficiary", "First child, or second child if a girl", "Required health and registration conditions"],
    documents: ["Identity document", "Aadhaar-linked bank proof", "Pregnancy or birth record"],
    ruleVersion: "PMMVY-2026.1",
    sourceName: "WCD · PMMVY FAQ",
    sourceUrl: "https://www.spniwcd.wcd.gov.in/pradhan-mantri-matru-vandana-yojna/faqs",
    accent: "amber",
  },
  {
    id: "pmay-g",
    name: "PMAY-G",
    category: "Families",
    eyebrow: "Rural housing · Unit assistance",
    description: "Housing assistance for eligible rural households, with a different published unit amount for plain areas and hilly or difficult areas.",
    benefit: 120000,
    benefitLabel: "plain-area unit assistance",
    criteria: ["Eligible rural household", "No existing pucca house", "Selection through the programme’s approved process"],
    documents: ["Identity document", "Rural residence proof", "Household and land details"],
    ruleVersion: "PMAYG-2026.1",
    sourceName: "Press Information Bureau · PMAY-G",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2288998&reg=3&lang=1",
    accent: "teal",
  },
  {
    id: "ignoaps",
    name: "IGNOAPS",
    category: "Senior citizens",
    eyebrow: "Social security · Pension",
    description: "Central pension contribution for eligible below-poverty-line citizens aged 60 and above, with higher support from age 80.",
    benefit: 200,
    benefitLabel: "monthly central contribution (60–79)",
    criteria: ["Age 60 or above", "Below-poverty-line household", "Not receiving a disqualifying pension"],
    documents: ["Age proof", "Identity document", "BPL or household eligibility record"],
    ruleVersion: "NSAP-2026.1",
    sourceName: "NSAP FAQ · Government of India",
    sourceUrl: "https://nsap.dord.gov.in/circular.do?method=faq",
    accent: "blue",
  },
  {
    id: "skills-assistance",
    name: "Skills & Employment Assistance",
    category: "Employment",
    eyebrow: "Prototype programme · Simulated",
    description: "A fictional demo pathway for skills discovery, counselling, and employment-readiness support.",
    benefit: 15000,
    benefitLabel: "simulated training support",
    criteria: ["Age 18–35", "Currently seeking work or reskilling", "Available for counselling"],
    documents: ["Identity document", "Education or experience record"],
    ruleVersion: "FA-SIM-2026.1",
    sourceName: "FairAccess demo data",
    sourceUrl: "#transparency",
    accent: "amber",
  },
];

export const financialSnapshot = {
  monthlyIncome: 45000,
  monthlyExpenses: 31000,
  savings: 85000,
  existingDebt: 120000,
};
