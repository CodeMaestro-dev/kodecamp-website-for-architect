import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Mission from "../components/Mission";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="py-[29.14px] px-[20px]  lg:px-[135px] w-full">
      <HeroSection />
      <About />
      <Mission />
      <Project />
      <Contact />
    </div>
  );
}
