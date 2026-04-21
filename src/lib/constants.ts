import type { FAQItem, Step, Benefit } from "@/types";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Earnings", href: "#earnings" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  label: "PARTNER PROGRAMME",
  headline: "Built once. Earning always.",
  subtext:
    "You already have the expertise. We build the automation. You sell it to your clients and earn the majority\u00A0\u2014\u00A0recurring, forever.",
  cta: "Become a Partner",
  secondary: "See how it works",
};

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Pay a one-time setup fee",
    description:
      "Choose your niche. We scope the automation together and agree on what your workflow will do.",
  },
  {
    number: 2,
    title: "We build your workflow",
    description:
      "Autari designs and builds a white-label automation product ready for your clients.",
  },
  {
    number: 3,
    title: "You sell to your clients",
    description:
      "Use your expertise and network. Set your own pricing. Own the relationship.",
  },
  {
    number: 4,
    title: "You earn recurring revenue",
    description:
      "Keep the majority of every subscription your clients pay. Plus royalties from the B2C pool. Forever.",
  },
];

export const EARNING_CARDS = [
  {
    title: "One-time setup fee",
    description: "You pay once to have your workflow built. Then it's yours to sell.",
  },
  {
    title: "Recurring subscription revenue",
    description:
      "Your clients pay a monthly fee you set. You keep the majority of every payment.",
  },
  {
    title: "B2C platform royalties",
    description:
      "When platform subscribers use your workflow, you earn a share of their subscription too.",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Your own product",
    description: "A fully built automation workflow, based on your expertise, ready to sell.",
  },
  {
    title: "No dev team needed",
    description: "We handle all the technology. You handle the relationships.",
  },
  {
    title: "Scalability built in",
    description: "One workflow serves one client or one thousand. Same effort from you.",
  },
  {
    title: "Majority revenue share",
    description: "You keep the lion's share of recurring client payments. Forever.",
  },
  {
    title: "B2C royalty stream",
    description: "Earn passive income even when we sell your workflow directly on the platform.",
  },
  {
    title: "Ongoing support",
    description: "We maintain and update the workflow. You stay focused on growth.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does it cost to get started?",
    answer:
      "Setup fees depend on the complexity of your workflow. As a guide, they range from around \u00A3200 for a basic workflow to \u00A32,000+ for advanced custom builds. You pay once, then earn from it indefinitely.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "None at all. You bring your expertise and process knowledge. We handle all the design, development, and technical maintenance.",
  },
  {
    question: "How much can I earn?",
    answer:
      "That depends on your client base and pricing. You keep the majority of every recurring subscription your clients pay, plus royalties from B2C platform users. One workflow can generate revenue from multiple channels simultaneously.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "We'll review your application and get back to you within 48 hours. From there, we'll have a short conversation to understand your expertise and scope your first workflow.",
  },
  {
    question: "Can I partner in more than one niche?",
    answer:
      "Absolutely. If you have expertise in multiple areas, you can build multiple workflows. Each one becomes its own revenue stream.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "You do. Your clients are your clients. You set the pricing, manage the relationship, and control the sales process. We stay in the background.",
  },
];

export const EXPERTISE_OPTIONS = [
  "Finance / Accounting",
  "Marketing / Advertising",
  "Sales / CRM",
  "HR / Recruitment",
  "Legal",
  "Healthcare",
  "Property / Real Estate",
  "Architecture / Engineering",
  "Operations / Logistics",
  "Education / Training",
  "Other",
];

export const HEARD_ABOUT_OPTIONS = [
  "LinkedIn",
  "Google Search",
  "Referral",
  "Social Media",
  "Event / Conference",
  "Other",
];
