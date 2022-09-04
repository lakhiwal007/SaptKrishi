import { NextComponentType } from "next"
import Image from "next/image";
import { FaFacebookF,FaTwitter, FaGoogle, FaLinkedin, FaPhoneAlt, FaInstagram } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdMail } from "react-icons/md";
const Footer: NextComponentType = () => {
  return (
   	<div className="w-full flex flex-col">
		
		<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-emerald-500 text-white">
			<div className="w-full flex items-center justify-center">
				<div className="w-full flex items-center justify-center">
					<Image src="/../public/src/saptkrishi-logo.png" width={112.25} height={43.91} alt="logo"></Image>
				</div>
			</div>
			<div className="w-full h-full flex flex-col justify-start  text-center p-4">
				<h2 className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4">Address</h2>
				<p>SaptKrishi Scientific Pvt. Ltd. 108D,</p>
					<p>SIIC Extension, IIT Kanpur, Kanpur,</p>
					<p>UP, 208016</p>
			</div>
			<div className="w-full h-full flex flex-col justify-start text-center p-4">
				<h2  className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4">Quick Links</h2>
				<ul>
					<li>Team</li>
					<li>Contact Us</li>
					<li>Developer</li>
				</ul>
			</div>
			<div className="w-full h-full flex flex-col justify-start text-center p-4">
				<h2 className="text-lg font-bold uppercase underline decoration-2 decoration-slate-200 underline-offset-8 pb-4" >Contact</h2>
				<ul className="flex flex-col items-center justify-center">
					<li className="flex items-center space-x-4"> <span><MdMail/></span> <a href="mailto:saptkrishi@gmail.com">saptkrishi@gmail.com</a> </li>
					<li className="flex items-center space-x-4"> <span><FaPhoneAlt/></span> <a href="tel:+91-8826217394">+91-8826217394</a> </li>
					<li className="flex items-center space-x-4"> <span><FaPhoneAlt/></span> <a href="tel:+91-8340742701">+91-8340742701</a> </li>
				</ul>
			</div>
		</div>
		<div className="w-full grid grid-cols-1 md:grid-cols-2 p-4"> 
			<div className="w-full flex items-center justify-center font-semibold text-center pt-4 md:pt-0">
				<p>Get connected with us on social networks:</p>
			</div>
			<div className="w-full flex items-center justify-center pt-4 md:pt-0">
				<ul className="flex items-center text-emerald-600 space-x-4">
					<li><FaFacebookF/></li>
					<li><FaTwitter/></li>
					<li><FaGoogle/></li>
					<li><FaLinkedin/></li>
					<li><FaInstagram/></li>
				</ul>
			</div>
		</div>
		<div className="w-full flex items-center justify-center">
			<div className="w-full flex items-center justify-center bg-gray-300 p-4">
				<p className="text-sm text-slate-200">Copyright © 2022 All rights reserved | SaptKrishi Scientific Pvt. Ltd. | Terms and conditions</p>
			</div>
		</div>
	</div>
  )
}

export default Footer