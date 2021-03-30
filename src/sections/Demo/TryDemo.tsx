import classes from './TryDemo.module.css';
import ArrowDown from '../../assets/Media/images/arrow-down.png';

export default function TryDemo() {
	return (
		<section className={classes.Background}>
			<div className={classes.Container}>
				<div className={classes.TopContentBox}>
					<div className={classes.HeadlineContainer}>
						<h1 className={classes.HeadlineTitle}>Try it now</h1>
						<span>
							<img src={ArrowDown} alt='ArrowDown' />
						</span>
					</div>
					<p className={classes.HeadlineParagraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className={classes.DemoCardContainer}>
					<div className={classes.DemoCard}></div>
				</div>
			</div>
		</section>
	);
}
