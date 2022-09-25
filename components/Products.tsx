import { NextPage } from "next";
import Image from "next/image";
import KnowMore from "./KnowMore"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Products: NextPage = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 data-aos="fade-up" className="text-4xl md:text-6xl ">Our Products</h1>
			<div className="w-full flex items-center justify-center flex-wrap p-8">
                <Splide className="w-full flex items-center justify-center" aria-label="My Favorite Images"
                    options={ {
                    rewind : true,
                    rewindSpeed: 2000,
                    type : 'slide',
                    perPage: 3,
                    drag   : 'free',
                    snap   : true,
                    gap   : '1rem',
                    perMove : 1,
                    // autoplay : true,
                    breakpoints: {
                        912: {
                        perPage: 2,
                        gap    : '.7rem',
                        },
                        640: {
                        perPage: 1,
                        gap    : '.7rem',
                        },
                    },
                    } }>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                        <Image
                            src="/../public/src/sabjikothi-farmer-web-min.png"
                            width={350} height={350}
                            className="object-fit rounded"
                        ></Image>
                        {/* <KnowMore/> */}
                        <KnowMore  name={"SabjiKothi Farmer"} />
                        </div>
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                        <Image
                            src="/../public/src/preservator.jpg"
                            width={350} height={350}
                            className="object-fit rounded"
                        ></Image>
                        <KnowMore  name={"Preservator"}/>
                    </div>
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                            <Image
                                src="/../public/src/preservator-trader-web-min.jpg"
                                width={350} height={350}
                                className="object-fit rounded"
                            ></Image>
                            <KnowMore  name={"Preservator Trader"}/>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                            <Image
                                src="/../public/src/threeWheelCart.JPG"
                                width={350} height={350}
                                className="object-fit rounded"
                            ></Image>
                            <KnowMore  name={"Three Wheel Cart"}/>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                            <Image
                                src="/../public/src/4WheelCart.png"
                                width={350} height={350}
                                className="object-fit rounded"
                            ></Image>
                            <KnowMore  name={"Four Wheel Cart"}/>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        <div data-aos="fade-up" className="w-[350px] h-[350px] flex items-center justify-center relative rounded touch-auto m-auto mt-4 group">
                            <Image
                                src="/../public/src/ecart.PNG"
                                width={350} height={350}
                                className="object-fit rounded"
                            ></Image>
                            <KnowMore  name={"E-Cart"}/>
                        </div>
                    </SplideSlide>
                    
                    </Splide>
				
			</div>
		</div>
	);
};

export default Products;
