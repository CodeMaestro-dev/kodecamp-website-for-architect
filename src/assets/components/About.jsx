import Arrow from "./Arrow";

import about_1 from "/assets/images/about-1.png";
import about_2 from "/assets/images/about-2.png";
import about_3 from "/assets/images/about-3.png";

export default function About() {
  return (
    <div className="bg-[#FBFBFB] flex flex-col lg:flex-row mt-[120px] pl-2 pe-2 lg:pl-[100px] lg:pe-[70px]">
      <div className="flex gap-[30px] w-full lg:w-[55%]">
        <div className="flex flex-col gap-[30px]">
          <img src={about_1} alt="a picture of a building with glass walls" />
          <img src={about_2} alt="a picture of a building with glass walls" />
        </div>
        <div>
          <img src={about_3} alt="a picture of a building with glass walls" />
        </div>
      </div>
      <div className="w-full lg:w-[45%]">
        <h2 className="text-[#BDBDBD] text-[64px] font-[300px]">About</h2>
        <p className="my-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Arrow text="Read More" link="/projects" />
      </div>
    </div>
  );
}
