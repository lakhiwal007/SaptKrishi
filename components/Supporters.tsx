import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Supporters: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl">Our Supporters</h1>

      <div className="w-full flex items-center justify-center m-8">
        <Splide
          className="my-carousel"
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            arrows: false,
            drag: true,
            snap: true,
            pagination: true,
            // perMove: 3,

            gap: "10px",
            perPage: 5,
            autoScroll: {
              pauseOnHover: false,
              speed: 2,
            },
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
          extensions={{ Grid, AutoScroll }}
        >
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/siicllogoAssetLOf.png"
              width={800}
              height={500}
              className="rounded-full object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/Incubation-Center-IIT-Patna-Logo-Original-Colors.png"
              width={220}
              height={220}
              className="rounded-full object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/uast.jpeg"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/abiJammu.jfif"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/mafw.png"
              width={200}
              height={200}
              className="rounded-full object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/msme.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/mst.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/panchayatiRaj.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/rtagiitk.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/medTechIITK.jfif"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/supporters/rkvy.jpeg"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Supporters;
