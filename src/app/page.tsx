import { HeroSlides } from "@/components/HeroSlide/HeroSlides";
import { Header } from "@/components/HomePageComp/Header";
import { HomeSection } from "@/components/HomeSection/HomeSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlides />
      <HomeSection />
    </div>
  );
}
