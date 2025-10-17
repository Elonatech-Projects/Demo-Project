"use client";

import Image from "next/image";
import { useState } from "react";

export function DisplayThree() {
  const [popImg, setPopImg] = useState(false);
  const [item, setItem] = useState(false);
  const [itemOne, setItemOne] = useState(false);
  return (
    <div className="m-auto grid md:grid-cols-2 gap-4 lg:w-[990px] lg:grid-cols-3 xl:w-[95%] xl:grid-cols-3">
      {/* ================= ITEM ONE ================= */}
      <div
        onMouseEnter={() => setPopImg(true)}
        onMouseLeave={() => setPopImg(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px]"
      >
        <Image
          src="/animation_qzszuz.716c7c755fadc520d591.png"
          alt="web"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />

        <div className="text-white absolute bottom-0 left-0 bg-[#295a9a] font-bold flex flex-col items-center justify-center p-3">
          <p className="text-xs sm:text-sm">ANIMATION & VIDEO</p>
          <p className="text-xs sm:text-sm">GRAPHIC</p>
          <Image
            alt="logo"
            height={90}
            width={60}
            src="https://res.cloudinary.com/elonatech/image/upload/v1709632430/homePage/What%20we%20do/icons/network_bcyqi7.png"
          />
        </div>

        {popImg && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a] bg-opacity-95 text-white transition-all duration-300">
            <h1 className="text-[18px] font-semibold">ANIMATION & VIDEO</h1>
            <h1 className="text-[18px] font-semibold mb-2">GRAPHIC</h1>
            <Image
              alt="logo"
              height={90}
              width={60}
              src="https://res.cloudinary.com/elonatech/image/upload/v1709632430/homePage/What%20we%20do/icons/network_bcyqi7.png"
            />
            <p className="mt-3 text-center w-[300px] text-[14px]">
              Animations have the power to convey complex concepts, evoke
              emotions, and leave a lasting impression on your audience.
            </p>
            <button className="mt-4 bg-white text-[#295a9a] px-[16px] py-[8px] rounded-md font-medium">
              See More
            </button>
          </div>
        )}
      </div>

      {/* ================= ITEM TWO ================= */}
      <div
        onMouseEnter={() => setItem(true)}
        onMouseLeave={() => setItem(false)}
        className="relative w-full h-[320px] sm:h-[360px] md:h-[340px] overflow-hidden"
      >
        <Image
          src="/live_streaming_rzknw9.0b4319ecc2e35f0a5576.png"
          alt="web"
          width={800}
          height={600}
          className="object-cover object-center w-full h-full min-w-full min-h-full max-w-full max-h-full"
        />
        <div className="text-white absolute bottom-0 left-0 bg-[#295a9a] font-bold flex flex-col items-center justify-center p-3">
          <p className="text-xs sm:text-sm">LIVESTREAMING &</p>
          <p className="text-xs sm:text-sm">VIDEOCONFERENCING</p>
          <Image
            alt="logo"
            height={90}
            width={60}
            src="/network_2_hbxvaz.png"
          />
        </div>

        {item && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#295a9a] bg-opacity-95 text-white transition-all duration-300">
            <h1 className="text-[18px] font-semibold">LIVESTREAMING &</h1>
            <h1 className="text-[18px] font-semibold mb-2">
              VIDEOCONFERENCING
            </h1>
            <Image
              alt="logo"
              height={90}
              width={60}
              src="/network_2_hbxvaz.png"
            />
            <p className="mt-3 text-center w-[300px] text-[14px]">
              As we adjust to the new normal, everyone is moving their social
              life online — concerts, events, seminars, and talk shows.
            </p>
            <button className="mt-4 bg-white text-[#295a9a] px-[16px] py-[8px] rounded-md font-medium">
              See More
            </button>
          </div>
        )}
      </div>

      {/* ================= ITEM THREE ================= */}
      <div
        onMouseEnter={() => setItemOne(true)}
        onMouseLeave={() => setItemOne(false)}
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

        {itemOne && (
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
