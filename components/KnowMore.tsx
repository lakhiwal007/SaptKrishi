import React from "react";
import Link from "next/link";

type Props = {
    imgURL: string,
    name: string
}
const KnowMore = ({name}:Props) => {
	return (
			<div className="w-full h-1/4 hidden items-center justify-center absolute bottom-5 group-hover:flex group-hover:transition">
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
