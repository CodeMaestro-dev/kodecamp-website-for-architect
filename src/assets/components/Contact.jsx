import contact_us from "/assets/images/contact-us.png";

import Arrow from "./Arrow";

export default function Contact() {
  return (
    <div className="mt-[120px]">
      <h2 className="text-[#BDBDBD] text-[64px] font-[300] mb-[22px]">Contact Us</h2>
      <div className="flex gap-[30px]">
        <form className="flex-1 flex flex-col gap-[10px]">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F3F3F3] pl-[21px] py-[15px]"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="bg-[#F3F3F3] pl-[21px] py-[15px]"
          />
          <input
            type="email"
            placeholder="E-mail*"
            className="bg-[#F3F3F3] pl-[21px] py-[15px]"
          />
          <input
            type="email"
            placeholder="Interested In*"
            className="bg-[#F3F3F3] pl-[21px] py-[15px]"
          />
          <textarea
            type="text"
            placeholder="Message*"
            className="bg-[#F3F3F3] pl-[21px] pt-[15px] h-[147px]"
          />
        </form>
        <div className="flex-1 hidden lg:block">
          <img src={contact_us} alt="" className="w-100" />
        </div>
      </div>
      <div className="mt-[77px]">
        <Arrow text="Send Email" color="black" />
      </div>
    </div>
  );
}
