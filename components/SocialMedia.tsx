import { NextPage } from "next"
import Iframe from 'react-iframe'
import { motion } from "framer-motion"

const SocialMedia: NextPage = () => {
	return (
		<motion.div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 className="text-4xl md:text-6xl text-center p-4">Social Media Timeline</h1>
			<motion.div className="w-full flex items-center justify-center flex-wrap p-4">

				<motion.div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-green-400 hover:to-blue-500 shadow-xl">
				<motion.div className="w-full h-full relative rounded m-auto  shadow-xl overflow-y-scroll scrollbar-hide">
					
					{/* <a className="twitter-timeline" href="https://twitter.com/saptkrishi?ref_src=twsrc%5Etfw">Tweets by saptkrishi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
					<blockquote className="twitter-tweet" tw-align-center ><p lang="en" dir="ltr">We are delighted &amp; hugely thankful to have had the opportunity to showcase our product of <a href="https://twitter.com/saptkrishi?ref_src=twsrc%5Etfw">@Saptkrishi</a> to the <a href="https://twitter.com/dpradhanbjp?ref_src=twsrc%5Etfw">@dpradhanbjp</a> Hon&#39;ble Minister of Education &amp; Skill Development &amp; Entrepreneurship and other respected dignitaries at <a href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">@IITKanpur</a>. <a href="https://t.co/Vysi5e3P8y">https://t.co/Vysi5e3P8y</a></p>&mdash; Saptkrishi (@saptkrishi) <a href="https://twitter.com/saptkrishi/status/1548919066500673536?ref_src=twsrc%5Etfw">July 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					
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