import { NextComponentType } from "next";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

const HallOfFame: NextComponentType = () => {
  return (
    <div className="w-full max-h-[32vh] flex items-center justify-center relative lg:max-h-[100vh] mb-16">
      <Splide
        className="w-full min-h-screen flex items-center justify-center relative"
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          rewindSpeed: 2000,
          type: "slide",
          perPage: 1,
          drag: "free",
          snap: true,
          focus: "center",
          gap: "1rem",
          perMove: 1,
          autoplay: true,
          pagination: false,
          arrows: true,
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
            src="/../public/src/gallery/sharkTank/st7.png"
            width={2500}
            height={1500}
            className="w-full h-full object-cover"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end lg:justify-center">
            <p className="text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              SabjiKothi in Shark Tank
            </p>
            <Link href={"/gallery"}>
              <button className="btn btn-primary rounded-full mb-8">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/../public/src/gallery/modiji/modiji2.png"
            width={2500}
            height={1500}
            className="w-full h-full object-cover"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end lg:justify-center">
            <p className="text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              SabjiKothi Demonstration in Front of PM Modi
            </p>
            <Link href={"/gallery"}>
              <button className="btn btn-primary rounded-full mb-8">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/../public/src/gallery/img1.jpeg"
            width={2500}
            height={1500}
            className="w-full h-full object-cover"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end lg:justify-center">
            <p className="text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              Conferred By Youth Affairs & Sports Minister Anurag Thakur
            </p>
            <Link href={"/gallery"}>
              <button className="btn btn-primary rounded-full mb-8">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/../public/src/gallery/img2.jpeg"
            width={2500}
            height={1500}
            className="w-full h-full object-cover"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end lg:justify-center">
            <p className="text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              Photo with Governer of UN
            </p>
            <Link href={"/gallery"}>
              <button className="btn btn-primary rounded-full mb-8">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/../public/src/HappyFace.JPG"
            width={2500}
            height={1500}
            className="w-full h-full object-cover"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center">
            <p className="text-2xl text-white font-bold mb-2 md:text-4xl lg:text-6xl text-center">
              Happy Customer
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HallOfFame;
