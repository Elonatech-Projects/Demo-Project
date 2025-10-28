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
      className="relative w-full flex justify-between items-center h-[52vh] sm:min-h-[200px] text-white text-xs lg:h-[50vh] pt-10 xl:h-[630px]"
    >
      {/* Left group: chevron + text */}
      <div className="flex items-center  w-full">
        <ChevronLeft className="w-5 h-5 lg:w-10 lg:h-10 2xl:w-24 2xl:h-24" />

        <div className="text-white w-full">
          {images[count].words.map((el, i) => (
            <div key={i}>
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold">
                {el.textOne}
              </h1>

              <p className="text-xs sm:text-base md:text-lg font-semibold mt-3">
                {el.textTwo}
              </p>

              <p className="text-xs sm:text-base md:text-lg font-semibold mt-3">
                {el.textThree}
              </p>

              <button className="bg-[#dc3545] px-3 rounded-[10px] mt-2.5 h-10 items-center">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Right chevron */}
      <ChevronRight className="w-5 h-5 lg:w-10 lg:h-10 2xl:w-24 2xl:h-24" />
      <div className="absolute bottom-5 flex justify-center gap-2 mt-6 mx-auto w-full">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === count ? "bg-[#dc3545] scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
