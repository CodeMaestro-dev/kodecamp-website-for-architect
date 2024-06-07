import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";

export default function Navbar() {
  return (
    <div className="flex py-[29.14px] px-[135px]">
      <div className="">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="flex gap-[60px] items-center ml-[330px]">
        <li className=" border-t border-b border-t-black  border-b-black w-[80px] text-center">
          <Link to="/" className="uppercase">Main</Link>
        </li>
        <li>
          <Link to="/gallery" className="uppercase">Gallery</Link>
        </li>
        <li>
          <Link to="/projects" className="uppercase">Projects</Link>
        </li>
        <li>
          <Link to="/certification" className="uppercase">Certifications</Link>
        </li>
        <li>
          <Link to="/contacts" className="uppercase">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}
