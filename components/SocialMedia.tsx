import { NextComponentType } from "next"
import Iframe from 'react-iframe'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SocialMedia: NextComponentType = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-8">
			<h1 className="text-4xl md:text-6xl text-center p-4"
            >
                Social Media Timeline
                </h1>
			<div className="w-full flex items-center justify-center flex-wrap p-4">
                <Splide className="w-full flex items-center justify-center p-4" aria-label="My Favorite Images"
            options={ {
            
            rewind : true,
            rewindSpeed: 2000,
            type : 'slide',
            perPage: 3,
            drag   : 'free',
            snap   : true,
            perMove : 1,
            gap   : '100px',
            pagination: false,
            autoplay : true,
            breakpoints: {
                912: {
                perPage: 2,
                gap    : '30px',
                perMove : 2,
                },
                640: {
                perPage: 1,
                gap    : '20px',
                perMove : 1,
                },
            },
            } }
            >
            <SplideSlide  className="flex items-center justify-center">
                <div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-green-400 hover:to-blue-500 shadow-xl"
                >
				<div className="w-full h-full relative rounded m-auto  shadow-xl overflow-y-scroll scrollbar-hide">
					  
					 <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={'saptkrishi'}
                        options={{height: 450}}
                        />
				</div>
				</div>
            </SplideSlide>
            <SplideSlide  className="flex items-center justify-center">
                <div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-cyan-500 to-yellow-500 hover:from-yellow-500 hover:to-emerald-500 shadow-xl"
                >
				<div className="w-full h-full relative rounded m-auto bg-white shadow-xl overflow-y-scroll scrollbar-hide">
					<Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaptkrishi%2Fposts%2Fpfbid02KVzoQeYCm2eykcf53snxXrfUn7J8YPPNdBNt7hvCt7hLz3wBxN12VCdswWoq31HUl&show_text=true" scrolling="yes"  width="335px"
        height="450px" className="rounded-lg" ></Iframe>
				</div>
				</div>
            </SplideSlide>
            <SplideSlide  className="flex items-center justify-center">
                <div className="w-[350px] h-[450px] relative rounded m-auto mt-4 p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl"
                >
				<div className="w-full h-full relative rounded m-auto border-gradient-br-blue-green-gray-900 border-transparent border-solid border-2 shadow-xl overflow-y-scroll scrollbar-hide">
					<Iframe url="https://www.instagram.com/p/CdqrDG9N6ME/embed" width="330px"
        height="450px" className="rounded " ></Iframe>
				</div>
				</div>
            </SplideSlide>
            </Splide>
			</div>
		</div>
	)
}

export default SocialMedia