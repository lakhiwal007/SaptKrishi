import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from "next/link";

const Footer: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-emerald-500 text-white">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/../public/src/SaptKrishiLogo.png"
              width={200}
              height={50}
              alt="logo"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start  text-center p-4">
          <h2 className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4">
            Address
          </h2>
          <p>SaptKrishi Scientific Pvt. Ltd. 108D,</p>
          <p>SIIC Extension, IIT Kanpur, Kanpur,</p>
          <p>UP, 208016</p>
        </div>
        <div className="w-full h-full flex flex-col justify-start text-center p-4">
          <h2 className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4">
            Quick Links
          </h2>
          <ul>
            <li>
              <a href="team/">Team</a>
            </li>
            <li>
              {" "}
              <a href="contact/">Contact Us</a>{" "}
            </li>
            <li>Developer</li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col justify-start text-center p-4">
          <h2 className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4">
            Contact
          </h2>
          <ul className="flex flex-col items-center justify-center">
            <li className="flex items-center space-x-4">
              {" "}
              <span>
                <MdMail />
              </span>{" "}
              <a href="mailto:saptkrishi@gmail.com">saptkrishi@gmail.com</a>{" "}
            </li>
            <li className="flex items-center space-x-4">
              {" "}
              <span>
                <FaPhoneAlt />
              </span>{" "}
              <a href="tel:+91-8826217394">+91-8826217394</a>{" "}
            </li>
            <li className="flex items-center space-x-4">
              {" "}
              <span>
                <FaPhoneAlt />
              </span>{" "}
              <a href="tel:+91-8340742701">+91-8340742701</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 p-2">
        <div className="w-full flex items-center justify-center font-semibold text-center pt-4 md:pt-0">
          <p>Get connected with us on social networks:</p>
        </div>
        <div className="w-full flex items-center justify-center pt-4 md:pt-0">
          <ul className="flex items-center text-emerald-600 space-x-4">
            <Link href="https://www.facebook.com/saptkrishi">
              <li className="hover:cursor-pointer">
                <FaFacebookF className="text-2xl" />
              </li>
            </Link>
            <Link href="https://twitter.com/saptkrishi?lang=en">
              <li className="hover:cursor-pointer">
                <FaTwitter className="text-2xl" />
              </li>
            </Link>
            <Link href="https://www.google.com/search?q=saptkrishi&oq=saptkrishi&aqs=chrome..69i57j46i39i175i199i275j35i39j69i60l4.3752j0j7&sourceid=chrome&ie=UTF-8">
              <li className="hover:cursor-pointer">
                <FaGoogle className="text-2xl" />
              </li>
            </Link>
            <Link href="https://www.linkedin.com/company/saptkrishi/?originalSubdomain=in">
              <li className="hover:cursor-pointer">
                <FaLinkedin className="text-2xl" />
              </li>
            </Link>
            <Link href="https://www.instagram.com/saptkrishi/?hl=en">
              <li className="hover:cursor-pointer">
                <FaInstagram className="text-2xl" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center bg-gray-500 p-2">
          <p className="text-[12px] text-center text-slate-200">
            Copyright © 2022 All rights reserved | SaptKrishi Scientific Pvt.
            Ltd. | Terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
