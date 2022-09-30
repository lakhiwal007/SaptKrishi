import React from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const news: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400 md:text-6xl">
          News
        </h1>
        <div className="w-full flex items-center justify-center flex-wrap p-4 mt-8">
          <Splide
            className="w-full flex items-center justify-center"
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perPage: 2,
              drag: "free",
              focus: "center",
              gap: "1rem",
              arrows: false,
              pagination: true,
              autoScroll: {
                pauseOnHover: false,
                speed: 2,
              },
              breakpoints: {
                912: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="w-full flex flex-col items-center justify-around lg:flex-row">
              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/betterindia.png"
                    width={200}
                    height={200}
                    className=" object-contain p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    Bihar Startup Helps Farmers Keep Veggies Fresh Up To 30 Days
                    Without Refrigeration
                  </p>
                  <a
                    target="_blank"
                    href="https://www.thebetterindia.com/250005/fresh-vegetables-bihar-startup-farmers-saptkrishi-sabjikothi-iot-device-extend-shelf-life-fruits-startup-innovation-india-nor41"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/bloc.jpg"
                    width={200}
                    height={200}
                    className=" object-contain p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    Neither fridge nor freezer, Sabzikothi keeps farm produce
                    fresh
                  </p>
                  <a
                    target="_blank"
                    href="https://bloncampus.thehindubusinessline.com/entrepreneurship/sabzikothi-low-power-device-that-keeps-farm-produce-fresh-for-longer/article30109051.ece"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="w-full flex flex-col items-center justify-around lg:flex-row">
              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/optimist.png"
                    width={200}
                    height={200}
                    className=" object-contain p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    This Bihar lad is helping farmers increase the shelf life of
                    their produce
                  </p>
                  <a
                    target="_blank"
                    href="https://www.theoptimistcitizen.com/sabjikothi/"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/yourstory.png"
                    width={200}
                    height={200}
                    className=" object-contain p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    This Bhagalpur agritech startup&apos;s Preservator helps
                    farmers reduce produce wastage
                  </p>
                  <a
                    target="_blank"
                    href="https://yourstory.com/2021/02/startup-bharat-bhagalpur-agritech-startup-saptkrishi/amp"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="w-full flex flex-col items-center justify-around lg:flex-row">
              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/indiaTimes.png"
                    width={150}
                    height={150}
                    className=" object-contain rounded-full p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    IIT Kanpur Engineer Built Cheap Cold Storage Device To
                    Reduce Farmer&apos;s Losses
                  </p>
                  <a
                    target="_blank"
                    href="https://www.indiatimes.com/technology/news/iit-kanpur-engineer-cold-storage-fresh-produce-559870.html"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="w-full flex items-start justify-center">
                  <Image
                    src="/../public/src/news/csrbox.png"
                    width={200}
                    height={200}
                    className="object-contain p-2"
                  ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                  <p className="text-justify p-2">
                    SaptKrishi has developed a &apos;Microcliate Storage/
                    Sabjikothi,&apos; which is a low-cost storage and
                    transportation solution...
                  </p>
                  <a
                    target="_blank"
                    href="https://csrbox.org/India_CSR_products_Microcliate-Storage--Sabjikothi_256"
                    rel="noreferrer"
                  >
                    <button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                      Read More...
                    </button>
                  </a>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-full flex  items-center justify-center p-4">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perPage: 3,
              drag: "free",
              focus: "center",
              gap: "1rem",
              arrows: false,
              pagination: true,
              autoScroll: {
                pauseOnHover: false,
                speed: 2,
              },
              breakpoints: {
                912: {
                  perPage: 2,
                  gap: ".7rem",
                },
                640: {
                  perPage: 1,
                  gap: ".7rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img47.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img7.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img27.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img72.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img32.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img37.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img62.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img57.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/../public/src/news/img22.jpg"
                width={500}
                height={450}
                className="object-fit rounded"
                alt="Image 2"
              ></Image>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default news;
