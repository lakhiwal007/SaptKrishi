import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"

const Intro: NextComponentType = () => {
  return (
   	<div className="w-full grid grid-cols-1 md:grid-cols-2 mt-8">
		<div className="w-full flex items-center justify-center">
			<div className="w-full flex items-center justify-center">
				<Image src="/../public/src/Thela-and-Box3D.png" width={524} height={434}></Image>
			</div>
		</div>
		<div className="w-full flex items-center justify-center md:items-start md:justify-start">
			<div className="w-3/4 h-full flex flex-col items-center justify-center md:items-start">
				<h1 className="font-semibold pb-2 md:pb-4 text-6xl">SabjiKothi</h1>
				<p className="sm:text-center md:text-start">Unleashing the power of microclimate to extend the shelf-life of fruits and vegetables.</p>
				<div data-aos="fade-up" className="pt-2 md:pt-4">
					<Link href="book/"><button className="flex items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Book Now</button></Link>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Intro