import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Highlights from "../components/Highlights";

export default function page() {
  return (
    <main className="bg-gray-200">
      <Hero />
      <Highlights />
      <Pricing />
      <Footer />
    </main>
  );
}
