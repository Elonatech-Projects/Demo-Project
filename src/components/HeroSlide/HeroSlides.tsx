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
      className="w-full flex justify-between items-center h-[52vh] lg:h-[80vh] pt-10"
    >
      {/* Left group: chevron + text */}
      <div className="flex items-center  w-full">
        <ChevronLeft className="w-24 h-24" />

        <div className="text-white w-full">
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
      <ChevronRight className="w-24 h-24" />
    </div>
  );
}
