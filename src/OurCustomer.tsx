import React from "react";

const logos = [
  "./creative.svg",
  "./aplha.svg",
  "./tirta.svg",
  "./reward.svg",
  "./hands.svg",
  "./ix.svg",
  "./ad.svg",
  "./swasew.svg",
];

function Index() {
  return (
    <div className="md:w-4/5 w-11/12 justify-items-center md:my-15 mt-10">
      <div className=" px-4 mx-auto max-w-screen-xl text-center lg:py-5 lg:px-8 z-40">
        <h1
          className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-400 via-white to-gray-400 "
        >
          Powering Corporate Travel
        </h1>
        <p className="text-gray-300 md:text-lg text-sm">
          Helping businesses manage employee rides effortlessly, from booking to
          billing.
        </p>
      </div>
      <div
        className="w-full py-8 inline-flex flex-nowrap overflow-hidden
        [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]
        [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]"
      >
        <ul className="flex gap-2 sm:gap-10 md:gap-4 items-center justify-center [&_img]:max-w-none animate-infinite-scroll">
          {logos.concat(logos).map((logo, i) => (
            <li key={i}>
              <img src={logo} alt="logo" className="md:h-20 h-15 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;
