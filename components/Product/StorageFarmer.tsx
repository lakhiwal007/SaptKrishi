import { NextComponentType } from "next";
import React from "react";
import Image from "next/image";
import { FaRupeeSign, FaPlug, FaInbox } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { HiChip } from "react-icons/hi";
import BookNow from '../BookNow';

const StorageFarmer: NextComponentType = () => {
	return (
		<div className="w-[95%] h-auto grid grid-cols-1 gap-4 lg:grid-cols-2 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 mt-8 pb-4 lg:w-[80%]">
			<div className="w-full flex items-center justify-center lg:justify-start relative m-auto p-2">
				<Image
					src="/../public/src/sabjikothi-farmer-web-min.png"
					width={450}
					height={450}
					className="rounded object-cover"
				></Image>
			</div>
			<div className="w-full h-full flex flex-col items-center justify-center">
				<div className="w-full flex items-center justify-center">
					<ul className="w-full gap-8 grid grid-cols-2 lg:grid-cols-3 p-2">
						<li className="w-full flex flex-col items-center justify-start">
							<p className="text-green-700 text-xl mb-2">
								<FaRupeeSign />
							</p>
							<p className="text-green-700 mb-2 text-center">10000</p>
							<p className="text-center">Affordable</p>
						</li>
						<li className="w-full flex flex-col items-center justify-start">
							<p className="text-green-700 text-xl mb-2">
								<FaPlug />
							</p>
							<p className="text-green-700 mb-2 text-center">20-Watts</p>
							<p className="text-center">Saves Energy</p>
						</li>
						<li className="w-full flex flex-col items-center justify-start">
							<p className="text-green-700 text-xl mb-2">
								<GoGear />
							</p>
							<p className="text-green-700 mb-2 text-center">1 litre/day</p>
							<p className="text-center">Zero Maintainance</p>
						</li>
						<li className="w-full flex flex-col items-center justify-start">
							<p className="text-green-700 text-xl mb-2">
								<FaInbox />
							</p>
							<p className="text-green-700 mb-2 text-center">Upto 200 KG</p>
							<p className="text-center">Storage Capacity</p>
						</li>
						<li className="w-full flex flex-col items-center justify-start">
							<p className="text-green-700 text-xl mb-2">
								<HiChip />
							</p>
							<p className="text-green-700 mb-2 text-center">Intelligent</p>
							<p className="text-center">Self-Adaptable</p>
						</li>
					</ul>
				</div>
                <div className="pt-8">
					<BookNow name={"SabjiKothi Farmer"}/>
				</div>
			</div>
		</div>
	);
};

export default StorageFarmer;
