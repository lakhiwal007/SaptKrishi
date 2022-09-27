import { NextPage } from "next";
import Image from "next/image";
import KnowMore from "./KnowMore"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SabjiKothi from '../components/Product/SabjiKothi';
import NanoKawach from '../components/Product/NanoKawach';
import SabjiKothiECart from '../components/Product/SabjiKothiECart';
import SabjiKothiCart from '../components/Product/SabjiKothiCart';

const Products: NextPage = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 className="text-4xl md:text-6xl ">Our Products</h1>
			<div className="w-full flex items-center justify-center flex-wrap p-4">
                <Splide className="w-full flex items-center justify-center" aria-label="My Favorite Images"
                    options={ {
                    rewind : true,
                    // rewindSpeed: 2000,
                    type : 'loop',
                    perPage: 1,
                    drag   : 'free',
                    snap   : true,
                    gap   : '1rem',
                    focus: 'center',
                    perMove : 1,
                    pagination : false,
                    
                    } }>
                    <SplideSlide className="flex items-center justify-center">
                        {/* <div className="w-[350px] flex flex-col items-center justify-center relative rounded touch-auto m-auto mt-4">
                            <Image
                                src="/../public/src/products/sabjikothi-farmer-web-min.png"
                                width={350} height={350}
                                className="object-fit rounded"
                            ></Image>
                            
                            <div className="w-full flex flex-col items-center justify-center mt-2">
                                <p className="text-xl font-semibold">SabjiKothi</p>
                                <p className="text-center">A microclimate based affordable storage to extends 
                                    the shelf-life and preserves the freshness of fruits 
                                    and vegetables without using any preservative, 
                                    chemical or refrigerants.</p>
                                <KnowMore  name={"SabjiKothi"} />
                            </div>
                        </div> */}
                        <SabjiKothi/>
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        {/* <div className="w-[350px] flex flex-col items-center justify-center relative rounded touch-auto m-auto mt-4">
                                <Image
                                    src="/../public/src/products/threeWheelCart.JPG"
                                    width={350} height={350}
                                    className="object-fit rounded"
                                ></Image>
                                <div className="w-full flex flex-col items-center justify-center mt-2">
                                <p className="text-xl font-semibold">SabjiKothi Cart</p>
                                <p className="text-center">The sabjikothi Cart is an affordable wheel mounted 
                                    storage to preserve the freshness and extends the 
                                    shelf-life of fruits and vegetables, specially designed for 
                                    street vendors, thela-wala, reri-wala to avoid the panic 
                                    selling.</p>
                                <KnowMore  name={"SabjiKothi Farmer"} />
                            </div>
                        </div> */}
                        <SabjiKothiCart/>
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        {/* <div className="w-[350px] flex flex-col items-center justify-center relative rounded touch-auto m-auto mt-4">
                                <Image
                                    src="/../public/src/products/ecart.PNG"
                                    width={350} height={350}
                                    className="object-fit rounded"
                                ></Image>
                            <div className="w-full flex flex-col items-center justify-center mt-2">
                                <p className="text-xl font-semibold">SabjiKothi E-Cart</p>
                                <p className="text-center">Preservator- A storage especially designed to transport 
                                    the fruits and vegetables for short and medium distance 
                                    and avoids the losses incurred due to transportation. </p>
                                <KnowMore  name={"SabjiKothi Farmer"} />
                            </div>
                        </div> */}
                        <SabjiKothiECart/>
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        {/* <div className="w-[350px] flex flex-col items-center justify-center relative rounded touch-auto m-auto mt-4">
                                <Image
                                    src="/../public/src/products/NanoKawach.jpeg"
                                    width={350} height={350}
                                    className="object-fit rounded"
                                ></Image>
                                <div className="w-full flex flex-col items-center justify-center mt-2">
                                <p className="text-xl font-semibold">Nano Kawach Pesticide</p>
                                <p className="text-center">NATURAL PESTICIDE FOLIAR SPRAY FORMULATION</p>
                                <KnowMore  name={"SabjiKothi Farmer"} />
                            </div>
                        </div> */}
                        <NanoKawach/>
                    </SplideSlide>
                    
                    </Splide>
				
			</div>
		</div>
	);
};

export default Products;
