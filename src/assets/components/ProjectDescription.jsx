import Arrow from "./Arrow";

export default function ProjectDescription({ img, heading }) {
  return (
    <div className="w-fit bg-[#FBFBFB] flex flex-col md:flex-row">
      <div className="w-[60%]">
        <img src={img} alt="the image of a building" className="w-full" />
      </div>
      <div className="flex flex-col w-[40%] p-[30px]">
        <h2 className="text-[#BDBDBD] text-[40px]">{heading}</h2>
        <p className="mt-[73px] mb-[64px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <Arrow text="View More" />
      </div>
    </div>
  );
}
