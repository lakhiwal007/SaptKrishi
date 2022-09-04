import { NextPage } from "next"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"
const news: NextPage = () => {
  return (
   	<div>
		<NavBar/>
		<div className="w-full flex flex-col items-center justify-center mt-4" >
		<h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400 md:text-6xl">News</h1>
		<div className="w-full flex items-center justify-center flex-wrap space-x-4 space-y-4 p-4">
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-lg ">
				<Link href="https://www.thebetterindia.com/250005/fresh-vegetables-bihar-startup-farmers-saptkrishi-sabjikothi-iot-device-extend-shelf-life-fruits-startup-innovation-india-nor41"><Image src="/../public/src/news/betterindia.png" width={200} height={200} className=" object-contain p-2"></Image></Link>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-lg ">
				<Link href="https://bloncampus.thehindubusinessline.com/entrepreneurship/sabzikothi-low-power-device-that-keeps-farm-produce-fresh-for-longer/article30109051.ece"><Image src="/../public/src/news/bloc.jpg" width={200} height={200} className=" object-contain p-2" ></Image></Link>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-lg ">
				<Link href="https://csrbox.org/India_CSR_products_Microcliate-Storage--Sabjikothi_256"><Image src="/../public/src/news/csrbox.png" width={200} height={200} className=" object-contain p-2"></Image></Link>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-lg ">
				<Link href="https://www.theoptimistcitizen.com/sabjikothi/"><Image src="/../public/src/news/optimist.png" width={200} height={200} className=" object-contain p-2"></Image></Link>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-lg ">
				<Link href="https://yourstory.com/2021/02/startup-bharat-bhagalpur-agritech-startup-saptkrishi/amp" ><Image src="/../public/src/news/yourstory.png" width={200} height={200} className=" object-contain p-2"></Image></Link>
			</div>
			
		</div>
	</div>
		<Footer/>
	</div>
  )
}

export default news