import React  from "react";
import { NextComponentType } from "next";
import Link from "next/link";

interface IProps {
    isShow: string;
  }

const Menu: NextComponentType = ({isShow}:IProps) => {
    
	return (
		<div className={`${isShow} w-full min-h-screen items-center justify-center absolute top-20 bg-white z-10`}>
			<div className="w-full min-h-screen flex items-center justify-center">
				<ul className=" w-full flex text-4xl flex-col items-center justify-start">
					<Link href="/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							Home
						</li>
					</Link>
					<Link href="products/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							Products
						</li>
					</Link>
					<Link href="about/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							About
						</li>
					</Link>
					<Link href="gallery/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							Gallery
						</li>
					</Link>
					<Link href="news/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							News
						</li>
					</Link>
					<Link href="team/">
						<li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
							Team
						</li>
					</Link>
					<li className=" nav-item dropdown p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white lg:block">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Brochure
						</a>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									English
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Hindi
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Odiya
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Malayalam
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Tamil
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Marathi
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
