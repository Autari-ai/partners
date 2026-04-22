"use client";

import { useEffect } from "react";

declare global {
  interface Navigator {
    modelContext?: {
      provideContext: (context: {
        tools: Array<{
          name: string;
          description: string;
          inputSchema: Record<string, unknown>;
          execute: (input: Record<string, unknown>) => Promise<unknown>;
        }>;
      }) => void;
    };
  }
}

const PARTNERSHIP_DETAILS = {
  programme: "Autari Partner Programme",
  url: "https://partners.autari.co.uk",
  overview:
    "Autari builds white-label automation workflows for domain experts. Partners bring expertise, Autari builds the technology, partners sell to clients and keep the majority of recurring revenue.",
  steps: [
    "Pay a one-time setup fee — choose your niche and scope the automation together",
    "We build your workflow — white-label automation product ready for your clients",
    "You sell to your clients — set your own pricing, own the relationship",
    "You earn recurring revenue — keep the majority of subscriptions plus B2C royalties, forever",
  ],
  earningModel: {
    setupFee: "One-time fee from ~£200 (basic) to £2,000+ (advanced custom builds)",
    recurringRevenue: "Monthly subscription fees from your clients — you keep the majority",
    b2cRoyalties:
      "Share of subscription revenue when platform users access your workflow",
  },
  benefits: [
    "Your own product — fully built automation workflow ready to sell",
    "No dev team needed — Autari handles all technology",
    "Scalability built in — one workflow serves one to thousands of clients",
    "Majority revenue share — forever",
    "B2C royalty stream — passive income from platform sales",
    "Ongoing support — Autari maintains and updates the workflow",
  ],
  applicationUrl: "https://partners.autari.co.uk/#apply",
};

const FAQ = [
  {
    question: "How much does it cost to get started?",
    answer:
      "Setup fees range from around £200 for a basic workflow to £2,000+ for advanced custom builds. You pay once, then earn from it indefinitely.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "None at all. You bring your expertise and process knowledge. Autari handles all design, development, and technical maintenance.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Depends on your client base and pricing. You keep the majority of every recurring subscription your clients pay, plus royalties from B2C platform users.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Application reviewed within 48 hours. A short conversation follows to understand your expertise and scope your first workflow.",
  },
  {
    question: "Can I partner in more than one niche?",
    answer:
      "Yes. Multiple areas of expertise means multiple workflows, each its own revenue stream.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "You do. Your clients are your clients. You set pricing, manage the relationship, and control the sales process.",
  },
];

export default function WebMCP() {
  useEffect(() => {
    if (!navigator.modelContext) return;

    navigator.modelContext.provideContext({
      tools: [
        {
          name: "get_partnership_details",
          description:
            "Get structured information about the Autari partner programme including how it works, the earning model, and benefits",
          inputSchema: { type: "object", properties: {} },
          execute: async () => PARTNERSHIP_DETAILS,
        },
        {
          name: "get_faq",
          description:
            "Get frequently asked questions and answers about partnering with Autari",
          inputSchema: { type: "object", properties: {} },
          execute: async () => ({ faq: FAQ }),
        },
        {
          name: "navigate_to_application",
          description:
            "Navigate to the partner application form section of the page",
          inputSchema: { type: "object", properties: {} },
          execute: async () => {
            const el = document.getElementById("apply");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            return {
              success: true,
              message: "Navigated to partner application form",
              url: "https://partners.autari.co.uk/#apply",
            };
          },
        },
      ],
    });
  }, []);

  return null;
}
