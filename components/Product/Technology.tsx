import { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/image'

const Technology: NextComponentType = () => {
  return (
    <div className="w-[80%] h-auto grid grid-cols-1 gap-4 lg:grid-cols-2 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 mt-8 pb-4">
			<div className="w-full flex items-center justify-center relative m-auto p-2 lg:justify-start">
				<Image
					src="/../public/src/green-tech.jpg"
					width={450}
					height={450}
					className="rounded object-cover"
				></Image>
			</div>
			<div className="w-full h-full flex items-center justify-center p-2">
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-justify text-4xl mb-2">TECHNOLOGY</h1>
                    <p className="text-justify text-sm">Sabjikothi work by construction of self-adaptable, ethylene oxidizing, and near-sterile microclimate in an insulated chamber. The controlled microclimate created inside the insulated chamber inhibit pathogen growth, delays browning as well as ripening and regulate activity of antioxidant enzyme. It also oxidizes ethylene into hydrogen, carbon di-oxide, water vapour and other small molecules which further creates a controlled atmosphere that enables the storage of fruits and vegetables for anywhere upto 40 days.</p>
                    <p className="text-justify text-sm">It is a self-sustainable solution that only require 20 watt of electricity either on-grid or off-grid, and a litre of water per day.</p>
				</div>
			</div>
		</div>
  )
}

export default Technology