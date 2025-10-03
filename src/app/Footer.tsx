import { ShimmeringText } from "@/components/ui/shadcn-io/shimmering-text";
import {
  Building2,
  Dot,
  FacebookIcon,
  IdCardIcon,
  LayoutGrid,
  Linkedin,
  MapPinned,
  MessageCircleQuestionMark,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border border-neutral-800 md:w-fit w-11/12 h-fit md:mb-10 m-5 md:mt-30 mt-25 rounded-2xl overflow-clip ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:p-15 p-5 pb-8 relative">
        <div className="bg-neutral-800 h-0.5 absolute bottom-0 left-5 right-5 md:left-[60px] md:right-[60px]"></div>
        <div className="space-y-4">
          <img src="./ride.svg" alt="Company Logo" className="h-16" />
          <p className="text-gray-300 md:text-md text-md  max-w-2xs">
            Hybrid Designs PLC entered the RIDE hailing market in 2014 with a
            vision to make transportation in the capital safe, affordable and
            convenient through technology.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-neutral-300 flex items-center gap-3 text-xl font-semibold">
            <IdCardIcon className="h-auto w-8 text-neutral-300" />
            Driver Resources
          </h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white font-medium">
                Driver Signup
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
               RIDE Driver Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
                Lost and Found
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
                በባንክ ካርድ ለሰሩት ስራ ክፍያ እንዴት ያገኛሉ?
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-neutral-300 flex items-center gap-3 text-xl font-semibold">
            <Building2 className="h-6 w-6 text-neutral-300" />
            Company and Services
          </h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white font-medium">
                Service Types
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
                RIDE Company Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-medium">
                የኃይብሪድ ዲዛይንስ-ኃላ-የተ-የግ-ኩባንያ የመንገደኞች ውል እና ስምምነት
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-neutral-300 flex items-center gap-3 text-xl font-semibold">
            <LayoutGrid className="h-6 w-6 text-neutral-300" />
            Get the Apps for free
          </h1>
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-2 items-center w-fit gap-2">
              <img src="ride.svg" alt="Creative" className="w-22" />
              <div className="flex gap-2">
                <div className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition">
                  <img src="./play.svg" alt="Play Store" className="h-6" />
                </div>
                <div className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition">
                  <img src="./app.svg" alt="App Store" className="h-6" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center w-fit gap-2">
              <img src="ride plus.svg" alt="Creative" className="w-24" />
              <div className="flex gap-2">
                <div className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition">
                  <img src="./play.svg" alt="Play Store" className="h-6" />
                </div>
                <div className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition">
                  <img src="./app.svg" alt="App Store" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-5 grid grid-cols-1 justify-center md:flex md:flex-col items-center md:justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
          <h1 className="text-lg font-medium w-full md:w-auto">
            Contact Infos:
          </h1>

          <p className="inline-flex gap-2 items-center font-normal text-lg">
            <Phone size={24} /> 8294
          </p>

          {/* Dot visible only on md and above */}
          <Dot size={20} className="text-neutral-500 hidden md:inline-block" />

          <p className="inline-flex gap-2 items-center font-normal text-lg">
            <MessageCircleQuestionMark size={24} /> support@ride8294.com
          </p>

          <Dot size={20} className="text-neutral-500 hidden md:inline-block" />

          <p className="inline-flex gap-2 items-center font-normal text-lg">
            <MapPinned size={24} className="flex-shrink-0" />
            Sheger Building, Bole 1st floor, Addis Ababa, Ethiopia
          </p>
        </div>

        <p className="text-neutral-400 text-sm text-center w-full">
          @2025 RIDE 8294. All Rights Reserved.
        </p>
      </div>

      <div className="bg-neutral-900 w-full md:px-15 px-5 py-6 md:flex grid gap-6 md:flex-cols-3 md:justify-between items-center justify-items-center">
        <p className="text-neutral-400 font-medium">
          Designed & Developed by{" "}
          <span>
            <ShimmeringText
              className="md:text-lg font-bold text-white"
              text="Hiryakos Molla"
              wave={true}
            />
          </span>
        </p>
        <div className="flex md:items-center gap-2 text-gray-400 text-sm">
          <a
            href="#"
            className="hover:text-white font-medium transition-colors text-md"
          >
            Terms of Service
          </a>
          <Dot size={20} className="text-neutral-500" />
          <a
            href="#"
            className="hover:text-white font-medium transition-colors text-md"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="md:text-md text-sm font-medium text-neutral-300">
            Follow us on
          </p>
          <div className="flex gap-2">
            <div className="p-2 border border-neutral-700 hover:bg-neutral-700 rounded-full">
              <FacebookIcon className="text-neutral-300" />
            </div>
            <div className="p-2 border border-neutral-700 hover:bg-neutral-700 rounded-full">
              <Linkedin className="text-neutral-300" />
            </div>
            <div className="p-2 border border-neutral-700 hover:bg-neutral-700 rounded-full">
              <Twitter className="text-neutral-300" />
            </div>
            <div className="p-2 border border-neutral-700 hover:bg-neutral-700 rounded-full">
              <Youtube className="text-neutral-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
