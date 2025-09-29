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
    title: "Purchase Credit",
    description:
      "As a driver, you can buy credit directly from your bank or mobile money service, ensuring you always have funds available.",
  },
  {
    number: 2,
    title: "Earn and Exchange",
    description:
      "AYou can also exchange your earned balance for credit, providing flexibility in managing your earnings.",
  },
  {
    number: 3,
    title: "Earn and Exchange",
    description:
      "You can also exchange your earned balance for credit, providing flexibility in managing your earnings.",
  },
  {
    number: 4,
    title: "Stay Prepared",
    description:
      "You can purchase additional credit anytime to ensure you're always ready for more pickups.",
  },
];

const Learn = () => {
  return (
    <div className="relative flex flex-col items-start gap-4 p-10 max-w-10/12 mx-auto md:h-screen my-20">
      <div className="grid md:grid-cols-2 gap-8 justify-items-center">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-gray-100 font-bold text-3xl">
              Flexible Credit Purchase (For Drivers)
            </h1>
            <p className="text-gray-300">
              With Flexible Credit Purchase, drivers can effortlessly buy credit
              from their favorite bank or mobile money services. They can also
              exchange credit from their earnings, making it easier to keep
              earning while managing their finances.
            </p>
          </div>
          <h1 className="text-gray-100 text-lg font-bold">How it Works</h1>
          {/* Timeline container */}
          <div className="relative flex flex-col items-start">
            {/* Vertical line */}
            <div
              className="absolute left-[1.4rem] w-1 bg-gray-700 rounded"
              style={{
                top: "1.5rem", // Start at the center of the first circle
                height: `calc(100% - 6rem)`, // End at the center of the last circle
              }}
            >
              <div className="absolute w-full h-8 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-gradientMove rounded"></div>
            </div>
            {/* Timeline steps */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[48px_1fr] items-start gap-4 relative mb-8"
              >
                <Circle className="bg-gray-100">{step.number}</Circle>
                <div>
                  <h1 className="text-gray-100 text-lg font-bold">
                    {step.title}
                  </h1>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <video
        className="h-140 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./test 2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </div>
  );
};

export default Learn;
