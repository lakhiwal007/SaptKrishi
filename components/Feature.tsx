import { NextComponentType } from "next"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image"

const Feature: NextComponentType = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8">
		<h1 data-aos="fade-up" className="text-4xl md:text-6xl">Features</h1>
		<div data-aos="fade-up" className="w-full flex items-center justify-center p-8">
			<Splide aria-label="My Favorite Images"
            options={ {
            
            rewind : true,
            rewindSpeed: 2000,
            type : 'slide',
            perPage: 3,
            drag   : 'free',
            snap   : true,
            perMove : 1,
            gap   : '1rem',
            autoplay : true,
            breakpoints: {
                912: {
                perPage: 2,
                gap    : '.7rem',
                perMove : 2,
                },
                640: {
                perPage: 1,
                gap    : '.7rem',
                perMove : 1,
                },
            },
            } }>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/cleanEnergy.png" width={350} height={350} className="object-fit rounded"  alt="Image 1"></Image>
            </SplideSlide>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/carbonFootprint.png" width={350} height={350} className="object-fit rounded" alt="Image 2"></Image>
            </SplideSlide>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/zeroMaint.png" width={350} height={350} className="object-fit rounded"  alt="Image 3"></Image>
            </SplideSlide>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/chemFree.png" width={350} height={350} className="object-fit rounded" alt="Image 4"></Image>
            </SplideSlide>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/saveEnergy.png" width={350} height={350} className="object-fit rounded"  alt="Image 5"></Image>
            </SplideSlide>
            <SplideSlide data-aos="fade-up" className="flex items-center justify-center">
                <Image src="/../public/src/Feature/envFrind.png" width={350} height={350} className="object-fit rounded" alt="Image 6"></Image>
            </SplideSlide>
            </Splide>
		</div>
	</div>
  )
}

export default Feature