"use client";
import { ArrowDown } from "lucide-react";
import LightRays from "./components/LightRays";
import { useState, useEffect } from "react";
import { ShimmeringText } from "@/components/ui/shadcn-io/shimmering-text";

const Hero = () => {
  const [rayLength, setRayLength] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile breakpoint
        setRayLength(80);
      } else {
        // Desktop
        setRayLength(5);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-fit relative flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 z-40 md:mt-30 mt-40">
        <h1
          className="mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-400 via-white to-gray-400 "
        >
          Ride Smarter. Earn More.
        </h1>

        {/* Subheadline / description */}
        <p className="mb-6 text-lg sm:text-lg md:text-xl font-normal text-gray-300 dark:text-gray-300 sm:px-4 md:px-16 xl:px-48">
          A <span className="text-white font-bold">RIDE PLUS</span> is the
          secure cashless platform for trips, payments, rewards, and corporate
          rides—all in one.
        </p>

        {/* Call-to-action buttons */}
        <div className="mb-8 lg:mb-10 space-y-4 sm:grid-col-1 sm:justify-center sm:space-y-0 sm:space-x-4">
          <div className="grid grid-cols-1 justify-items-center gap-4 mb-4">
            <p className="text-white">DOWNLOAD THE APP NOW</p>
            <p className="text-white">
              <ArrowDown className="text-center md:w-5 md:h-5 w-5 h-5 animate-bounce" />
            </p>
          </div>
          <div className="grid grid-cols-auto justify-items-center gap-1 w-full justify-center ">
            <div className="grid md:grid-cols-2 gap-1.5 w-full">
              <a
                href="#"
                className="w-full justify-center items-center gap-2 inline-flex py-3 px-15 sm:px-5 md:text-lg text-sm font-medium rounded-lg text-white bg-gray-100/10 hover:bg-gray-100/20"
              >
                <img src="./play.svg" alt="" className="w-4 md:w-5" />
                <p >On play Store</p>
              </a>
              <a
                href="#"
                className="w-full justify-center items-center gap-2 inline-flex py-3 px-15 sm:px-5 md:text-lg text-sm font-medium rounded-lg text-white bg-gray-100/10 hover:bg-gray-100/20"
              >
                <img src="./app.svg" alt=""  className="w-4 md:w-5" />
                <p>On App Store</p>
              </a>
            </div>
          </div>
        </div>
        <div className="grid justify-items-center">
          <img src="./hero bg.svg" alt="" />
        </div>
        <div className="grid gap-4 md:mt-8 mt-4">
          <h2 className="flex items-center justify-center text-lg sm:text-2xl font-bold text-gray-300 gap-1">
            <img
              src="./space.gif"
              alt="Space GIF"
              className="h-6 w-6 sm:h-10 sm:w-10"
            />
            Effortless Travel for Your Team.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:text-lg text-sm">
            Simplify your company rides with a dedicated dashboard, custom
            packages, and smart billing—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <button className="py-2 px-7 border border-gray-400/50 rounded-md bg-white/5">
              <ShimmeringText
                className="text-lg font-bold text-white"
                text="Get Started"
                wave={false}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0 overflow-visible">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={rayLength}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
    </div>
  );
};

export default Hero;
