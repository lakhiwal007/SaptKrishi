import React from "react";
import { NextPage } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SabjiKothi from "../components/Product/SabjiKothi";
import NanoKawach from "../components/Product/NanoKawach";
import SabjiKothiECart from "../components/Product/SabjiKothiECart";
import SabjiKothiCart from "../components/Product/SabjiKothiCart";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Products: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl ">Our Products</h1>
      <div className="w-full flex items-center justify-center flex-wrap p-4 pt-0">
        <Splide
          className="w-full flex items-center justify-center"
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perPage: 1,
            drag: "free",
            snap: true,
            gap: "1rem",
            focus: "center",
            perMove: 1,
            pagination: false,
            autoScroll: {
              speed: 2,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide className="flex items-start justify-center lg:items-center">
            <SabjiKothi />
          </SplideSlide>

          <SplideSlide className="flex items-start justify-center lg:items-center">
            <SabjiKothiCart />
          </SplideSlide>

          <SplideSlide className="flex items-start justify-center lg:items-center">
            <SabjiKothiECart />
          </SplideSlide>

          <SplideSlide className="flex items-start justify-center lg:items-center">
            <NanoKawach />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Products;
