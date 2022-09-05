import React, { useState } from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { app, database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const contact: NextPage = () => {
    const [inputData, setInputData] = useState({});
    const collectionRef = collection(database, "Queries");
    
	const handleInput = (event) => {
		let newInput = { [event.target.name]: event.target.value };
		setInputData({ ...inputData, ...newInput })
	};
    const handleSubmit = () => {
		addDoc(collectionRef, {
			name: inputData.Name,
			email: inputData.Email,
			subject: inputData.Subject,
			message: inputData.Message,
		})
			.then(() => {
				alert("Query added!")
			})
			.catch((err) => {
				alert(err.message);
			})
		
	};
	return (
		<div>
			<NavBar />
            <div className="w-full mih-h-screen flex flex-col items-center justify-center mt-8 p-4">
            <h1 className="text-4xl mb-8">Find on Google Map</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1451954187555!2d80.22859511467087!3d26.515454383300344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39930458fb4b03cb%3A0xd3d50448218c5e30!2sSAPTKRISHI!5e0!3m2!1sen!2sin!4v1662316629702!5m2!1sen!2sin" width="300" height="300" className="w-full md:w-1/2" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
			<div className="w-full mih-h-screen flex flex-col items-center justify-center mt-8">
				<h1 className="text-4xl mb-8">Get in Touch</h1>
				<div className="w-3/4  mih-h-screen border shadow p-3 mb-5 bg-body rounded md:w-1/2">
					<div className="mb-3">
						<label for="formGroupExampleInput" className="form-label">
							Name
						</label>
						<input
							type="text"
                            name="Name"
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
						<label for="formGroupExampleInput4" className="form-label">
							Subject
						</label>
						<input
							type="text"
                            name="Subject"
							className="form-control"
							id="formGroupExampleInput4"
							placeholder="subject"
                            onChange={(event) => handleInput(event)}
						/>
					</div>
					<div className="mb-3">
						<label for="exampleFormControlTextarea1" class="form-label">
							Message
						</label>
						<textarea
                            name="Message"
							class="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
                            onChange={(event) => handleInput(event)}
						></textarea>
					</div>

					<div>
						<button
							className="btn btn-success rounded-full"
                            onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default contact;
