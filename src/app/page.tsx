import { HeroSlides } from "@/components/HeroSlide/HeroSlides";
import { Header } from "@/components/HomePageComp/Header";
import { DoBest } from "@/components/Section/DoBest";
import { HomeSection } from "@/components/HomeSection/HomeSection";
import { SlideComp } from "@/components/Section/SlideComp";

import { WhatWeDo } from "@/components/Section/WhatWeDo";
import { WhatWeDoBest } from "@/components/Section/WhatWeDoBest";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlides />
      <HomeSection />

      <div className="bg-white pt-16">
        <WhatWeDoBest />
        <WhatWeDo />
        <DoBest />
        <SlideComp />
      </div>
    </div>
  );
}
