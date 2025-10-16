import { HeroSlides } from "@/components/HeroSlide/HeroSlides";
import { Header } from "@/components/HomePageComp/Header";
import { DoBest } from "@/components/Section/DoBest";
import { HomeSection } from "@/components/HomeSection/HomeSection";
import { SlideComp } from "@/components/Section/SlideComp";

import { WhatWeDo } from "@/components/Section/WhatWeDo";
import { WhatWeDoBest } from "@/components/Section/WhatWeDoBest";
import { Testimonial } from "@/components/HomeSection/Testimonial";
import { Cards } from "@/components/HomeSection/Cards";
import { ProfileImage } from "@/components/HomeSection/ProfileImage";
import { Product } from "@/components/HomeSection/Product";
import { Footer } from "@/components/HomeSection/Footer";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />
      <HeroSlides />

      <div className=" pt-12 w-[95%] sm:w-[90%] lg:w-[1024px] xl:w-[1270px] mx-auto">
        <HomeSection />
        <WhatWeDoBest />
        <WhatWeDo />
        <DoBest />
        <SlideComp />
      </div>

      <div className="bg-[#11253d] mt-14">
        <Testimonial />
      </div>

      <div className="mt-14">
        <Cards />
      </div>

      <div className="bg-[#cccccc] mt-14 px-4">
        <ProfileImage />
      </div>

      <Product />

      <Footer />
    </div>
  );
}
