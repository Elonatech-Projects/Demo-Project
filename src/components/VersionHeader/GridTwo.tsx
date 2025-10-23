"use client";
import { useState } from "react";
import Image from "next/image";

export function GridTwo() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  
  return (
    <div className="m-auto grid md:grid-cols-2 gap-4 lg:w-[990px] lg:grid-cols-3 xl:w-[95%] xl:grid-cols-3  ">
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
            <h1 className="text-lg font-semibold mb-2">NETWORK ENGINEERING/</h1>
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
              <p>Responsible for installing, implementing, and maintaining</p>
              <p>business applications for organizations...</p>
            </div>
            <div className="block lg:hidden text-center text-xs">
              <p>Responsible for installing, implementing, and maintaining</p>
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
            <h1 className="text-lg font-semibold mb-2">COMPUTER ENGINEERING</h1>

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
    </div>
  );
}
