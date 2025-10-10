"use client";

import Image from "next/image";
import { useState } from "react";

export function WhatWeDo() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  const [itemOne, setItemOne] = useState(false);
  return (
    <div className="pt-5">
      <div className="w-[93%] grid grid-cols-1 gap-10 lg:grid-cols-3 lg:w-[80%] lg:gap-0 m-auto">
        {/* item-one */}
        <div
          onMouseEnter={() => setPopImg(true)}
          onMouseLeave={() => setPopImg(false)}
          className="relative w-full min-h-[] overflow-hidden rounded-lg lg:w-[480px] lg:h-[40vh]"
        >
          {/* Background Image */}
          <Image
            src="/web_design_dtffrx.4e297f025df2cc4dc1ec.png"
            alt="web"
            width={200}
            height={100}
            className="object-cover object-center w-full h-full"
          />

          {/* Bottom logo — positioned relative to parent */}
          <div className="absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold">
            <p>WEB DESIGN &</p>
            <p>DEVELOPMENT</p>
            <Image
              alt="logo"
              height={90}
              width={60}
              src="/website_svappk.png"
            />
          </div>

          {/* Hover overlay */}
          {popImg && (
            <div className="absolute z-30 inset-0 flex flex-col items-center justify-center bg-[#295a9a] opacity-90 text-white transition-all duration-300">
              <h1 className="text-lg font-semibold mb-2">
                WEB DESIGN & DEVELOPMENT
              </h1>

              <div className="mb-3">
                <Image
                  alt="logo"
                  height={90}
                  width={60}
                  src="/website_svappk.png"
                />
              </div>

              <div className="hidden lg:block">
                <p>
                  At Elonatech, we build websites that are not only visually
                </p>
                <p>
                  beautiful but also functionally effective — our team of web
                </p>
                <p className="text-center">strategists...</p>
              </div>
              <div className="block lg:hidden">
                <p>At Elonatech, we build websites that are not only</p>
                <p>visually beautiful but also functionally effective —</p>
                <p className="text-center"> our team of web strategists...</p>
              </div>
              <div className="mt-4">
                <button className="bg-white text-[#295a9a] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                  See More
                </button>
              </div>
            </div>
          )}
        </div>
        {/* item-two */}
        <div
          onMouseEnter={() => setItem(true)}
          onMouseLeave={() => setItem(false)}
          className="relative w-full h-[45vh] overflow-hidden rounded-lg lg:w-[480px] lg:h-[40vh]"
        >
          {/* Background Image */}
          <Image
            src="/digital_marketing_g63rfx.c1a2cfa8699399d06000.png"
            alt="web"
            width={200}
            height={100}
            className="object-cover object-center w-full h-full"
          />

          {/* Bottom logo — positioned relative to parent */}
          <div className="absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold">
            <p>DIGITAL MAKETING</p>
            {/* <p>DEVELOPMENT</p> */}
            <Image
              alt="logo"
              height={90}
              width={60}
              src="/network_2_hbxvaz.png"
            />
          </div>

          {/* Hover overlay */}
          {item && (
            <div className="absolute z-30 inset-0 flex flex-col items-center justify-center bg-[#295a9a] opacity-90 text-white transition-all duration-300">
              <h1 className="text-lg font-semibold mb-2">DIGITAL MAKETING</h1>

              <div className="mb-3">
                <Image
                  alt="logo"
                  height={90}
                  width={60}
                  src="/network_2_hbxvaz.png"
                />
              </div>

              <div className="hidden lg:block">
                <p>With digital marketing, we have successfully changed the</p>
                <p>way brand and businesses use technology for marketing.</p>
                <p className="text-center">Digital platforms are...</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:hidden">
                <p></p>
                <p>With digital marketing, we have successfully </p>
                <p>changed the way brand and businesses use </p>
                <p className="text-center">Digital platforms are...</p>
              </div>
              <div className="mt-4">
                <button className="bg-white text-[#295a9a] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                  See More
                </button>
              </div>
            </div>
          )}
        </div>
        {/* item-three */}
        <div
          onMouseEnter={() => setItemOne(true)}
          onMouseLeave={() => setItemOne(false)}
          className="relative w-full h-[45vh] overflow-hidden rounded-lg lg:w-[480px] lg:h-[40vh]"
        >
          {/* Background Image */}
          <Image
            src="/graphics_and_branding_nme5lb.0de92b24591faa917437.png"
            alt="web"
            width={200}
            height={100}
            className="object-cover object-center w-full h-full"
          />

          {/* Bottom logo — positioned relative to parent */}
          <div className="absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold">
            <p>GRAPHIC & BRANDING</p>
            {/* <p>DEVELOPMENT</p> */}
            <Image
              alt="logo"
              height={90}
              width={60}
              src="/graphic_pkt8ib.png"
            />
          </div>

          {/* Hover overlay */}
          {itemOne && (
            <div className="absolute z-30 inset-0 flex flex-col items-center justify-center bg-[#295a9a] opacity-90 text-white transition-all duration-300">
              <h1 className="text-lg font-semibold mb-2">GRAPHIC & BRANDING</h1>

              <div className="mb-3">
                <Image
                  alt="logo"
                  height={90}
                  width={60}
                  src="/graphic_pkt8ib.png"
                />
              </div>

              <div className="hidden lg:block">
                <p>
                  Brand identity is not limited to a speciffic mark or name,
                </p>
                <p className="text-center">
                  Branding can incorporate many touch points...
                </p>
              </div>
              <div className="flex flex-col justify-center items-center lg:hidden">
                <p></p>
                <p>
                  Brand identity is not limited to a speciffic mark or name.
                </p>
                <p className="text-center">
                  Branding can incorporate many touch points...
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-white text-[#295a9a] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                  See More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
