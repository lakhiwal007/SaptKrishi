import React from "react";
import { NextComponentType } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const Modiji: NextComponentType = () => {
  return (
    <div className="w-full row p-4">
      <h2
        className="text-xl p-2  mb-2 border-l-8 border-emerald-600 md:text-4xl"
        id="modiji"
      >
        Demonstration of Sabjikothi to the PM Modi{" "}
      </h2>
      <div className="w-full flex flex-col  items-center justify-center lg:p-8">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            rewindSpeed: 2000,
            type: "slide",
            perPage: 3,
            drag: "free",
            snap: true,
            focus: "center",
            gap: "1rem",
            perMove: 1,
            autoplay: true,
            pagination: false,
            arrows: false,
            breakpoints: {
              912: {
                perPage: 2,
                gap: ".7rem",
                arrows: true,
              },
              640: {
                perPage: 1,
                gap: ".7rem",
                arrows: true,
              },
            },
          }}
        >
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/modiji/modiji2.png"
              width={500}
              height={350}
              className="object-fit rounded"
              alt="Image 2"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/modiji/modiji3.png"
              width={500}
              height={350}
              className="object-fit rounded"
              alt="Image 3"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/modiji/modiji4.png"
              width={500}
              height={350}
              className="object-fit rounded"
              alt="Image 4"
            ></Image>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Modiji;
