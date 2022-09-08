import { NextPage } from "next"
import Iframe from 'react-iframe'
import { motion } from "framer-motion"
import { TwitterTimelineEmbed} from 'react-twitter-embed';

const SocialMedia: NextPage = () => {
	return (
		<motion.div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 className="text-4xl md:text-6xl text-center p-4">Social Media Timeline</h1>
			<motion.div className="w-full flex items-center justify-center flex-wrap p-4">

				<motion.div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-green-400 hover:to-blue-500 shadow-xl"
					animate={{
						x: ['100px', '0px']  
					}}
					transition={{
						type: 'tween',
						duration: 2
					}}>
				<motion.div className="w-full h-full relative rounded m-auto  shadow-xl overflow-y-scroll scrollbar-hide">
					  
					 <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={'saptkrishi'}
                        options={{height: 450}}
                        />
				</motion.div>
				</motion.div>


				

				<motion.div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-cyan-500 to-yellow-500 hover:from-yellow-500 hover:to-emerald-500 shadow-xl">
				<motion.div className="w-full h-full relative rounded m-auto bg-white shadow-xl overflow-y-scroll scrollbar-hide">
					<Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaptkrishi%2Fposts%2Fpfbid02KVzoQeYCm2eykcf53snxXrfUn7J8YPPNdBNt7hvCt7hLz3wBxN12VCdswWoq31HUl&show_text=true" scrolling="yes"  width="335px"
        height="450px" className="rounded" ></Iframe>
				</motion.div>
				</motion.div>

				<motion.div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl">
				<motion.div className="w-full h-full relative rounded m-auto border-gradient-br-blue-green-gray-900 border-transparent border-solid border-2 shadow-xl overflow-y-scroll scrollbar-hide">
					<Iframe url="https://www.instagram.com/p/CdqrDG9N6ME/embed" width="330px"
        height="450px" className="rounded " ></Iframe>
				</motion.div>
				</motion.div>

				
				
			</motion.div>
		</motion.div>
	)
}

export default SocialMedia