"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-10 h-10 items-center justify-center rounded-full z-10 text-white font-medium",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    number: 1,
    title: "Register your corporate account to gain access to your dedicated dashboard.",
    description:
      "",
  },
  {
    number: 2,
    title: "Have full control over package creation and employee management.",
    description:
      "",
  },
  {
    number: 3,
    title: "Enjoy a convenient billing system.",
    description:
      "",
  },
  {
    number: 4,
    title: "Access full trip details and transaction histories.",
    description:
      "",
  },
];

const Learn06 = () => {
  return (
    <div className="relative flex flex-col items-start gap-4 py-0 px-5 md:max-w-10/12 mx-auto md:h-screen my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <div className="order-2 md:order-1 grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-gray-300 font-bold md:text-3xl text-2xl ">
              Effortless Corporate Management
            </h1>
            <p className="text-gray-400">
              Streamline your business travel with our Corporate Service!
              Companies can access a dedicated dashboard to create customized
              packages, set trip limits, and manage employee access. Equip your
              team with vouchers and exclusive discounts to make their rides
              more affordable.
            </p>
          </div>
          <h1 className="text-gray-100 text-lg font-bold">How it Works</h1>
          {/* Timeline container */}
          <div className="relative flex flex-col items-start">
            {/* Vertical line */}
            <div
              className="
                      absolute left-[1.2rem] w-0.5 bg-neutral-900 rounded 
                      top-[1.5rem] 
                      h-[calc(100%-6.5rem)] md:h-[calc(100%-9rem)] lg:h-[calc(100%-6.5rem)]"
            >
              <div className="absolute w-full h-8 bg-gradient-to-t from-white to-transparent animate-gradientMove rounded-b-full"></div>
            </div>
            {/* Timeline steps */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[48px_1fr] items-start gap-4 relative mb-8"
              >
                <Circle className="bg-neutral-800">{step.number}</Circle>
                <div>
                  <h1 className="text-gray-300 text-lg font-bold">
                    {step.title}
                  </h1>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="./learn06.svg" alt="" className="md:h-140 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Learn06;
