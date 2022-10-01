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
            pagination: false,
            // perMove: 3,

            gap: "20px",
            perPage: 1,
            autoScroll: {
              pauseOnHover: false,
              speed: 2,
            },
            breakpoints: {
              640: {
                perPage: 1,
                autoScroll: {
                  speed: 1,
                },
              },
            },
          }}
          extensions={{ Grid, AutoScroll }}
        >
          <SplideSlide className="w-full flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/supporters/siicllogoAssetLOf.png"
                width={700}
                height={300}
                className="rounded-full object-contain"
              ></Image>
              <Image
                src="/src/supporters/Incubation-Center-IIT-Patna-Logo-Original-Colors.png"
                width={220}
                height={220}
                className="rounded-full object-contain"
              ></Image>
              <Image
                src="/src/supporters/MafwAbiUast.png"
                width={600}
                height={400}
                className="rounded-full object-contain"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/supporters/msme.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/supporters/mst.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/supporters/panchayatiRaj.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/supporters/rtagiitk.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/supporters/medTechIITK.jfif"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/supporters/rkvy.jpeg"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Supporters;
