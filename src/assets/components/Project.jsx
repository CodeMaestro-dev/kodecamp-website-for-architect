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
        <div className="flex gap-[30px] flex-col lg:flex-row">
          <img src={project_1} alt="a picture of a building" className="w-full"/>
          <img src={project_2} alt="a picture of a building" className="w-full"/>  
        </div>
        <div className="flex gap-[30px] flex-col lg:flex-row ">
          <img src={project_3} alt="a picture of a building" className="w-full lg:w-[30%]"/>
          <img src={project_4} alt="a picture of a building" className="w-full lg:w-[55%]"/>
          <img src={project_5} alt="a picture of a building" className="w-full lg:w-[40%]"/>
        </div>
        <div className="self-end">
          <Arrow text="All Projects" color="black"/>
        </div>
      </div>
    </div>
  );
}
