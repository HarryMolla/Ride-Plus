import React from 'react';

const logos = Array(10).fill("./reward.svg"); // adjust as needed

function Index() {
  return (
    <div className="md:w-4/5 w-11/12  justify-items-center">
      <div className="w-full py-8 inline-flex flex-nowrap overflow-hidden
        [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]
        [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">

        {/* Duplicate the list: logos.concat(logos) */}
        <ul className="flex gap-2 items-center justify-center sm:[&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.concat(logos).map((logo, i) => (
            <li key={i}>
              <img src={logo} alt="logo" className="md:h-20 h-10 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;
