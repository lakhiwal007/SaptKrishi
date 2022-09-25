import { NextComponentType } from 'next'
import React from 'react'
import Image from "next/image";
import BookNow from '../BookNow';
const Preservator: NextComponentType= () => {
  return (
    <div className="w-[95%] h-auto grid grid-cols-1 gap-4 lg:grid-cols-2 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 mt-8 pb-4 lg:w-[80%]">
			<div className="w-full flex items-center justify-center lg:justify-start relative m-auto p-2">
				<Image
					src="/../public/src/preservator.jpg"
					width={450}
					height={450}
					className="rounded object-cover"
				></Image>
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full flex flex-col items-center justify-center">
					<ul className="w-full flex flex-col items-center justify-start p-4 list-disc">
						<li className="w-full mt-2 text-justify">
                        Preservator/Sabjikothi is a wheel mountable storage for transportation of fresh fruits and vegetables.
						</li>
						<li className="w-full mt-2 text-justify">
                        It is a microclimate portable storage that extend the shelf-life of fruits and vegetables anywhere between 5 to 30 days.

						</li>
						<li className="w-full mt-2 text-justify">
                        It requires 20 watts of power and 1 litre of water and has battery backup of a day and an option of solar charging.
						</li>
						<li className="w-full mt-2 text-justify">
                        The entire setup can be unloaded from wheels, and can doubly acts as on-field & on-market storage.
						</li>
						<li className="w-full mt-2 text-justify">
                        The entire setup can be assembled on any suitable means of transportation (E-rickshaw, mini-trucks, thelas etc.)
						</li>
                        <li className="w-full mt-2 text-justify">
                        It can transport contamination-free fruits and vegetables from field to market without any water loss and decay.
						</li>
					</ul>
                    <div className="pt-2 md:pt-4">
					<BookNow name={"Preservator"}/>
				</div>
				</div>
			</div>
		</div>
  )
}

export default Preservator