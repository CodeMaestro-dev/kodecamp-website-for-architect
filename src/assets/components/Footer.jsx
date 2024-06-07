import { Link } from "react-router-dom";

import logo_white from "/assets/images/logo-white.svg";
import map from "/assets/images/map.svg";
import phone from "/assets/images/phone.svg";
import mail from "/assets/images/mail.svg";
import facebook from "/assets/images/facebook.svg";
import twitter from "/assets/images/twitter.svg";
import Linked_In from "/assets/images/Linked_In.svg";
import pinterest from "/assets/images/pinterest.svg";

export default function Footer() {
  return (
    <div className="bg-[#333333] mt-[120px]">
      <div className="border-b-[1px] border-b-white flex justify-between px-[116px] py-[60px]">
        <Link to="/">
          <img src={logo_white} alt="home-page" />
        </Link>
        <div>
          <ul className="text-white">
            <li className="font-[700] mb-[25px]">Information</li>
            <li className="font-[500] text-[14px]">
              <Link to="/">Main</Link>
            </li>
            <li className="font-[500] text-[14px] my-[16px]">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="font-[500] text-[14px]">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="font-[500] text-[14px] my-[16px]">
              <Link to="/certification">Certifications</Link>
            </li>
            <li className="font-[500] text-[14px]">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="font-[700] mb-[25px]">Contacts</li>
            <li className="font-[500] text-[14px]">
              <div>
                <img src={map} alt="our location" className="mb-[10px]"/>
                <p>1234 Sample Street</p>
                <p> Austin Texas 78704</p>
              </div>
            </li>
            <li className="font-[500] text-[14px] my-[16px]">
              <div>
                <img src={phone} alt="our location" className="mb-[10px]"/>
                <span>512.333.2222</span>
              </div>
            </li>
            <li className="font-[500] text-[14px]">
              <div>
                <img src={mail} alt="our location" className="mb-[10px]"/>
                <span>sampleemail@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="font-[700] mb-[25px]">Social Media</li>
            <li>
              <div className="flex gap-[40px]">
                <img src={facebook} alt="Our Facebook Handle" />
                <img src={twitter} alt="Our Twitter Handle" />
                <img src={Linked_In} alt="Our Linked In Handle" />
                <img src={pinterest} alt="Our Pinterest Handle" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[#C8C8C880] py-[24px]">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}
