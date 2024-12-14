import { InsurancePlanType } from '../types';

export const insurancePlans: InsurancePlanType[] = [
  {
    id: 1,
    title: "Accident Insurance",
    description: "Protection for life's unexpected moments with coverage for injuries and accidents.",
    benefits: [
      "24/7 coverage on and off the job",
      "Cash benefits paid directly to you",
      "Coverage for the whole family available"
    ],
    icon: "Shield"
  },
  {
    id: 2,
    title: "Short-Term Disability",
    description: "Income protection when you're unable to work due to covered sickness or injury.",
    benefits: [
      "Fast claims processing",
      "Guaranteed-issue options available",
      "Portable coverage"
    ],
    icon: "Umbrella"
  },
  {
    id: 3,
    title: "Cancer Insurance",
    description: "Additional financial protection when dealing with a cancer diagnosis.",
    benefits: [
      "Wellness benefit included",
      "Coverage for various treatments",
      "Transportation and lodging benefits"
    ],
    icon: "Heart"
  }
];