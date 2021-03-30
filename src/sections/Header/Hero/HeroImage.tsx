import classes from './Hero.module.css';
import BubbleGreen from '../../../assets/Media/svg/arrows/bubble-green.svg';
import BubbleRed from '../../../assets/Media/svg/arrows/bubble-red.svg';
import BubblePurple from '../../../assets/Media/svg/arrows/bubble-purple.svg';
import VideoCall from '../../../assets/Media/images/VideoCall.png';
import ArrowPointDown from '../../../assets/Media/images/VideoCall.png';
import ArrowPointRight from '../../../assets/Media/images/VideoCall.png';
import ArrowPointLeft from '../../../assets/Media/images/VideoCall.png';
import SocialTwitter from '../../../assets/Media/images/VideoCall.png';
import SocialLinkedin from '../../../assets/Media/images/VideoCall.png';
import SocialChats from '../../../assets/Media/images/VideoCall.png';

export default function HeroImage() {
	return (
		<div className={classes.RightHeroBox}>
			<div className={classes.Relative}>
				<div className={classes.HeroImageBackground}>
					<div className='h-64 w-64 place-self-start  flex items-center justify-center bg-gradient-to-r from-cyan-400 to-light-blue-500 text-center'>
						<img className={classes.HeroImage} src={BubbleRed} alt='' />
					</div>
					<div className=' h-64 w-24 place-self-center  flex items-center justify-center bg-gradient-to-r from-cyan-400 to-light-blue-500 text-center'>
						<img className={classes.HeroImage} src={BubblePurple} alt='' />
					</div>
					<div className='h-64  bg-gradient-to-r from-cyan-400 to-light-blue-500  flex items-center justify-center text-center'>
						<img className={classes.HeroImage} src={BubbleGreen} alt='' />
					</div>
					<div className='h-64 w-64 place-self-end bg-gradient-to-r from-cyan-400 to-light-blue-500  flex items-center justify-center text-center'>
						4
					</div>
				</div>
				<div className='grid grid-row-2 grid-flow-col gap-4 justify-items-stretch relative'>
					<div className='h-96 w-full place-self-end row-span-3 flex items-center justify-center bg-black text-center text-white'>
						1
					</div>
					<div className=' h-64 w-64 place-self-center flex items-center justify-center bg-black text-center text-white'>
						2
					</div>
					<div className=' h-64 w-64 place-self-center flex items-center justify-center bg-black text-center text-white'>
						3
					</div>
				</div>
			</div>
		</div>
	);
}
