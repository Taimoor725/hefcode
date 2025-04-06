"use client"
import Button from "@/components/common/Button";
import React, { useState } from "react";

const pricingTabs = [
    "eTMF Software",
    "eQMS Software",
    "RIM Software",
    "Acrobat Sign Validation",
  ];
  
  
  const tabPlans = {
    "eTMF Software": [
      {
        title: "eTMF Starter",
        subtitle: "Stay organized and keep your trial files in one place.",
        modules: [
          "Easy document sorting",
          "Always ready for audits",
          "Simple permission control",
        ],
      },
      {
        title: "eTMF Pro",
        subtitle: "For teams who need extra tools to work better together.",
        modules: [
          "Work together in real-time",
          "Custom steps to match your process",
          "Instant progress tracking",
        ],
      },
    ],
    "eQMS Software": [
      {
        title: "Quality Connect ESSENTIALS",
        subtitle: "Start strong with everything you need to manage quality.",
        modules: [
          "Automatic task flows",
          "Pre-built templates",
          "Easy reviews and approvals",
          "Works with Word",
          "One place to store everything",
          "Legally binding e-signatures",
          "Turn files into PDFs",
          "Clear progress reports",
        ],
      },
      {
        title: "Quality Connect GROWTH",
        subtitle: "Grow confidently with smarter quality tools.",
        modules: [
          "Stay on top of supplier work",
          "Plan audits with ease",
          "Report and track issues",
          "Find the root of problems quickly",
          "Manage changes smoothly",
        ],
      },
    ],
    "RIM Software": [
      {
        title: "RIM Lite",
        subtitle: "Keep track of the basics without the clutter.",
        modules: [
          "Track submissions easily",
          "Quick and simple data entry",
          "Visual dashboards at a glance",
        ],
      },
      {
        title: "RIM Enterprise",
        subtitle: "Handle global needs with powerful features.",
        modules: [
          "Support for multiple regions",
          "Smart, detailed reports",
          "Custom team access settings",
        ],
      },
    ],
    "Acrobat Sign Validation": [
      {
        title: "Validation Essentials",
        subtitle: "Make sure every signature is safe and trusted.",
        modules: [
          "Check every signature",
          "Keep detailed logs",
          "Lock and protect PDF files",
        ],
      },
      {
        title: "Validation Pro",
        subtitle: "Stronger tools for industries with strict rules.",
        modules: [
          "All-in-one validation paperwork",
          "Smarter signing steps",
          "Works well with your tools",
        ],
      },
    ],
  };
  

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("eQMS Software");

  return (
    <div className="px-4 py-16 bg-gradient-to-br w-screen h-screen pt-32 mb-[30rem]">
      <div className="text-center max-w-4xl mx-auto my-[10rem] flex flex-col gap-5">
        <h1 className="text-6xl font-bold mb-4">
          Pricing and plans built for scaling life science teams
        </h1>
        <p className=" text-2xl">
          Explore the pricing options for all of Montrium's products below
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {pricingTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2  text-2xl rounded-full border cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-[#28DC86] border-[#28DC86]"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto _bg-[red]">
        {tabPlans[activeTab].map((plan, idx) => (
          <div key={idx} className="bg-[#F3F7FE] rounded-2xl shadow-lg p-6 lg:w-[30rem] lg:h-[40rem]">
            <div className="h-[8rem] w-full flex flex-col gap-3">
            <h2 className="text-3xl font-bold mb-1">
              {plan.title}
            </h2>
            <p className=" mb-4 text-2xl">{plan.subtitle}</p>
            </div>
            <ul className="list-disc list-inside text-2xl mt-1 lg:h-[20rem]">
              {plan.modules.map((feature, i) => (
                <li className="hover:text-[#28DC86] cursor-default _bg-[red]" key={i}>{feature}</li>
              ))}
            </ul>
            <div className=" h-[8rem] flex items-center">
            <Button text={"Book a Call"} iconbgcolor={"bg-[#1E225F]"} className={"lg:w-[10rem] bg-[#28DC86] rounded-3xl py-5 text-xl font-bold"}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
