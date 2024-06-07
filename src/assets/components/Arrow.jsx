import { Link } from "react-router-dom";
import right_arrow_2 from "/assets/images/arrow-2-right-long.svg";
import right_arrow_2_black from "/assets/images/arrow-2-right-long-black.svg";

export default function Arrow({ text, link, color }) {
  let styles =
    "w-fit flex gap-[18px] bg-white text-[#333333] py-[20px] pl-[20.34px] pe-[49.47px]";

  let type = false;

  if (color == "black") {
    styles =
      "w-fit flex gap-[18px] bg-[#333333] text-white py-[20px] pl-[20.34px] pe-[49.47px]";
    type = true;
  }

  return (
    <Link to={link} className={styles}>
      <span className="uppercase text-[12px]">{text}</span>
      {type ? (<img src={right_arrow_2_black} alt="right arrow" />) : (<img src={right_arrow_2} alt="right arrow" />)}
    </Link>
  );
}
