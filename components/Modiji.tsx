
const Modiji = () => {
	return (
			<div className="w-full row p-4">
                <h2 className="text-xl p-2  mb-2 border-l-8 border-emerald-600 md:text-4xl">Demonstration of Sabjikothi to the PM Modi </h2>
                <div className="w-full flex flex-col  items-center justify-center lg:p-8">
                    <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="src/gallery/modiji/modiji1.png" className="d-block w-100" alt="..."/>
                            </div>
                            {/* <div className="carousel-item">
                            <img src="src/gallery/modiji/modiji2.png" className="d-block w-100" alt="..."/>
                            </div> */}
                            <div className="carousel-item">
                            <img src="src/gallery/modiji/modiji3.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="src/gallery/modiji/modiji4.png" className="d-block w-100" alt="..."/>
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

export default Modiji;
