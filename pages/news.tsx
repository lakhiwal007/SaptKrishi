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
		<div className="w-full row p-4">
            <div className="w-full flex  items-center justify-center lg:p-48 lg:pt-8">
            <div id="carouselExampleIndicators1" className="carousel carousel-dark slide border-8 border-green-600 hover:border-blue-600 rounded" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="src/news/img27.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img7.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img32.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img37.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img57.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img62.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img72.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="src/news/img62.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
        <div className="w-full flex items-center justify-center flex-wrap p-4">
			<div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
				<div className="w-full flex items-start justify-center">
                    <Image src="/../public/src/news/betterindia.png" width={200} height={200} className=" object-contain p-2"></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                    <p className="text-justify p-2">Bihar Startup Helps Farmers Keep Veggies Fresh Up To 30 Days Without Refrigeration</p>
                    <a target="_blank" href="https://www.thebetterindia.com/250005/fresh-vegetables-bihar-startup-farmers-saptkrishi-sabjikothi-iot-device-extend-shelf-life-fruits-startup-innovation-india-nor41"><button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Read More...</button></a>
                </div>
			</div>
			<div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
				<div className="w-full flex items-start justify-center">
                    <Image src="/../public/src/news/bloc.jpg" width={200} height={200} className=" object-contain p-2" ></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                    <p className="text-justify p-2">Neither fridge nor freezer, Sabzikothi keeps farm produce fresh</p>
                    <a target="_blank" href="https://bloncampus.thehindubusinessline.com/entrepreneurship/sabzikothi-low-power-device-that-keeps-farm-produce-fresh-for-longer/article30109051.ece"><button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Read More...</button></a>
                </div>
			</div>
			<div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
				<div className="w-full flex items-start justify-center">
                    <Image src="/../public/src/news/csrbox.png" width={200} height={200} className=" object-contain p-2"></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                    <p className="text-justify p-2">SabjiKothi is one of its kind solution that requires low initial investment as well as low maintenance</p>
                    <a target="_blank" href="https://csrbox.org/India_CSR_products_Microcliate-Storage--Sabjikothi_256"><button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Read More...</button></a>
                </div>
			</div>
			<div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
				<div className="w-full flex items-start justify-center">
                    <Image src="/../public/src/news/optimist.png" width={200} height={200} className=" object-contain p-2"></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                    <p className="text-justify p-2">This Bihar lad is helping farmers increase the shelf life of their produce</p>
                    <a target="_blank" href="https://www.theoptimistcitizen.com/sabjikothi/"><button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Read More...</button></a>
                </div>
			</div>
			<div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
				<div className="w-full flex items-start justify-center">
                    <Image src="/../public/src/news/yourstory.png" width={200} height={200} className=" object-contain p-2"></Image>
                </div>
                <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
                    <p className="text-justify p-2">This Bhagalpur agritech startup's Preservator helps farmers reduce produce wastage</p>
                    <a target="_blank" href="https://yourstory.com/2021/02/startup-bharat-bhagalpur-agritech-startup-saptkrishi/amp"><button className="flex cursor-pointer mb-2 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">Read More...</button></a>
                </div>
			</div>
            
		</div>
	</div>
		<Footer/>
	</div>
  )
}

export default news