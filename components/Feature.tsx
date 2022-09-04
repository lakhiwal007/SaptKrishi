import { NextPage } from "next"
import Image from "next/image"

const Feature: NextPage = () => {
  return (
   	<div className="w-full flex flex-col items-center justify-center mt-8">
		<h1 className="text-4xl md:text-6xl">Features</h1>
		<div className="w-full flex items-center justify-center relative p-4">
			<Image src="/../public/src/features.PNG" width={600} height={400} className="object-contain"></Image>
		</div>
	</div>
  )
}

export default Feature