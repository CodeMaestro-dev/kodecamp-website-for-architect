import project_1 from "/assets/images/project-1.png"
import project_2 from "/assets/images/project-2.png"
import project_3 from "/assets/images/project-3.png"
import project_4 from "/assets/images/project-4.png"
import project_5 from "/assets/images/project-5.png"

import Arrow from "./Arrow"

export default function Project() {
  return (
    <div className="mt-[120px]">
      <h2 className="text-[#BDBDBD] text-[64px] font-[300]">
        Our Projects
      </h2>
      <div className="flex flex-col gap-[30px] mt-[60px]">
        <div className="flex gap-[30px]">
          <img src={project_1} alt="" />
          <img src={project_2} alt="" />
        </div>
        <div className="flex gap-[30px]">
          <img src={project_3} alt="" />
          <img src={project_4} alt="" />
          <img src={project_5} alt="" />
        </div>
        <div>
          <Arrow text="All Projects" color="black"/>
        </div>
      </div>
    </div>
  );
}
