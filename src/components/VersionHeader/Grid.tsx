"use client";

import Image from "next/image";
import { useState } from "react";

export function Grid() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  return (
    <div className="grid grid-cols-1 mt-3.5">
      <div
        onMouseEnter={() => setItem(true)}
        onMouseLeave={() => setItem(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px] overflow-hidden"
      >
        <Image
          src="/survellance_and_access_n3m892.7b19735f9b5c0f44095e.png"
          alt="access control and surveillance"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />

        <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold">
          <p className="text-xs sm:text-sm">ACCESS CONTROL &</p>
          <p className="text-xs sm:text-sm">SURVEILLANCE</p>
          <Image alt="logo" height={90} width={60} src="/graphic_pkt8ib.png" />
        </div>

        {item && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300 px-2.5">
            <h1 className="text-lg font-semibold mb-1">ACCESS CONTROL &</h1>
            <h1 className="text-lg font-semibold mb-3">SURVEILLANCE</h1>

            <Image
              alt="logo"
              height={90}
              width={60}
              src="/graphic_pkt8ib.png"
              className="mb-3"
            />

            <div className="hidden lg:block text-center text-sm">
              <p>While network security should always be a prime concern,</p>
              <p>
                for your business, don&apos;t neglect your physical security
              </p>
              <p>either...</p>
            </div>
            <div className="block lg:hidden text-center text-xs">
              <p>While network security should always be a prime concern,</p>
              <p>for your business, dont neglect your physical security...</p>
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
