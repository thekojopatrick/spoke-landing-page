/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './WhySpoke.module.css';
import Brightness from '../../assets/Media/svg/Brightness.svg';
import Trophy from '../../assets/Media/svg/Trophy.svg';
import Speedometer from '../../assets/Media/svg/Speedometer.svg';
import OurIntegration from './OurIntegration/OurIntergration';

export default function WhySpoke() {
	return (
		<section>
			<div className={classes.WhySpokeContainer}>
				<div className={classes.ColumnLeft}>
					<OurIntegration />
				</div>
				<div className={classes.ColumnRight}>
					<h1 className={classes.Title}>Why Spoke</h1>
					<div
						className={[
							classes.Content,
							classes.Spaces,
							classes.MarginBottom,
						].join(' ')}
					>
						<div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
							<img src={Brightness} alt='Brightness' />
							<div
								className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
							>
								<h2 className={classes.SubTitle}>Easy to use</h2>
								<p className={classes.Body}>Simple as ABC</p>
							</div>
						</div>
						<div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
							<img src={Trophy} alt='' />
							<div
								className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
							>
								<h2 className={classes.SubTitle}>Quality</h2>
								<p className={classes.Body}>
									Perfect translation / 120 languages
								</p>
							</div>
						</div>
						<div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
							<img src={Speedometer} alt='' />
							<div
								className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
							>
								<h2 className={classes.SubTitle}>Rapidité</h2>
								<p className={classes.Body}>Instantané</p>
							</div>
						</div>
					</div>
					<button className={classes.SignUpButton}>Signup now</button>
				</div>
			</div>
		</section>
	);
}
