"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import DelayedLoopVideo from "./components/DelayedLoopVideo";

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
    title: "Select the trip you want to pay for.",
    description: "",
  },
  {
    number: 2,
    title: "Choose your desired payment method.",
    description: "",
  },
  {
    number: 3,
    title: "Instant payment to the driver.",
    description: "",
  },
];

const Learn04 = () => {
  return (
    <div className="relative flex flex-col items-start gap-4 py-0 px-5 md:max-w-10/12 mx-auto md:h-fit md:my-30 mt- mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-2 grid gap-4 h-fit">
          <div className="grid gap-2">
            <h1 className="text-gray-200 font-bold md:text-3xl text-2xl ">
              Seamless Payment Options (For Passengers)
            </h1>
            <p className="text-gray-400">
              Passengers can now experience ultimate convenience with our
              enhanced payment features! Instantly top up your wallet and pay
              for trips without any hassle. Plus, for added flexibility,
              corporate packages are available to cover your rides effortlessly.
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
                      h-[calc(100%-6.0rem)] md:h-[calc(100%-8rem)] lg:h-[calc(100%-6rem)]"
            >
              <div className="absolute w-full h-8 bg-gradient-to-t from-white to-transparent animate-gradientMove rounded-b-full"></div>
            </div>
            {/* Timeline steps */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[48px_1fr] items-center gap-4 relative mb-8"
              >
                <Circle className="bg-neutral-800">{step.number}</Circle>
                <div>
                  <h1 className="text-gray-300 text-lg font-bold">
                    {step.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-1">
          <DelayedLoopVideo
            src="./learn04.webm"
            delay={1000}
            className="md:h-140 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Learn04;
