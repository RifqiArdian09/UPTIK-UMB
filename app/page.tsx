import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Tentangkami from "@/components/tentangkami";
import Layanan from "@/components/layanan";
import { Navbar } from "@/components/navbar";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tentangkami />
        <Layanan />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
