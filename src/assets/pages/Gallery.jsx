import photo_gallery_1 from "/assets/images/photo-gallery-1.png";
import photo_gallery_2 from "/assets/images/photo-gallery-2.png";
import photo_gallery_3 from "/assets/images/photo-gallery-3.png";
import photo_gallery_4 from "/assets/images/photo-gallery-4.png";
import photo_gallery_5 from "/assets/images/photo-gallery-5.png";
import photo_gallery_6 from "/assets/images/photo-gallery-6.png";
import photo_gallery_7 from "/assets/images/photo-gallery-7.png";
import photo_gallery_8 from "/assets/images/photo-gallery-8.png";
import photo_gallery_9 from "/assets/images/photo-gallery-9.png";
import photo_gallery_10 from "/assets/images/photo-gallery-10.png";
import left_arrow from "/assets/images/left-arrow.svg";
import right_arrow from "/assets/images/right-arrow.svg";
import slide_numbers from "/assets/images/slide-numbers.svg";

export default function Projects() {
  return (
    <div className="py-[29.14px] px-[20px]  lg:px-[135px] ">
      <div>
        <p className="text-[#BDBDBD] text-[64px] font-light">
          Project
        </p>
        <p className="text-[#333333] text-[50px] font-semibold">Lorum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[30px] mt-[61px]">
        <img
          src={photo_gallery_1}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_2}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_3}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_4}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_5}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_6}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_7}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_8}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_9}
          alt="the image of a building"
          className="w-full h-full"
        />
        <img
          src={photo_gallery_10}
          alt="the image of a building"
          className="w-full h-full"
        />
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
