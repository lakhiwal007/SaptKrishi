import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Menu from "../components/Menu";

const NavBar: NextComponentType = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-full flex flex-cols items-center justify-center sticky top-0 z-10">
      <div className="w-full flex items-center justify-between bg-white pt-2 pb-2 bg-white  border-b-[1px] border-gray-100">
        <div className="w-full flex items-center justify-center">
          <div className="pl-8 block w-full h-auto">
            <Link href="/">
              <Image
                src="/src/saptkrishi logo.png"
                width={112.25}
                height={43.91}
                alt="logo"
                className="cursor-pointer object-contain"
              ></Image>
            </Link>
          </div>
        </div>

        <div className="">
          <ul className="hidden w-full flex  items-center justify-center space-x-4 p-4 lg:flex">
            <Link href="/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                Home
              </li>
            </Link>
            <Link href="products/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                Products
              </li>
            </Link>
            <Link href="about/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                About
              </li>
            </Link>
            <Link href="gallery/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                Gallery
              </li>
            </Link>
            <Link href="news/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                News
              </li>
            </Link>
            <Link href="team/">
              <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
                Team
              </li>
            </Link>
            <li className="hidden nav-item dropdown pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white lg:block">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brochure
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/S_eng.jpg?alt=media&token=f4559adc-799e-4352-8b7a-a45eed634aa0"
                    rel="noreferrer"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20HINDI.jpg?alt=media&token=501c521f-6df6-4375-bf2a-a1e8aed7d8a0"
                    rel="noreferrer"
                  >
                    Hindi
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20-%20ODIYA.jpg?alt=media&token=0fcd75a7-ac89-469d-87cc-3695e4ea03a1"
                    rel="noreferrer"
                  >
                    Odiya
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20-Malayalam.jpg?alt=media&token=3383c388-b41b-4b74-b715-3b3656b32554"
                    rel="noreferrer"
                  >
                    Malayalam
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/Sabjikothi%20-%20Tamil.jpg?alt=media&token=f7dfd715-04e6-4102-a720-dd272f7fc35a"
                    rel="noreferrer"
                  >
                    Tamil
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20Marathi.jpg?alt=media&token=84c350ff-e514-4d85-8ba5-db1c0e089e3e"
                    rel="noreferrer"
                  >
                    Marathi
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center ml-2 ">
          <Link href="book/">
            <button className="btn btn-outline-success flex hover:bg-gradient-to-r hover:from-green-500  hover:to-cyan-400 hover:border-0 items-center rounded-full hover:bg-gradient-to-r hover:from-green-500  hover:to-cyan-400 text-sm md:text-md md:pl-0">
              {" "}
              <span className="p-2">
                <FaShoppingCart />
              </span>{" "}
              Book Now
            </button>
          </Link>
        </div>

        <div className="p-2 lg:hidden">
          <Hamburger rounded onToggle={handleToggle} />
        </div>
      </div>
      {/* {isOpen ? <Menu isShow={"flex"} /> : <Menu isShow={"hidden"} />} */}
      {isOpen ? <Menu /> : ""}
    </div>
  );
};

export default NavBar;
