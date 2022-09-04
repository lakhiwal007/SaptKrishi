import { NextComponentType } from "next"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Hamburger from 'hamburger-react'
import React, { Dispatch, SetStateAction }  from "react";
import {useState} from "react"
import Menu from '../components/Menu'

// interface IProps {
//     isOpen: boolean;
//     setOpen: Dispatch<SetStateAction<boolean>>;
//   }
  
const NavBar: NextComponentType = () => {
	const [isOpen, setOpen] = useState(false)
	const handleToggle = () => {
		setOpen(!isOpen)
	  }
	return (
		<div className="w-full flex flex-cols items-center justify-center">
		<div className="w-full flex items-center justify-between bg-white pt-2 pb-2 sticky top-0 bg-white z-10  border-b-[1px] border-gray-100">
			<div className="w-full flex items-center justify-center">
				<div className="pl-8 block w-full h-auto">
					<Link href="/"><Image src="/../public/src/saptkrishi-logo.png" width={112.25} height={43.91} alt="logo" className="cursor-pointer object-contain"></Image></Link>
				</div>
			</div>

			<div className="">
				<ul className="hidden w-full flex  items-center justify-center space-x-4 p-4 lg:flex">
					<Link href="/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">Home</li></Link>
					<Link href="products/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">Products</li></Link>
					<Link href="about/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">About</li></Link>
					<Link href="gallery/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">Gallery</li></Link>
					<Link href="news/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">News</li></Link>
					<Link href="team/"><li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">Team</li></Link>
					<li className="hidden nav-item dropdown pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white lg:block">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Brochure
						</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">English</a></li>
							<li><a className="dropdown-item" href="#">Hindi</a></li>
							<li><a className="dropdown-item" href="#">Odiya</a></li>
							<li><a className="dropdown-item" href="#">Malayalam</a></li>
							<li><a className="dropdown-item" href="#">Tamil</a></li>
							<li><a className="dropdown-item" href="#">Marathi</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="w-full flex items-center justify-center ml-2 ">
				<Link href="book/"><button className="btn btn-outline-success flex hover:bg-gradient-to-r hover:from-green-500  hover:to-cyan-400 hover:border-0 items-center rounded-full hover:bg-gradient-to-r hover:from-green-500  hover:to-cyan-400 text-sm md:text-md md:pl-0"> <span className="p-2"><FaShoppingCart /></span> Book Now</button></Link>
			</div>

			<div className="p-2 lg:hidden">
			<Hamburger rounded onToggle={handleToggle} />
			</div>
			
		</div>
		{isOpen? <Menu isShow={"flex"}/> : <Menu isShow={"hidden"}/>}
		</div>
	)
}





export default NavBar