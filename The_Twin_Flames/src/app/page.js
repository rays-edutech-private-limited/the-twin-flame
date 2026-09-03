import Banner from "@/components/Banner";
import CandleMarquee from "@/components/CandleMarquee";
import Welcome from "@/components/Welcome";
import ShopByCategory from "@/components/ShopByCategory";
// import Fragrance from "@/components/Fragrance";
// import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
// import Newsletter from "@/components/Newsletter";
import Produtscollection from "@/components/Produtscollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NaturalIngredients from "@/components/NaturalIngredients";
import Gallery from "@/components/Gallery";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import Blog from "@/components/Blog";
import FloatingRewards from "@/components/FloatingRewards";

export default function Home() {
  return (
    <>
      <Banner />
      <CandleMarquee />
      <DealOfTheWeek />
      <Welcome />
      <WhyChooseUs />
      <ShopByCategory />
      {/* <Fragrance /> */}
      {/* <HeroSection /> */}
      <FeaturedProducts />
      <NaturalIngredients />
      {/* <Produtscollection /> */}
      <Collections />
           <Blog /> 
       <Testimonials />
      {/* <Gallery /> */}
      {/* <Newsletter /> */}
      <FloatingRewards />
    </>
  );
}

