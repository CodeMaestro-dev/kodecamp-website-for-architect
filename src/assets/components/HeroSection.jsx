import home from "/assets/images/home.png";
import left_arrow from "/assets/images/left-arrow.svg";
import right_arrow from "/assets/images/right-arrow.svg";
import slide_numbers from "/assets/images/slide-numbers.svg";

import Arrow from "./Arrow";

export default function HeroSection() {
  return (
    <div className="flex gap-[122.3px] flex-col md:flex-row w-full">
      <div className="flex flex-col justify-center items-start px-3 gap-[90px]">
        <div>
          <p className="uppercase text-[#BDBDBD] text-[64px] font-light">
            Project
          </p>
          <p className="text-[#333333] text-[50px] font-semibold">Lorum</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[22.98px] ">
            <img src={left_arrow} alt="left arrow" className="cursor-pointer" />
            <img
              src={right_arrow}
              alt="right-arrow"
              className="cursor-pointer"
            />
          </div>
          <div className="mt-[90px]">
            <img src={slide_numbers} alt="slide numbers" />
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <img src={home} alt="" className="w-full h-full" />
        <div className="absolute bottom-0">
          <Arrow text="View Project" link="/projects" />
        </div>
      </div>
    </div>
  );
}
