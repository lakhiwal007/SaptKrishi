import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
            drag: true,
            snap: true,
            arrows: false,
            pagination: true,
            // perMove: 3,

            gap: "10px",
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
          extensions={{ AutoScroll }}
        >
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award1.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/awards/Award2.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award3.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/awards/Award4.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award5.png"
                width={200}
                height={200}
                className="rounded object-contain"
              ></Image>
              <Image
                src="/src/awards/Award6.png"
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
