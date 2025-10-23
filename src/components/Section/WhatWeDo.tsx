"use client";

import Image from "next/image";
import { useState } from "react";
import { GridTwo } from "../VersionHeader/GridTwo";
import { GridThree } from "../VersionHeader/GridThree";

export function WhatWeDo() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  const [itemOne, setItemOne] = useState(false);

  return (
    <div className="mt-3.5 w-full">
      <div className="block md:hidden">
        <div className="m-auto grid grid-cols-1 gap-4">
          {/* ITEM ONE */}
          <div
            onMouseEnter={() => setPopImg(true)}
            onMouseLeave={() => setPopImg(false)}
            className="relative w-full h-[320px] sm:h-[360px] md:h-[340px]"
          >
            <Image
              src="/networking_sjpi7m.2c723bfe31cb0a9537af.png"
              alt="network engineering"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
            />

            <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold md:text-center">
              <p className="text-xs sm:text-sm">NETWORK ENGINEERING/</p>
              <p className="text-xs sm:text-sm">ADMINISTRATION</p>
              <Image
                alt="logo"
                height={90}
                width={60}
                src="https://res.cloudinary.com/elonatech/image/upload/v1709632430/homePage/What%20we%20do/icons/network_bcyqi7.png"
              />
            </div>

            {popImg && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300">
                <h1 className="text-lg font-semibold mb-2">
                  NETWORK ENGINEERING/
                </h1>
                <h1 className="text-lg font-semibold">ADMINISTRATION</h1>

                <div className="mb-3">
                  <Image
                    alt="logo"
                    height={90}
                    width={60}
                    src="https://res.cloudinary.com/elonatech/image/upload/v1709632430/homePage/What%20we%20do/icons/network_bcyqi7.png"
                  />
                </div>

                <div className="hidden lg:block text-center text-sm">
                  <p>
                    Responsible for installing, implementing, and maintaining
                  </p>
                  <p>business applications for organizations...</p>
                </div>
                <div className="block lg:hidden text-center text-xs">
                  <p>
                    Responsible for installing, implementing, and maintaining
                  </p>
                  <p>business applications for organizations...</p>
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
              src="/computer_engineering_kme7ga.9d5061bc74fa9fbe57b0.png"
              alt="computer engineering"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
            />

            <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[230px] flex flex-col justify-center items-center font-bold">
              <p className="text-xs sm:text-sm">COMPUTER ENGINEERING</p>
              <Image
                alt="logo"
                height={90}
                width={60}
                src="/network_2_hbxvaz.png"
              />
            </div>

            {item && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a]/90 text-white transition-all duration-300">
                <h1 className="text-lg font-semibold mb-2">
                  COMPUTER ENGINEERING
                </h1>

                <div className="mb-3">
                  <Image
                    alt="logo"
                    height={90}
                    width={60}
                    src="/network_2_hbxvaz.png"
                  />
                </div>

                <div className="hidden lg:block text-center text-sm">
                  <p>While computer hardware configurations vary widely, we</p>
                  <p>work on a broad range of hardware systems..</p>
                </div>
                <div className="block lg:hidden text-center text-xs">
                  <p>While computer hardware configurations vary widely, we</p>
                  <p>work on a broad range of hardware systems..</p>
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
              src="/survellance_and_access_n3m892.7b19735f9b5c0f44095e.png"
              alt="access control and surveillance"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
            />

            <div className="text-white absolute bottom-0 left-0 p-2 bg-[#295a9a] w-[200px] flex flex-col justify-center items-center font-bold">
              <p className="text-xs sm:text-sm">ACCESS CONTROL &</p>
              <p className="text-xs sm:text-sm">SURVEILLANCE</p>
              <Image
                alt="logo"
                height={90}
                width={60}
                src="/graphic_pkt8ib.png"
              />
            </div>

            {itemOne && (
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
                  <p>
                    While network security should always be a prime concern,
                  </p>
                  <p>
                    for your business, don&apos;t neglect your physical security
                  </p>
                  <p>either...</p>
                </div>
                <div className="block lg:hidden text-center text-xs">
                  <p>
                    While network security should always be a prime concern,
                  </p>
                  <p>
                    for your business, dont neglect your physical security...
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

      <div className="hidden md:block lg:hidden">
        <GridTwo />
      </div>

      <div className="hidden lg:block">
        <GridThree />
      </div>
    </div>
  );
}
