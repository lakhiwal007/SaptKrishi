import React, { useEffect, useState,useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router"
import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import { app, database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";

type Inputs = {
  ProductName: string,
  FullName: string,
  Email: string,
  MobileNo: number,
  State: string,
  City: string,
  Quantity: number,
};



const book: NextPage = ({productsList}:Array<string>) => {
    const router = useRouter();
    const {query: { name },} = router;
    const productName = productsList.find(item=> item.name === name)
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const [inputData, setInputData] = useState();
    const buttonRef = useRef(null);
    const collectionRef = collection(database, "Bookings");
    
	const handleInput = (event) => {
		let newInput = { [event.target.name]: event.target.value };
        
        // console.log(newInput)
		setInputData({ ...inputData, ...newInput })
	};
    const onSubmit = () => {
        buttonRef.current.disabled = true;
		addDoc(collectionRef, {
            product_name: productName? productName.name : 'Four Wheel Cart',
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
				<form method="POST" onSubmit={handleSubmit(onSubmit)}>
					<div className="w-full mih-h-screen flex justify-center">
				<div className="w-full mih-h-screen grid grid-cols-1 lg:grid-cols-2">
					<div className="w-full mih-h-screen flex justify-center">
						<div className="flex-cols items-center content-center p-16">
							<div className="content-center items-center  justify-center">
								<h1 className="flex text-center items-center justify-center font-semibold text-4xl">
									{productName? productName.name : 'Four Wheel Cart'} Booking Form 
								</h1>
							</div>
							<div className="w-full flex flex-cols items-center mt-4">
								<div>
									<Image
										src={productName?productName.imgURL : '/../public/src/4WheelCart.png'}
										width={650}
										height={600}
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
									Product Name
								</label>
								<input
									type="text"
                                    name="ProductName"
                                    value={productName? productName.name : 'Four Wheel Cart'}
                                    readOnly
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Product name"
									{...register("ProductName", { required: true, maxLength: 50 })}
                                    // onClick={(event) => handleInput(event)}
								/>
								
							</div>
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
									{...register("FullName", { required: true, maxLength: 50 })}
                                    onChange={(event) => handleInput(event)}
								/>
								{errors.FullName && <p className="text-sm bg-red-300 text-red-600 p-2 rounded">Enter your name</p>}
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
									{...register("Email", { required: true, maxLength: 50})}
                                    onChange={(event) => handleInput(event)}
								/>
								{errors.Email && <p className="text-sm bg-red-300 text-red-600 p-2 rounded">Enter valid email address</p>}
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput3" className="form-label">
									Mob. No.
								</label>
								<input
									type="tel"
                                    name="MobileNo"
									className="form-control"
									id="formGroupExampleInput3"
									placeholder="1234567890"
									{...register("MobileNo", { required: true, minLength:10, pattern:/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/})}
                                    onChange={(event) => handleInput(event)}
								/>
								{errors.MobileNo && <p className="text-sm bg-red-300 text-red-600 p-2 rounded">Enter valid mobile number</p>}
							</div>
							<div className="mb-3">
								<label for="exampleFormControlSelect1">Select State</label>
								<select className="form-control" name="State" id="exampleFormControlSelect1"
								{...register("State", { required: true })} onChange={(event) => handleInput(event)}>
								<option>Andhra Pradesh</option>
								<option>Andaman and Nicobar Islands</option>
								<option>Arunachal Pradesh</option>
								<option>Assam</option>
								<option>Bihar</option>
								<option>Chhattisgarh</option>
								<option>Delhi</option>
								<option>Goa</option>
								<option>Gujarat</option>
								<option>Haryana</option>
								<option>Himachal Pradesh</option>
								<option>Jammu and Kashmir</option>
								<option>Jharkhand</option>
								<option>Karnataka</option>
								<option>Kerala</option>
								<option>Madhya Pradesh</option>
								<option>Maharashtra</option>
								<option>Manipur</option>
								<option>Meghalaya</option>
								<option>Mizoram</option>
								<option>Nagaland</option>
								<option>Odisha</option>
								<option>Rajasthan</option>
								<option>Sikkim</option>
								<option>Tamil Nadu</option>
								<option>Telangana</option>
								<option>Tripura</option>
								<option>Uttar Pradesh</option>
								<option>Uttarakhand</option>
								<option>West Bengal</option>
								</select>
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
									{...register("City", { required: true })}
                                    onChange={(event) => handleInput(event)}
								/>
								{errors.City && <p className="text-sm bg-red-300 text-red-600 p-2 rounded">Enter city name</p>}
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput6" className="form-label">
									Quantity
								</label>
								<input
									type="number"
                                    name="Quantity"
									className="form-control"
									id="formGroupExampleInput6"
									placeholder="1"
									{...register("Quantity", { required: true, min:1 })}
                                    onChange={(event) => handleInput(event)}
								/>
								{errors.Quantity && <p className="text-sm bg-red-300 text-red-600 p-2 rounded">Enter valid quantity</p>}
							</div>
							<div>
								<button
									type="submit"
									className="btn btn-outline-success rounded-full "
                                    ref={buttonRef}
                                    
								>
									Book Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
				</form>
			<Footer />
		</div>
	);
};

book.getInitialProps = () => {
    const productsList = [{'id': 1, 'name': 'SabjiKothi Farmer', 'imgURL':"/../public/src/sabjikothi-farmer-web-min.png"},
                          {'id': 2, 'name': 'Preservator', 'imgURL':"/../public/src/preservator.jpg"},
                          {'id': 3, 'name': 'Preservator Trader', 'imgURL':"/../public/src/preservator-trader-web-min.jpg"},
                          {'id': 4, 'name': 'Three Wheel Cart', 'imgURL':"/../public/src/threeWheelCart.JPG"},
						  {'id': 5, 'name': 'Four Wheel Cart', 'imgURL':"/../public/src/4WheelCart.png"},
                          {'id': 6, 'name': 'E-Cart', 'imgURL':"/../public/src/ecart.PNG"}]
  return { productsList}
}

export default book;
