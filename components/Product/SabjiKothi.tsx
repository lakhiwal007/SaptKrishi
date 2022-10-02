import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { FaRupeeSign, FaPlug, FaInbox } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { HiChip } from "react-icons/hi";
import BookNow from "../BookNow";

const SabjiKothi: NextComponentType = () => {
  return (
    <div className="w-[95%] h-auto grid grid-cols-1 gap-4 rounded border border-gray-200 m-auto mt-4 pb-4 md:w-[70%]">
      <div className="w-full flex items-center justify-center relative m-auto p-2 relative ">
        <Image
          src="/src/products/sabjikothi-farmer-web-min.png"
          width={450}
          height={450}
          className="rounded object-cover"
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-4 uppercase">SabjiKothi</p>
        <div className="w-full flex items-center justify-center">
          <ul className="w-full gap-8 grid grid-cols-2 lg:grid-cols-3 p-2">
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaRupeeSign />
              </p>
              <p className="text-green-700 mb-2 text-center">Flexible</p>
              <p className="text-center">Affordable</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaPlug />
              </p>
              <p className="text-green-700 mb-2 text-center">20-Watts</p>
              <p className="text-center">Saves Energy</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <GoGear />
              </p>
              <p className="text-green-700 mb-2 text-center">1 litre/day</p>
              <p className="text-center">Zero Maintainance</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaInbox />
              </p>
              <p className="text-green-700 mb-2 text-center">Upto 200 KG</p>
              <p className="text-center">Storage Capacity</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <HiChip />
              </p>
              <p className="text-green-700 mb-2 text-center">Intelligent</p>
              <p className="text-center">Self-Adaptable</p>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <BookNow name={"SabjiKothi"} />
        </div>
      </div>
    </div>
  );
};

export default SabjiKothi;
