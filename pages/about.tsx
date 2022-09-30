import React from "react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";

const about: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-full flex flex-column items-center justify-center bg-white">
        {/* Saptkrishi */}
        <div className="w-full min-h-full flex flex-column items-center justify-center mt-8">
          <div className="w-[80%] p-4 text-center flex flex-column items-center justify-center rounded-xl shadow-lg shadow-slate-300 lg:p-16">
            <h1 className=" text-4xl md:text-5xl font-bold pb-8 pr-4 pl-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 md:text-6xl">
              SAPTKRISHI
            </h1>
            <p className="text-justify">
              SaptKrishi is a young Agri-Tech start-up incubated at IIT Kanpur,
              with youth in decisive roles who are determined to work towards
              agricultural innovation and the transformation of rural South-East
              Asia.. The extremely short shelf-life of horticultural and
              floricultural produce results in a big chunk of the produce not
              making it to the market and ends up getting wasted. 70% of fruit
              and vegetable output is wasted, accounting for 40% of the total
              cost. As a social enterprise, the focus sector for its first phase
              is the development of low-cost storage and transportation solution
              for farmers and traders engaged with horticulture and
              floriculture.
            </p>
          </div>
        </div>

        {/* Certificates */}
        <div className="w-[80%] min-h-full flex flex-col items-center justify-center rounded-xl shadow-lg shadow-slate-300 mt-16 p-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-6xl">
              Certificates
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-16 m-auto">
            <div className="w-full flex items-center justify-center flex-wrap">
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 ">
                <Image
                  src="/../public/src/certificates/certificate1.jpg"
                  width={450}
                  height={550}
                  className="border rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/certificates/certificate2.jpg"
                  width={450}
                  height={550}
                  className="border rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/certificates/certificate3.jpg"
                  width={450}
                  height={450}
                  className="border rounded"
                  alt="..."
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}

        <div className="w-[80%] min-h-full flex flex-col items-center justify-center rounded-xl shadow-lg shadow-slate-300 mt-8 p-16 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 md:text-6xl">
              Awards
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-16 m-auto">
            <div className="w-full grid grid-cols-1 gap-y-4  md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:ml-12">
              <div className=" w-40 h-40 md:w-60 md:h-60   flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 ">
                <Image
                  src="/../public/src/awards/Award1.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-40 h-40 md:w-60 md:h-60  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/awards/Award2.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-40 h-40 md:w-60 md:h-60  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/awards/Award3.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-40 h-40 md:w-60 md:h-60  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/awards/Award4.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-40 h-40 md:w-60 md:h-60  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/awards/Award5.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-40 h-40 md:w-60 md:h-60  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110">
                <Image
                  src="/../public/src/awards/Award6.png"
                  width={200}
                  height={200}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
