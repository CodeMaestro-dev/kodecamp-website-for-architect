import project_page_1 from "/assets/images/project-page-1.png";
import project_page_2 from "/assets/images/project-page-2.png";
import project_page_3 from "/assets/images/project-page-3.png";
import left_arrow from "/assets/images/left-arrow.svg";
import right_arrow from "/assets/images/right-arrow.svg";
import slide_numbers from "/assets/images/slide-numbers.svg";


import ProjectDescription from "../components/ProjectDescription";

export default function Projects() {
  return (
    <div className="py-[29.14px] px-[20px] lg:px-[135px]">
      <div className="mb-[60px] border-b-[1px] border-[#F2F2F2] pb-[30px]">
        <p className="text-[#BDBDBD] text-[64px] font-light">Our</p>
        <p className="text-[#333333] text-[50px] font-semibold">Projects</p>
      </div>
      <div className="flex flex-col gap-[60px]">
        <ProjectDescription img={project_page_1} heading="Sample Project" />
        <ProjectDescription img={project_page_2} heading="Sample Project 2" />
        <ProjectDescription img={project_page_3} heading="Sample Project 3" />
      </div>
      <div className="mt-[60px] flex gap-[29.1px]">
        <div className="mt-[11px]">
          <img src={slide_numbers} alt="slide numbers" />
        </div>
        <div className="flex gap-[22.98px] mb-[11px]">
          <img src={left_arrow} alt="left arrow" className="cursor-pointer" />
          <img src={right_arrow} alt="right-arrow" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
