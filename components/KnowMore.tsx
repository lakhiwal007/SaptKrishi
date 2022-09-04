import React from "react";
import Link from "next/link";
const KnowMore = () => {
	return (
			<div className="w-full h-1/4 hidden items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 absolute bottom-0 group-hover:flex group-hover:transition">
				<Link href="products/">
				<button
					className="btn btn-primary rounded-full"
				>
					Know More
				</button>
				</Link>
			</div>

	);
};

export default KnowMore;
