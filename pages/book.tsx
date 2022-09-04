// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
// import { config } from '../config/config'
import helper, { IDataDoc } from "../components/helper";

const book: NextPage = () => {
	const [data, setData] = useState<IDataDoc[]>([]);
	return (
		<div className="relative">
			<NavBar />

			<div className="w-full mih-h-screen flex justify-center">
				<div className="w-full mih-h-screen grid grid-cols-1 lg:grid-cols-2">
					<div className="w-full mih-h-screen flex justify-center">
						<div className="flex-cols items-center content-center p-16">
							<div className="content-center items-center  justify-center">
								<h1 className="flex v-screen items-center justify-center font-bold text-5xl">
									Booking Form
								</h1>
							</div>
							<div className="w-full flex flex-cols items-center">
								<div>
									<Image
										src="/../public/src/Thela-and-Box3D.png"
										width={800}
										height={700}
										className="flex items-center justify-center rounded"
									></Image>{" "}
								</div>
							</div>
						</div>
					</div>
					<div className="w-full mih-h-screen flex items-center justify-center">
						<div className="w-3/4  mih-h-screen bordershadow p-3 mb-5 bg-body rounded">
							<div className="mb-3">
								<label for="formGroupExampleInput" className="form-label">
									Full Name
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Name"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput2" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="example@email.com"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput3" className="form-label">
									Mob. No.
								</label>
								<input
									type="telephone"
									className="form-control"
									id="formGroupExampleInput3"
									placeholder="1234567890"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput4" className="form-label">
									State
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput4"
									placeholder="state"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput5" className="form-label">
									City
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput5"
									placeholder="city"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput6" className="form-label">
									Quantity
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput6"
									placeholder="0"
								/>
							</div>
							<div>
								<button
									className="btn btn-success rounded-full"
									onClick={() => booking()}
								>
									Book Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default book;
