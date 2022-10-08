import React, { useState } from "react";
import { NextComponentType } from "next";
import { HiOutlinePlus } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaShare,
} from "react-icons/fa";
const Media: NextComponentType = () => {
  const [show, setShow] = useState(false);
  const isShow = () => {
    setShow(!show);
    // console.log(show);
  };
  return (
    <>
      {show ? (
        <div className="w-[50px] h-[250px] fixed bottom-2 right-2 flex flex-col rounded  z-50 cursor-pointer transition duration-200 ease-in-out">
          <div className="w-[50px] h-[50px] absolute bottom-[100%] right-0 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.facebook.com/saptkrishi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] absolute bottom-[75%] right-0 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://twitter.com/saptkrishi?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] absolute bottom-[50%] right-0 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.instagram.com/saptkrishi/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] absolute bottom-[25%] right-0 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.linkedin.com/company/saptkrishi/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl font-bold" />
            </a>
          </div>
          <div
            className="w-[50px] h-[50px] absolute bottom-0 right-0 flex items-center justify-center bg-rose-600 rounded-full"
            onClick={isShow}
          >
            <HiOutlinePlus className="transition transition ease-in-out rotate-45 " />
          </div>
        </div>
      ) : (
        <div className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-around rounded-full  z-50 cursor-pointer transition duration-200 ease-in-out">
          <div className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.facebook.com/saptkrishi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://twitter.com/saptkrishi?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.instagram.com/saptkrishi/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-xl font-bold" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-center bg-emerald-500 rounded-full">
            <a
              href="https://www.linkedin.com/company/saptkrishi/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl font-bold" />
            </a>
          </div>
          <div
            className="w-[50px] h-[50px] fixed bottom-2 right-2 flex items-center justify-center bg-rose-600 rounded-full"
            onClick={isShow}
          >
            <FaShare className="transition transition ease-in-out rotate-0 " />
          </div>
        </div>
      )}
    </>
  );
};

export default Media;
