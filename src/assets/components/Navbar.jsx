import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const SHOW_MODAL = () => {
    setShow(!show)
  }

  return (
    <div className="flex flex-col lg:flex-row py-[29.14px] px-[20px] lg:px-[135px] items-center">
      <div className="flex justify-between w-full md:w-fit">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className="block md:hidden border border-[#333333] p-3 rounded-full cursor-pointer" onClick={SHOW_MODAL}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {(
        show ? (<div>
          <ul className={`flex flex-col gap-[20px] mt-[50px] items-center`}>
            <li className=" border-t border-b border-t-black  border-b-black w-[80px] text-center">
              <Link to="/" className="uppercase">
                Main
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="uppercase">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/projects" className="uppercase">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/certification" className="uppercase">
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="uppercase">
                Contacts
              </Link>
            </li>
          </ul>
        </div>) : (<div></div>)
      )}
      
      <ul className="hidden md:flex gap-[20px] md:gap-[40px] lg:gap-[60px] items-center ml-0 mt-[20px] md:mt-[20px] lg:ml-[330px]">
        <li className=" border-t border-b border-t-black  border-b-black w-[80px] text-center">
          <Link to="/" className="uppercase">
            Main
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="uppercase">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/projects" className="uppercase">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/certification" className="uppercase">
            Certifications
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="uppercase">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
