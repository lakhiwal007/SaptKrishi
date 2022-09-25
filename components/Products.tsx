import { NextPage } from "next";
import Image from "next/image";
import KnowMore from "./KnowMore"

const Products: NextPage = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 data-aos="fade-up" className="text-4xl md:text-6xl ">Our Products</h1>
			<div className="w-full flex items-center justify-center flex-wrap p-8 md:p-16">
				<div ata-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/sabjikothi-farmer-web-min.png"
						layout="fill"
						className="rounded"
					></Image>
					{/* <KnowMore/> */}
					<KnowMore  name={"SabjiKothi Farmer"} />
				</div>
				<div data-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/preservator.jpg"
						layout="fill"
						className="rounded"
					></Image>
					<KnowMore  name={"Preservator"}/>
				</div>
				<div data-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/preservator-trader-web-min.jpg"
						layout="fill"
						className="rounded"
					></Image>
					<KnowMore  name={"Preservator Trader"}/>
				</div>
				<div data-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/threeWheelCart.JPG"
						layout="fill"
						className="rounded"
					></Image>
					<KnowMore  name={"Three Wheel Cart"}/>
				</div>
                <div data-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/4WheelCart.png"
						layout="fill"
						className="rounded"
					></Image>
					<KnowMore  name={"Four Wheel Cart"}/>
				</div>
				<div data-aos="fade-up" className="w-[350px] h-[350px] relative shadow-2xl rounded m-auto mt-4 group">
					<Image
						src="/../public/src/ecart.PNG"
						layout="fill"
						className="rounded"
					></Image>
					<KnowMore  name={"E-Cart"}/>
				</div>
			</div>
		</div>
	);
};

export default Products;
