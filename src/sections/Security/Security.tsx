import classes from './Security.module.css';

import Lock from '../../assets/Media/svg/Lock.svg';
import Amazon from '../../assets/Media/images/aws.png';
import Google from '../../assets/Media/images/google.png';

export default function Security() {
	return (
		<section className={classes.Security}>
			<div className={classes.SecurityContainer}>
				<img className={classes.SecurityImage} alt='hero' src={Lock} />
				<div className={classes.SecurityImage}>
					<h1 className={classes.Title}>Privacy</h1>
					<p className={classes.Body}>
						Encrypted on AWS, or encrypted on Google. We can also set you up{' '}
						<br />
						with running it on your servers / computer.
					</p>
					<div className={[classes.Flex, classes.JustifyCenter].join(' ')}>
						<img className={classes.Brand} alt='amazon' src={Amazon} />
						<img
							className={[classes.Brand, classes.MarginLeft].join(' ')}
							alt='google'
							src={Google}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
