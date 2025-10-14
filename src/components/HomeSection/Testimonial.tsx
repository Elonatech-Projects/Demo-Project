"use client";
import { container } from "@/data/element/slide";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideCount = setInterval(() => {
      setIndex((prev) => (prev < container.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(slideCount);
  }, []);

  const active = container[index];

  return (
    <div className="w-[97%] sm:w-[90%] lg:w-[95%] xl:w-[1270px] mx-auto py-6">
      <h1 className="text-center text-white font-bold sm:text-2xl">
        Testimonial
      </h1>
      <div className="bg-[#dc3545] w-[60px] h-[2px] mx-auto mb-6"></div>

      <div className=" flex flex-col items-center justify-center text-center">
        {/* ✅ Fixed Image */}
        <div className="relative w-[75px] h-[70px] sm:w-[103px] sm:h-[100px] rounded-full">
          <Image
            src={active.image}
            alt={active.user}
            fill
            sizes="200px"
            className="object-cover rounded-full"
            priority
          />
        </div>

        <h2 className="text-white text-lg font-semibold">{active.user}</h2>
        <p className="text-gray-300 text-sm">{active.tagName}</p>

        <div className="flex gap-1 justify-center mt-1">
          {active.icon.map((star, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              {star}
            </span>
          ))}
        </div>

        <div className="h-auto mt-3 w-full text-gray-200 text-xs sm:leading-relaxed lg:text-sm">
          {active.txt.map((t, i) => (
            <div key={i}>
              <p>{t.textOne}</p>
              <p>{t.textTwo}</p>
              <p>{t.textThree}</p>
              <p>{t.textFour}</p>
              <p>{t.textFive}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {container.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#dc3545] scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
