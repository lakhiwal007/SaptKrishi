import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";

const Info: NextComponentType = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 h-full flex flex-col items-start justify-start">
          <ul className="list-disc">
            <li>
              Preservator/Sabjikothi is a wheel mountable storage for
              transportation of fresh fruits and vegetables.
            </li>
            <li>
              It is a microclimate portable storage that extend the shelf-life
              of fruits and vegetables anywhere between 5 to 30 days.
            </li>
            <li>
              It requires 20 watts of power and 1 litre of water and has battery
              backup of a day and an option of solar charging.
            </li>
            <li>
              The entire setup can be unloaded from wheels, and can doubly acts
              as on-field & on-market storage.
            </li>
            <li>
              The entire setup can be assembled on any suitable means of
              transportation (E-rickshaw, mini-trucks, thelas etc.)
            </li>
            <li>
              It can transport contamination-free fruits and vegetables from
              field to market without any water loss and decay.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[424px] h-[338px] shadow-xl">
          <Image src="/src/preservator.jpg" width={424} height={338}></Image>
        </div>
      </div>
    </div>
  );
};

export default Info;
