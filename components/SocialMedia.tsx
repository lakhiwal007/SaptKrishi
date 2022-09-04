import { NextPage } from "next"
import Iframe from 'react-iframe'
import { motion } from "framer-motion"

const SocialMedia: NextPage = () => {
	return (
		<motion.div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 className="text-4xl md:text-6xl text-center p-4">Social Media Timeline</h1>
			<motion.div className="w-full flex items-center justify-center flex-wrap p-4">
				<motion.div className="w-[350px] h-[450px] relative rounded m-auto mt-4 border shadow-xl overflow-y-scroll scrollbar-hide">
					
					<a className="twitter-timeline" href="https://twitter.com/saptkrishi?ref_src=twsrc%5Etfw">Tweets by saptkrishi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					
				</motion.div>
				<motion.div className="w-[320px] h-[450px] relative rounded m-auto mt-4 shadow-xl">
					<Iframe url="https://www.youtube.com/embed/uXWycyeTeCs"  width="320px"
        height="450px" className="rounded" ></Iframe>
				</motion.div>
				<motion.div className="w-[320px] h-[450px] relative rounded m-auto mt-4 shadow-xl">
					<Iframe url="https://www.youtube.com/embed/uXWycyeTeCs" width="320px"
        height="450px" className="rounded" ></Iframe>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default SocialMedia