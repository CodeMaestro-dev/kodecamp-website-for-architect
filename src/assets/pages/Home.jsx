import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Mission from "../components/Mission";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="py-[29.14px] px-[135px]">
      <HeroSection />
      <About />
      <Mission />
      <Project />
      <Contact />
    </div>
  );
}
