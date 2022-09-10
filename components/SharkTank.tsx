import React from "react";
import Image from "next/image"

const SharkTank = () => {
	return (
			<div className="w-full row p-4">
                <h2 className="text-xl p-2 mb-2 border-l-8 border-emerald-600 md:text-4xl">SabjiKothi in Shark Tank</h2>
                <div className="w-full flex flex-col  items-center justify-center lg:p-8">
                    <div id="carouselExampleIndicators" className="carousel carousel-dark slide border-8 border-green-600 hover:border-blue-600 rounded" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="src/gallery/sharkTank/st1.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st2.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st3.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st4.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st5.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st6.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/sharkTank/st7.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
	);
};

export default SharkTank;
