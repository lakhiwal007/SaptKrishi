import { NextPage } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SabjiKothi from "../components/Product/SabjiKothi";
import NanoKawach from "../components/Product/NanoKawach";
import SabjiKothiECart from "../components/Product/SabjiKothiECart";
import SabjiKothiCart from "../components/Product/SabjiKothiCart";

const Products: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl ">Our Products</h1>
      <div className="w-full flex items-center justify-center flex-wrap p-8 pt-0">
        <Splide
          className="w-full flex items-center justify-center"
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            // rewindSpeed: 2000,
            type: "loop",
            perPage: 1,
            drag: "free",
            snap: true,
            gap: "1rem",
            focus: "center",
            perMove: 1,
            pagination: false,
          }}
        >
          <SplideSlide className="flex items-center justify-center">
            <SabjiKothi />
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <SabjiKothiCart />
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <SabjiKothiECart />
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <NanoKawach />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Products;
