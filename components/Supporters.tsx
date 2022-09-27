import { NextComponentType } from "next"
import Image from "next/image"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/react-splide/css';

const Supporters: NextComponentType = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8" >
		<h1 data-aos="fade-up" className="text-4xl md:text-6xl">Our Supporters</h1>
		
            <div className="w-full flex items-center justify-center m-8">
                <Splide className="w-full flex items-center justify-center" aria-label="My Favorite Images"
                    options={ {
                    rewind: true,
                    rewindSpeed: 2000,
                    gap   : '1rem',
                    arrows : false,
                    drag: true,
                    pagination: false,
                    perMove: 3,
                    // autoScroll: {
                    //     pauseOnHover: false,
                    //     pauseOnFocus: false,
                    //     rewind: false,
                    //     speed: 2,
                    // },
                    grid: {
                            rows: 1,
                            cols: 3,
                            gap : {
                                row: '1rem',
                                col: '1.5rem',
                            },
                    },
                    breakpoints: {
                        1024: {
                        grid: {
                            rows: 2,
                            cols: 3,
                    },
                        gap    : '.7rem',
                        },
                        640: {
                        grid: {
                            rows: 3,
                            cols: 1,
                            
                    },
                        gap    : '.7rem',
                        },
                    },
                    } }
                    extensions={{Grid }}>
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/IIT_Kanpur_Logo.png" width={250} height={250} className="rounded-full object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/incubation iitk.png" width={250} height={250} className="rounded object-contain" ></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/siic iitk.png" width={250} height={250} className="rounded object-contain" ></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/msme.png" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/mst.png" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/panchayatiRaj.png" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/abiJammu.jfif" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/rtagiitk.png" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    
                    <SplideSlide className="flex items-center justify-center">
                        
                            <Image src="/../public/src/supporters/uast.jpeg" width={250} height={250} className="rounded object-contain"></Image>
                        
                    </SplideSlide>
                    </Splide>
                </div>
		
	</div>
  )
}

export default Supporters