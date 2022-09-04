import { NextPage } from "next"
import Image from "next/image"

const Supporters: NextPage = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8" >
		<h1 className="text-4xl md:text-6xl">Our Supporters</h1>
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 p-16">
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/IIT_Kanpur_Logo.png" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/incubation iitk.jpg" width={200} height={200} className="rounded-full object-contain" ></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/msme.png" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/mst.png" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/uast.jpeg" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/nads.jfif" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
			<div className="w-[200px] h-[200px] relative shadow-xl rounded-full m-auto">
				<Image src="/../public/src/supporters/iit patna.png" width={200} height={200} className="rounded-full object-contain"></Image>
			</div>
		</div>
	</div>
  )
}

export default Supporters