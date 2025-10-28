"use client";

import Image from "next/image";
import { useState } from "react";

export function GridColThree() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  const [itemOne, setItemOne] = useState(false);
  return (
    <div className="m-auto grid md:grid-cols-2 gap-4 lg:w-[930px] lg:grid-cols-3 xl:w-full xl:grid-cols-3">
      {/* ITEM ONE */}
      <div
        onMouseEnter={() => setPopImg(true)}
        onMouseLeave={() => setPopImg(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px]"
      >
        <Image
          src="/web_design_dtffrx.4e297f025df2cc4dc1ec.png"
          alt="web"
          width={790}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />

        <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] flex flex-col justify-center items-center w-[150px] h-[120px]">
          <p className="whitespace-nowrap font-bold text-xs text-white sm:text-sm">
            WEB DESIGN &
          </p>
          <p className="whitespace-nowrap text-xs font-bold sm:text-sm">
            DEVELOPMENT
          </p>
          <Image
            alt="logo"
            height={90}
            width={60}
            src="/website_svappk.png"
            className="flex-shrink-0"
          />
        </div>

        {popImg && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300 z-0 text-xs px-2.5">
            <h1 className="text-[15px] font-semibold mb-2 text-center">
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

            <div className="hidden lg:block text-xs font-bold">
              <p className="text-center">
                At Elonatech, we build websites that are not only visually
              </p>
              <p className="text-center">
                beautiful but also functionally effective — our team of web
              </p>
              <p className="text-center">strategists...</p>
            </div>
            <div className="text-center font-bold text-xs block lg:hidden">
              <p>At Elonatech, we build websites that are not only</p>
              <p>visually beautiful but also functionally effective —</p>
              <p className="text-center">our team of web strategists...</p>
            </div>

            <div className="mt-4">
              <button className="bg-white text-[#295a9a] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                See More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ITEM TWO */}
      <div
        onMouseEnter={() => setItem(true)}
        onMouseLeave={() => setItem(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px] overflow-hidden"
      >
        <Image
          src="/digital_marketing_g63rfx.c1a2cfa8699399d06000.png"
          alt="digital marketing"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />

        <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] flex flex-col justify-center items-center font-bold">
          <p className="text-xs sm:text-sm">DIGITAL MARKETING</p>
          <Image
            alt="logo"
            height={90}
            width={60}
            src="/network_2_hbxvaz.png"
          />
        </div>

        {item && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300 z-0 px-2.5">
            <h1 className="text-lg font-semibold mb-2">DIGITAL MARKETING</h1>

            <div className="mb-3">
              <Image
                alt="logo"
                height={90}
                width={60}
                src="/network_2_hbxvaz.png"
              />
            </div>

            <div className="hidden lg:block text-center text-xs font-bold">
              <p>With digital marketing, we have successfully changed the</p>
              <p>way brands and businesses use technology for marketing.</p>
              <p className="text-center">Digital platforms are...</p>
            </div>
            <div className="flex flex-col justify-center items-center text-xs lg:hidden">
              <p>With digital marketing, we have successfully</p>
              <p>changed the way brands and businesses use</p>
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

      {/* ITEM THREE */}
      <div
        onMouseEnter={() => setItemOne(true)}
        onMouseLeave={() => setItemOne(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px] overflow-hidden"
      >
        <Image
          src="/graphics_and_branding_nme5lb.0de92b24591faa917437.png"
          alt="graphics and branding"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />

        <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] flex flex-col justify-center items-center font-bold">
          <p className="text-xs sm:text-sm">GRAPHIC & BRANDING</p>
          <Image alt="logo" height={90} width={60} src="/graphic_pkt8ib.png" />
        </div>

        {itemOne && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300 z-0 px-2.5">
            <h1 className="text-lg font-semibold mb-2">GRAPHIC & BRANDING</h1>

            <div className="mb-3">
              <Image
                alt="logo"
                height={90}
                width={60}
                src="/graphic_pkt8ib.png"
              />
            </div>

            <div className="hidden lg:block text-xs text-center font-bold">
              <p>Brand identity is not limited to a specific mark or name,</p>
              <p className="text-center">
                Branding can incorporate many touch points...
              </p>
            </div>
            <div className="flex flex-col justify-center text-xs items-center lg:hidden">
              <p>Brand identity is not limited to a specific mark</p>
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
  );
}
