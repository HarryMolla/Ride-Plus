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
        "flex w-12 h-12 items-center justify-center rounded-full border-2 border-gray-400 bg-white font-bold shadow-md z-10",
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
    title: "Visit an Ethio Telecom branch.",
    description: "",
  },
  {
    number: 2,
    title: "Provide the necessary documents to register as an agent.",
    description: "",
  },
  {
    number: 3,
    title: "Start offering Telebirr services to customers seamlessly.",
    description: "",
  },
];

const Learn05 = () => {
  return (
    <div className="relative flex flex-col items-start gap-4 py-0 px-5 md:max-w-10/12 mx-auto md:h-fit mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div className="order-2 md:order-1 grid gap-4 h-fit">
          <div className="grid gap-2">
            <h1 className="text-gray-300 font-bold md:text-3xl text-2xl ">
              eFloat: Empower Drivers to Become Agents
            </h1>
            <p className="text-gray-400">
              Drivers can now elevate their role by becoming eFloat agents,
              allowing them to use Telebirr for services like buying airtime,
              cashing out, and cashing in—turning them into mobile ATMs.
            </p>
          </div>
          <h1 className="text-gray-100 text-lg font-bold">How it Works</h1>
          {/* Timeline container */}
          <div className="relative flex flex-col items-start">
            {/* Vertical line */}
            <div
              className="
                      absolute left-[1.4rem] w-1 bg-white/10 rounded 
                      top-[1.5rem] 
                      h-[calc(100%-6.4rem)] md:h-[calc(100%-8rem)] lg:h-[calc(100%-6rem)]"
            >
              <div className="absolute w-full h-8 bg-gradient-to-t from-white to-transparent animate-gradientMove rounded-b-full"></div>
            </div>
            {/* Timeline steps */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[48px_1fr] items-center gap-4 relative mb-8"
              >
                <Circle className="bg-gray-300">{step.number}</Circle>
                <div>
                  <h1 className="text-gray-300 text-lg font-bold">
                    {step.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <video
            className="md:h-140 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./learn05.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Learn05;
