import classes from './Hero.module.css';
import Heroillustrations from '../../../assets/Media/images/Heroillustrations.svg';



export default function Hero() {
	//if (typeof window !== 'undefined') {
		// browser code

	// 	window.addEventListener('DOMContentLoaded',  ()=> {
	// 		// array with texts to type in typewriter
	// 		var dataText = ['Record', 'Transcribe', 'Summarize', 'Share'];

	// 		// type one text in the typwriter
	// 		// keeps calling itself until the text is finished
	// 		function typeWriter(
	// 			text: string,
	// 			i: number,
	// 			fnCallback: { (): void; (...args: any[]): void }
	// 		) {
	// 			// chekc if text isn't finished yet
	// 			if (i < text.length) {
	// 				// add next character to h1
	// 				document.getElementById('AnimateHeroText').innerHTML =
	// 					text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

	// 				// wait for a while and call this function again for next character
	// 				setTimeout(function () {
	// 					typeWriter(text, i + 1, fnCallback);
	// 				}, 100);
	// 			}
	// 			// text finished, call callback if there is a callback function
	// 			else if (typeof fnCallback == 'function') {
	// 				// call callback after timeout
	// 				setTimeout(fnCallback, 700);
	// 			}
	// 		}
	// 		// start a typewriter animation for a text in the dataText array
	// 		function StartTextAnimation(i: number) {
	// 			if (typeof dataText[i] == 'undefined') {
	// 				setTimeout(function () {
	// 					StartTextAnimation(0);
	// 				}, 20000);
	// 			}
	// 			// check if dataText[i] exists
	// 			if (i < dataText[i].length) {
	// 				// text exists! start typewriter animation
	// 				typeWriter(dataText[i], 0, function () {
	// 					// after callback (and whole text has been animated), start next text
	// 					StartTextAnimation(i + 1);
	// 				});
	// 			}
	// 		}
	// 		// start the text animation
	// 		StartTextAnimation(0);
	// 	});
	// }

	return (
		<div className={classes.HeroContainer}>
			<div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
				<div className={classes.LeftHeroBox}>
					<h1 className={classes.HeroText}>
						<span className={classes.Highlight} id='AnimateHeroText'>
							Summarize
						</span>{' '}
						all your <br />
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
