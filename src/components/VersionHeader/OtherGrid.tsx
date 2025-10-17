"use client";
import { useState } from "react";
import Image from "next/image";

export function OtherGrid() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  const [itemOne, setItemOne] = useState(false);
  return (
    <div className="grid grid-cols-2 mt-3.5 gap-3.5">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300 z-30 px-2.5">
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

      <div
        onMouseEnter={() => setItem(true)}
        onMouseLeave={() => setItem(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px] overflow-hidden"
      >
        <Image
          src="/consulting_ldkbus.ed6f794e06c567ea6818.png"
          alt="web"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />
        <div className="text-white absolute bottom-0 left-0 bg-[#295a9a] font-bold flex flex-col items-center justify-center p-3">
          <p className="text-xs sm:text-sm">CONSULTING</p>
          <Image alt="logo" height={90} width={60} src="/graphic_pkt8ib.png" />
        </div>

        {item && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a] bg-opacity-95 text-white transition-all duration-300">
            <h1 className="text-[18px] font-semibold mb-2">CONSULTING</h1>
            <Image
              alt="logo"
              height={90}
              width={60}
              src="/graphic_pkt8ib.png"
            />
            <p className="mt-3 text-center w-[300px] text-[14px]">
              We help brands and businesses gain a competitive advantage with
              12+ years of experience delivering tailored solutions.
            </p>
            <button className="mt-4 bg-white text-[#295a9a] px-[16px] py-[8px] rounded-md font-medium">
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
