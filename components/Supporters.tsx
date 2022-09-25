import { NextComponentType } from "next"
import Image from "next/image"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Supporters: NextComponentType = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8" >
		<h1 data-aos="fade-up" className="text-4xl md:text-6xl">Our Supporters</h1>
		
            <div className="w-full flex items-center justify-center m-8">
                <Splide className="w-full flex items-center justify-center" aria-label="My Favorite Images"
                    options={ {
                    type : 'loop',
                    perPage: 4,
                    gap   : '1rem',
                    arrows : false,
                    drag: false,
                    pagination: false,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 2,
                    },
                    breakpoints: {
                        1024: {
                        perPage: 3,
                        gap    : '.7rem',
                        },
                        640: {
                        perPage: 2,
                        gap    : '.7rem',
                        },
                    },
                    } }
                    extensions={{ AutoScroll }}>
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/IIT_Kanpur_Logo.png" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/incubation iitk.jpg" width={250} height={250} className="rounded-full object-contain" ></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/msme.png" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/mst.png" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/uast.jpeg" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/nads.jfif" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/iit patna.png" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    </Splide>
                </div>
		
	</div>
  )
}

export default Supporters