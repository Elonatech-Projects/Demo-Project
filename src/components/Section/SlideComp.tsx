"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SlideComp() {
  const images = [
    "/cathenet_lgod6k.png",
    "/diva_cakes_betw0b.png",
    "/domino_i6flnw.png",
    "/feii_a8rzqg.png",
    "/home_mwhzd9.png",
    "/ireti_whpffr.png",
    "/Kappachem_Labs_Web_logo_op3szo.png",
    "/neyant_hesh5e.png",
    "/okhma_hrxdi7.png",
    "/olajide_e245yh.png",
    "/pentecostal_cutbi5.png",
    "/pineheight_sljytj.png",
    "/SHEKINAH_SACRED_PLACE_MINISTRIES_Logo_fu5map.png",
    "/universal_vcrdgw.png",
    "/women_right_uet6bw.png",
  ];

  const imageWidth = 200;
  const imageHeight = 150;
  const totalWidth = images.length * imageWidth;

  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newTranslate = prev - 1;
        if (Math.abs(newTranslate) >= totalWidth) {
          setIsTransitioning(false);
          setTimeout(() => {
            setTranslateX(0);
            setIsTransitioning(true);
          }, 20);
          return newTranslate;
        }
        return newTranslate;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [totalWidth]);

  const handleNext = () => {
    setTranslateX((prev) => {
      const newTranslate = prev - imageWidth;
      if (Math.abs(newTranslate) >= totalWidth) {
        setIsTransitioning(false);
        setTimeout(() => {
          setTranslateX(-imageWidth);
          setIsTransitioning(true);
        }, 300);
        return newTranslate;
      }
      return newTranslate;
    });
  };

  const handlePrevious = () => {
    setTranslateX((prev) => {
      const newTranslate = prev + imageWidth;
      if (newTranslate > 0) {
        setIsTransitioning(false);
        setTimeout(() => {
          setTranslateX(-(totalWidth - imageWidth));
          setIsTransitioning(true);
        }, 300);
        return newTranslate;
      }
      return newTranslate;
    });
  };

  return (
    <div className="relative w-[80%] m-auto overflow-hidden rounded-lg mt-24">
      <h1 className="text-center text-black text-2xl font-bold lg:text-3xl">
        Some of our clients
      </h1>
      <div
        ref={containerRef}
        className="flex mt-7"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isTransitioning ? "transform 0.3s ease-out" : "none",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center p-4"
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          >
            <Image
              src={image}
              alt={`Logo ${(index % images.length) + 1}`}
              width={imageWidth - 32}
              height={imageHeight - 32}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2  l p-2"
      >
        <ChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 l p-2 "
      >
        <ChevronRight />
      </button>
    </div>
  );
}
