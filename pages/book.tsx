// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import { app, database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const book: NextPage = () => {
	const [inputData, setInputData] = useState({});
    const collectionRef = collection(database, "Bookings");
    
	const handleInput = (event) => {
		let newInput = { [event.target.name]: event.target.value };
		setInputData({ ...inputData, ...newInput })
	};
    const handleSubmit = () => {
		addDoc(collectionRef, {
			full_name: inputData.FullName,
			email: inputData.Email,
			mobile_no: inputData.MobileNo,
			state: inputData.State,
            city: inputData.City,
            quantity: inputData.Quantity,
		})
			.then(() => {
				alert("Booking added!")
			})
			.catch((err) => {
				alert(err.message);
			})
		
	};

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
                                    name="FullName"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Name"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput2" className="form-label">
									Email address
								</label>
								<input
									type="email"
                                    name="Email"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="example@email.com"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput3" className="form-label">
									Mob. No.
								</label>
								<input
									type="telephone"
                                    name="MobileNo"
									className="form-control"
									id="formGroupExampleInput3"
									placeholder="1234567890"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput4" className="form-label">
									State
								</label>
								<input
									type="text"
                                    name="State"
									className="form-control"
									id="formGroupExampleInput4"
									placeholder="state"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput5" className="form-label">
									City
								</label>
								<input
									type="text"
                                    name="City"
									className="form-control"
									id="formGroupExampleInput5"
									placeholder="city"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput6" className="form-label">
									Quantity
								</label>
								<input
									type="text"
                                    name="Quantity"
									className="form-control"
									id="formGroupExampleInput6"
									placeholder="0"
                                    onChange={(event) => handleInput(event)}
								/>
							</div>
							<div>
								<button
									className="btn btn-success rounded-full"
									onClick={handleSubmit}
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
