import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Produtscollection from "@/components/Produtscollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NaturalIngredients from "@/components/NaturalIngredients";
import Gallery from "@/components/Gallery";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Collections />
      <Produtscollection />
      <NaturalIngredients />
      <DealOfTheWeek />
      <WhyChooseUs />
      <Gallery />
      <Blog />
      <Testimonials />
      <Newsletter />
    </>
  );
}

