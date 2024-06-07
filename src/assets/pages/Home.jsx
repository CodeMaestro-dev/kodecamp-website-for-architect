import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Mission from "../components/Mission";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="py-[29.14px] px-[135px]">
      <LandingPage />
      <About />
      <Mission />
      <Project />
      <Contact />
    </div>
  );
}
