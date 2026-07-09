import "./globals.css";
import Topheader from "@/components/Topheader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Twin Flame | Premium Luxury Candles & Home Fragrances",
  description: "Exquisite handmade luxury candles, wax melts, and reed diffusers crafted with premium natural soy wax and curated fine fragrances to elevate your space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-luxury-cream text-luxury-black font-sans">
        <Topheader />
        <Header />
        <main className="flex-grow flex flex-col relative w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

