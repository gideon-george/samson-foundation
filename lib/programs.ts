import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  Rocket,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Scale,
} from "lucide-react";

export type Program = {
  slug: string;
  title: string;
  short: string;
  /** Full description — real copy from the Foundation's brief. */
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    slug: "bible-translation",
    title: "Bible Translation & Language Development",
    short:
      "Bringing God's Word to underserved language communities and preserving indigenous languages.",
    description:
      "We engage in Bible translation projects for underserved language communities, promote literacy through mother-tongue language development, and work to ensure that every community has access to God's Word in a language they clearly understand. We also collaborate with churches, translators, and language organizations to preserve indigenous languages and strengthen Christian discipleship.",
    icon: BookOpenText,
    image: "/images/impact/community/community-visit-gratitude.jpg",
    imageAlt:
      "A Samson Foundation team member greets members of a rural community gathered outside their village hall in Taraba State.",
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    short:
      "Leadership skills, vocational training, entrepreneurship support, and business start-up grants.",
    description:
      "We equip young people with leadership skills, vocational training, entrepreneurship support, and business start-up grants to promote self-reliance and responsible citizenship.",
    icon: Rocket,
    image: "/images/impact/community/greeting-community-children.jpg",
    imageAlt:
      "A Foundation volunteer bends down to greet a group of young people during a community outreach visit.",
  },
  {
    slug: "women-widow-empowerment",
    title: "Women & Widow Empowerment",
    short:
      "Financial assistance, business capital, and skills acquisition for widows and vulnerable women.",
    description:
      "We provide financial assistance, business capital, and skills acquisition opportunities for widows and vulnerable women to improve their economic independence and family well-being.",
    icon: HeartHandshake,
    image: "/images/impact/homevisits/family-home-visit-encouragement.jpg",
    imageAlt:
      "A Foundation team member shares words of encouragement with a family during a home visit.",
  },
  {
    slug: "education-support",
    title: "Education Support",
    short:
      "Scholarships, school materials, and educational sponsorship for underprivileged children.",
    description:
      "We assist underprivileged children and students through scholarships, school materials, and educational sponsorship to ensure access to quality education.",
    icon: GraduationCap,
    image: "/images/impact/children/village-children-visit.jpg",
    imageAlt:
      "A Foundation worker stands with seven village children on a dusty road during an education outreach visit.",
  },
  {
    slug: "humanitarian-healthcare",
    title: "Humanitarian & Healthcare Assistance",
    short:
      "Relief materials, mobility aids such as wheelchairs, medical support, and emergency assistance.",
    description:
      "We provide relief materials, mobility aids such as wheelchairs, medical support, and emergency assistance to vulnerable individuals and communities affected by hardship.",
    icon: Stethoscope,
    image: "/images/impact/mobility/tricycle-presentation-team.jpg",
    imageAlt:
      "Foundation volunteers stand with a young man receiving a hand-pedalled mobility tricycle outside his home.",
  },
  {
    slug: "community-development",
    title: "Community Development",
    short:
      "Sustainable projects with communities, faith-based organizations, and development agencies.",
    description:
      "We partner with communities, faith-based organizations, and development agencies to implement sustainable projects that improve livelihoods, strengthen local capacity, and promote social inclusion.",
    icon: Users,
    image: "/images/impact/relief/community-relief-gathering.jpg",
    imageAlt:
      "Women and children from a rural community gather on an open field during a Foundation outreach programme.",
  },
  {
    slug: "advocacy-civic-engagement",
    title: "Advocacy & Civic Engagement",
    short:
      "Good governance, peacebuilding, social justice, environmental stewardship, and citizen participation.",
    description:
      "We promote good governance, peacebuilding, social justice, environmental stewardship, and active citizen participation through advocacy, awareness campaigns, and community engagement.",
    icon: Scale,
    image: "/images/impact/relief/relief-outreach-supplies.jpg",
    imageAlt:
      "A smiling Foundation team member speaks with community members beside a pickup truck loaded with relief supplies.",
  },
];

/** "Our target" list — exactly as given in the Foundation's brief. */
export const targets: string[] = [
  "Education",
  "Bible translation",
  "Community Service",
  "Health Interventions",
  "Strategic training in technical vocational education",
  "Women and youth empowerment",
  "Civic Engagement",
];
