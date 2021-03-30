import classes from './Hero.module.css';
import Heroillustrations from '../../../assets/Media/images/Heroillustrations.svg';

export default function Hero() {
	return (
		<div className={classes.HeroContainer}>
			<div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
				<div className={classes.LeftHeroBox}>
					<h1 className={classes.HeroText}>
						<span className={classes.Highlight}>Summarize</span> all your <br />
						<span className={classes.Highlight}>video-conversations</span>
					</h1>
					<p className={classes.HeroParagraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<button className={classes.CTAButton}>Start to summarize now</button>
				</div>

				<div className={classes.RightHeroBox}>
					<img className={classes.HeroImage} src={Heroillustrations} alt='' />
				</div>
			</div>
		</div>
	);
}
