"use client";
import { motion } from "framer-motion";
import { CarFront, ChevronDown, Phone, Menu, X} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const MobileAccordionItem = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (ref.current) {
        setHeight(open ? ref.current.scrollHeight : 0);
      }
    }, [open]);

    return (
      <div className="border border-neutral-900 rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-3 py-2 text-neutral-200 hover:bg-neutral-900 rounded-lg"
        >
          {title}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            ref={ref}
            className="pl-4 pr-2 pb-3 mt-1 space-y-3 text-sm text-neutral-300"
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const handleOpen = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 300);
  };

  /* Desktop Dropdown Component */
  const DesktopMenuItem = ({
    id,
    title,
    children,
    isOpen,
    onOpen,
    onClose,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }) => {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setMounted(true);
        requestAnimationFrame(() => setAnimate(true));
      } else {
        setAnimate(false);
        const timeout = setTimeout(() => setMounted(false), 200);
        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    return (
      <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
        <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50">
          {title}
          <span
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={14} />
          </span>
        </button>

        {mounted && (
          <div
            className={`absolute left-1/2 mt-2 grid gap-2 rounded-lg bg-neutral-900 shadow-lg p-2 transform transition-all duration-200 ease-out ${
              animate
                ? "opacity-100 scale-100 translate-y-0 -translate-x-1/2"
                : "opacity-0 scale-0 -translate-y-2 -translate-x-1/2"
            }`}
          >
            {children}
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      <nav className="hidden md:flex absolute z-50 w-full bg-black/50 backdrop-blur-md justify-between items-center p-3 px-35 md:mx-30 mx-5 h-fit border border-neutral-900">
        {/* Logo */}
        <img src="./logo.svg" alt="Logo" className="h-10" />

        {/* Desktop Nav */}
        <ul className=" sm:flex list-none">
          <li>
            <a
              className="block rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
              href="#"
            >
              Driver
            </a>
          </li>
          <li>
            <a
              className="block rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
              href="#"
            >
              Passenger
            </a>
          </li>
          <DesktopMenuItem
            id="services"
            title="Services"
            isOpen={openMenu === "services"}
            onOpen={() => handleOpen("services")}
            onClose={handleClose}
          >
            <div className="grid grid-cols-1  w-200 md:grid-cols-2 gap-6 p-4 mx-auto">
              {/* <!-- Left Column: Single Large Card --> */}
              <a
                href="#"
                className="flex flex-col w-full rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-800/50 p-6 text-white"
              >
                <img
                  src="./hybrid.svg"
                  alt="Hybrid Designs Logo"
                  className="w-72 mb-4"
                />
                <div className="text-2xl font-bold mb-3">Hybrid Designs</div>
                <p className="text-base text-neutral-200 leading-relaxed">
                  Hybrid Designs PLC entered the RIDE hailing market in 2014
                  with a vision to make transportation in the capital safe,
                  affordable and convenient through technology.
                </p>
              </a>

              {/* <!-- Right Column: Three Stacked Cards --> */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride business.svg"
                    alt="Feature 3 Logo"
                    className="w-28 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Business
                    </div>
                    <div className="text-neutral-300 text-sm">
                      A Platform for all your business needs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride capital.svg"
                    alt="Feature 3 Logo"
                    className="w-28 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Capital
                    </div>
                    <div className="text-neutral-300 text-sm">
                      Buy cars and homes with flexible options.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride food.svg"
                    alt="Feature 3 Logo"
                    className="w-28 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Food
                    </div>
                    <div className="text-neutral-300 text-sm">
                      Order food fast with Ride app, code 8294.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DesktopMenuItem>
          <DesktopMenuItem
            id="Solutions"
            title="Solutions"
            isOpen={openMenu === "Solutions"}
            onOpen={() => handleOpen("Solutions")}
            onClose={handleClose}
          >
            <div className="grid grid-cols-1  w-200 md:grid-cols-2 gap-6 p-4 mx-auto">
              {/* <!-- Left Column: Single Large Card --> */}
              <a
                href="#"
                className="flex flex-col w-full rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-800/50 p-6 text-white"
              >
                <img
                  src="./2f.svg"
                  alt="2f capital Logo"
                  className="w-72 mb-8"
                />
                <div className="text-2xl font-bold mb-3">2F Capital</div>
                <p className="text-base text-neutral-200 leading-relaxed">
                  TWOF Capital PLC, founded in June 2020, develops disruptive
                  technologies to transform entertainment through Sewasew
                  Multimedia with a team of 35+ engineers.
                </p>
              </a>

              {/* <!-- Right Column: Three Stacked Cards --> */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride plus.svg"
                    alt="Feature 3 Logo"
                    className="h-18 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Plus
                    </div>
                    <div className="text-neutral-300 text-sm">
                      Flexible Credit Management for driver transactions.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride ad.svg"
                    alt="Feature 3 Logo"
                    className="h-18 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Ad
                    </div>
                    <div className="text-neutral-300 text-sm">
                      Promote your products on our websites.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:bg-neutral-800/50 rounded-xl pointer">
                  <img
                    src="./ride blog.svg"
                    alt="Feature 3 Logo"
                    className="h-20 p-2 bg-neutral-800/50 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-semibold text-lg">
                      RIDE Blog
                    </div>
                    <div className="text-neutral-300 text-sm">
                      Discover the latest trends in business and technology on
                      our blog.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DesktopMenuItem>
          <li>
            <a
              className="block rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
              href="#"
            >
              About Us
            </a>
          </li>
        </ul>

        <ul className="flex list-none gap-4 ">
          <li>
            <a
              className="inline-flex items-center rounded-lg px-2 sm:px-3 py-2 text-[14px] sm:text-[15px] font-medium text-neutral-200 hover:bg-neutral-900 border border-neutral-900"
              href="#"
            >
              <Phone className="mr-2" size={18} />
              8294
            </a>
          </li>
          <li>
            <a
              className="relative inline-flex items-center rounded-lg px-2 sm:px-3 py-2 text-[14px] sm:text-[15px] font-medium text-neutral-200 hover:bg-neutral-900 border border-neutral-900"
              href="#"
            >
              <CarFront className="mr-2" size={18} />
              BooK Ride
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-50 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-neutral-200"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden absolute z-50 w-full h-fit bg-neutral-950 border border-neutral-800 p-3 flex items-center justify-between mx-50 rounded-2xl">
        <img src="./logo.svg" alt="Logo" className="h-10" />
        <ul className="flex list-none gap-4 ">
          <li>
            <a
              className="inline-flex items-center rounded-lg px-2 sm:px-3 py-2 text-[14px] sm:text-[15px] font-medium text-neutral-200 hover:bg-neutral-900 border border-neutral-900"
              href="#"
            >
              <Phone className="mr-2" size={18} />
              8294
            </a>
          </li>
          <li>
            <a
              className="relative inline-flex items-center rounded-lg px-2 sm:px-3 py-2 text-[14px] sm:text-[15px] font-medium text-neutral-200 hover:bg-neutral-900 border border-neutral-900"
              href="#"
            >
              <CarFront className="mr-2" size={18} />
              BooK Ride
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-50 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-neutral-200"></span>
              </span>
            </a>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-neutral-200 p-2 rounded-lg hover:bg-neutral-900"
          aria-label="Toggle mobile menu"
          animate={{
            rotate: mobileOpen ? 180 : 0,
            scale: mobileOpen ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-950 border border-neutral-800 rounded-2xl mt-2 overflow-hidden transition-all duration-500 ease-in-out">
            <ul className="flex flex-col p-4 gap-2">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 transition-colors"
                >
                  Driver
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 transition-colors"
                >
                  Passenger
                </a>
              </li>
              <MobileAccordionItem title="Services">
                <div className="flex flex-col gap-3 my-4">
                  <a
                    href="#"
                    className="block p-3 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800/50 "
                  >
                    <img src="./hybrid.svg" alt="" className="mb-4" />
                    <p className="text-neutral-400 text-sm">
                      Hybrid Designs Hybrid Designs PLC entered the RIDE hailing
                      market in 2014 with a vision to make transportation in the
                      capital safe, affordable and convenient through
                      technology.
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-900 hover:bg-neutral-800/50 transition-colors"
                  >
                    <img
                      src="./ride business.svg"
                      className="h-12 p-1 bg-neutral-800/50 rounded-md"
                    />
                    <div>
                      <div className="text-white font-medium">
                        RIDE Business
                      </div>
                      <div className="text-neutral-400 text-sm">
                        A Platform for all your business needs
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-900 hover:bg-neutral-800/50 transition-colors"
                  >
                    <img
                      src="./ride business.svg"
                      className="h-12 p-1 bg-neutral-800/50 rounded-md"
                    />
                    <div>
                      <div className="text-white font-medium">
                        RIDE Business
                      </div>
                      <div className="text-neutral-400 text-sm">
                        A Platform for all your business needs
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-900 hover:bg-neutral-800/50 transition-colors"
                  >
                    <img
                      src="./ride business.svg"
                      className="h-12 p-1 bg-neutral-800/50 rounded-md"
                    />
                    <div>
                      <div className="text-white font-medium">
                        RIDE Business
                      </div>
                      <div className="text-neutral-400 text-sm">
                        A Platform for all your business needs
                      </div>
                    </div>
                  </a>
                </div>
              </MobileAccordionItem>

              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
