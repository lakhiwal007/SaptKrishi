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
      <h1 className="text-4xl md:text-6xl">Awards</h1>

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
            perPage: 3,
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
              src="/../public/src/awards/Award1.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/awards/Award2.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/awards/Award3.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/awards/Award4.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/awards/Award5.png"
              width={200}
              height={200}
              className="rounded object-contain"
            ></Image>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/../public/src/awards/Award6.png"
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
