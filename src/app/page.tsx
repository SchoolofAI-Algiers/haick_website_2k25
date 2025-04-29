import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import AboutHaick from "@/components/sections/AboutHaick/AboutHaick";
import Sponsor from "@/components/sections/Sponsor/Sponsor";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <AboutHaick />
      <Sponsor />
      <Footer />
    </main>
  );
}
