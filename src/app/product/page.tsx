"use client";

import { DesktopProductNav } from "@/components/HeroSlide/DesktopProductNav";
import { MobileProductNav } from "@/components/HeroSlide/MobileProductNav";
import { Footer } from "@/components/HomeSection/Footer";

export default function ProductPage() {
  return (
    <div>
      <MobileProductNav />
      <DesktopProductNav />

      {/* ✅ Responsive Background Image */}
      <div
        className="
          bg-[url('/shop_oby1yn.jpg')]
          bg-cover md:bg-cover
          bg-center md:bg-center
          bg-no-repeat
          w-full
          h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]
        "
      />

      <Footer />
    </div>
  );
}
