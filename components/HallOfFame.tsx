import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

const HallOfFame: NextComponentType = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Splide
        className="w-full flex items-center justify-center relative"
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          rewindSpeed: 500,
          type: "slide",
          perPage: 1,
          drag: "free",
          snap: true,
          focus: "center",
          gap: "1rem",
          perMove: 1,
          autoplay: true,
          pagination: false,
          arrows: false,
          pauseOnHover: false,
          breakpoints: {
            912: {
              gap: ".7rem",
            },
            640: {
              gap: ".7rem",
            },
          },
        }}
      >
        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/modiji/modiji2.png"
            width={2000}
            height={940}
            className="w-full h-full object-fit"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute bootom-0 flex flex-col items-center justify-end">
            <p className=" text-lg sm:text-2xl text-white font-bold p-2 md:text-4xl lg:text-6xl text-center">
              SabjiKothi Demonstration in Front of Hon&apos;ble Prime Minister
              Narendra Modi
            </p>
            <Link href={"/gallery/#modiji"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/sharkTank/st7.png"
            width={2000}
            height={940}
            className="w-full h-full object-fit"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end">
            <p className=" text-lg sm:text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              SabjiKothi in Shark Tank
            </p>
            <Link href={"/gallery/#shark-tank"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/img1.jpeg"
            width={2000}
            height={940}
            className="w-full h-full object-fit"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute bootom-0 flex flex-col items-center justify-end">
            <p className=" text-lg sm:text-2xl text-white font-bold p-2 mb-4 md:text-4xl lg:text-6xl text-center">
              Conferred By Youth Affairs & Sports Minister Anurag Thakur
            </p>
            <Link href={"/gallery/#photos"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/img2.jpeg"
            width={2000}
            height={940}
            className="w-full h-full object-fit"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute bootom-0 flex flex-col items-center justify-end">
            <p className=" text-lg sm:text-2xl text-white font-bold p-2 md:text-4xl lg:text-6xl text-center">
              Demonstration of SabjiKothi to the UN Resident Coordinator Ms.
              Deirdre Boyd
            </p>
            <Link href={"/gallery/#photos"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/HappyFace.JPG"
            width={2000}
            height={940}
            className="w-full h-full object-fit"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute bootom-0 flex flex-col items-center justify-end">
            <p className=" text-lg sm:text-2xl text-white font-bold p-2 md:text-4xl lg:text-6xl text-center mb-8">
              Our Happy Customer
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HallOfFame;
