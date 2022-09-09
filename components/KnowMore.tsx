import React from "react";
import Link from "next/link";

type Props = {
    imgURL: string,
    name: string
}
const KnowMore = ({name}:Props) => {
	return (
			<div className="w-full h-1/4 hidden items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 absolute bottom-0 group-hover:flex group-hover:transition">
				<Link href={{
                    pathname: "/book",
                    query: { name: name },
                }}>
				<button
					className="btn btn-primary rounded-full"
				>
					Book Now
				</button>
				</Link>
			</div>

	);
};

export default KnowMore;
