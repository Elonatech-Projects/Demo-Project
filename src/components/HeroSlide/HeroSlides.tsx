"use client";
import { images } from "@/data/element/image-slide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSlides() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCount((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[count].gallery})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[72vh] flex items-center justify-center px-4"
    >
      {/* Left group: chevron + text */}
      <div className="flex items-center gap-0 md:gap-6 absolute left-2 md:left-10 top-1/2 -translate-y-1/2">
        <ChevronLeft className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer text-white drop-shadow-lg" />

        <div className="text-white  p-3 md:p-5 rounded-lg max-w-[83vw] md:max-w-[75vw]">
          {images[count].words.map((el, i) => (
            <div key={i}>
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold leading-snug">
                {el.textOne}
              </h1>

              <p className="text-xs sm:text-base md:text-lg font-semibold mt-3">
                {el.textTwo}
              </p>

              <p className="text-xs sm:text-base md:text-lg font-semibold mt-3">
                {el.textThree}
              </p>

              <button className="bg-[#dc3545] p-3 rounded-[10px] mt-2.5">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right chevron */}
      <ChevronRight className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer text-white drop-shadow-lg" />
    </div>
  );
}
