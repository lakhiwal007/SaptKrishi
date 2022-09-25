import { NextComponentType } from "next"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image"

const Feature: NextComponentType = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8">
		<h1 data-aos="fade-up" className="text-4xl md:text-6xl">Features</h1>
		<div data-aos="fade-up" className="w-full flex items-center justify-center p-4">
			<Splide aria-label="My Favorite Images"
            options={ {
            rewind : true,
            type  : 'loop',
            perPage: 3,
            drag   : 'free',
            snap   : true,
            focus  : 'center',
            gap   : '1rem',
            autoplay : true,
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
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/cleanEnergy.png" width={300} height={300} className="object-fit rounded"  alt="Image 1"></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/carbonFootprint.png" width={300} height={300} className="object-fit rounded" alt="Image 2"></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/zeroMaint.png" width={300} height={300} className="object-fit rounded"  alt="Image 1"></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/chemFree.png" width={300} height={300} className="object-fit rounded" alt="Image 2"></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/saveEnergy.png" width={300} height={300} className="object-fit rounded"  alt="Image 1"></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center shadow-xl">
                <Image src="/../public/src/Feature/envFrind.png" width={300} height={300} className="object-fit rounded" alt="Image 2"></Image>
            </SplideSlide>
            </Splide>
		</div>
	</div>
  )
}

export default Feature