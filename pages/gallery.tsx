import { NextPage } from "next"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"
import Iframe from 'react-iframe'

const gallery: NextPage = () => {
	return (
		<div>
			<NavBar />
			<div className="w-full min-h-screen flex flex-cols items-center justify-center flex-wrap"> 
				<h1 className="text-6xl p-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-6xl lg:text-8xl">Gallery</h1>
				<div className="w-full row p-4">
					<div className="w-full grid grid-cols-1 p-4 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img1.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Conferred By Youth Affairs & Sports Minister Anurag Thakur</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img2.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Demonstration of Sabjikothi to the Governor of UN</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img3.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Demonstration of Sabjikothi to the CM of Arunachal Pradesh Pema Khandu</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img4.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Interaction with Manoj Sinha <br></br>
								(Lieutenant Governor of Jammu Kashmir)</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img5.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Presentation of project to Prof. Ram Madhav</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img6.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Interaction with Prof. H.C Verma</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/imgWithProf.jpg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Interaction with Saurabh Shrivastav<br></br>
								(Former chairman of Nasscom)</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img7.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Demonstration of Sabjikothi to Dr. Devansh Yadav<br></br>
								(IAS, Changlang Arunachal Pradesh)</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img8.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Demonstration of Sabjikothi to SKAUST Chief (Jammu)</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Image src="/../public/src/gallery/img9.jpeg" width={300} height={300} className="object-cover rounded "></Image>
							<p className="text-md p-4 text-center font-semibold">Talk with the Horticulture Team (Senior)</p>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://youtube.com/embed/Hkw_DshpD9k" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://www.youtube.com/embed/fcvBBfiToCk" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://www.youtube.com/embed/xkc5BG0lylY" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://www.youtube.com/embed/fkRwxSoD6Ro" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://www.youtube.com/embed/jMkMuVtViAo" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
						<div className="w-full h-auto flex flex-cols flex-wrap items-start justify-center rounded">
							<Iframe url="https://www.youtube.com/embed/fb4wdTeRYj0" width="300px"
								height="300px" className="rounded" ></Iframe>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default gallery