import project_explaination_1 from "/assets/images/project-explaination-1.png"
import project_explaination_2 from "/assets/images/project-explaination-2.png"
import project_explaination_3 from "/assets/images/project-explaination-3.png"

export default function ProjectDetails() {
  return (
    <div className="py-[29.14px] px-[20px] lg:px-[135px] ">
      <div className="border-b-[1px] border-[#F2F2F2] pb-[30px]">
        <p className="text-[#BDBDBD] text-[64px] font-light">Sample</p>
        <p className="text-[#333333] text-[50px] font-semibold">Project 1</p>
      </div>
      <div className="flex flex-col gap-[30px] mt-[60px]">
        <div>
          <img src={project_explaination_1} alt="an office with dektops" className="w-full h-full"/>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[30%]">
            <img src={project_explaination_2} alt="a meeting room" className="w-full h-full"/>
          </div>
          <div className="w-full lg:w-[70%] p-0 lg:p-[30px] mt-5 lg:mt-0">
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with.
            </p>
          </div>
        </div>
        <div>
          <img src={project_explaination_3} alt="drawing plans for a new building" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
}
