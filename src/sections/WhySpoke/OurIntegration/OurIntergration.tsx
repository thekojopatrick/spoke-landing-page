import Zoom from '../../../assets/Media/brands/zoom.png';
import Hangout from '../../../assets/Media/brands/hangouts.png';
import Skype from '../../../assets/Media/brands/skype.png';
import Microsoft from '../../../assets/Media/brands/microsoft.png';
import Cisco from '../../../assets/Media/brands/cisco.png';
import Slack from '../../../assets/Media/brands/slack.png';
import Discord from '../../../assets/Media/brands/discord.png';
import BlueJeans from '../../../assets/Media/brands/bluejeans.png';
import Coursera from '../../../assets/Media/brands/cousera.png';
import Houseparty from '../../../assets/Media/brands/houseparty.png';
import Whereby from '../../../assets/Media/brands/whereby.png';
import Gotomeeting from '../../../assets/Media/brands/gotomeeting.png';

import classes from './OurIntegration.module.css';

export default function OurIntegration() {
	return (
		<div>
			<h1 className={classes.Title}>Our Integration</h1>
			<div className={classes.BrandsContainer}>
				<img src={Zoom} alt='Zoom' className={classes.Image} />
				<img src={Hangout} alt='Hangout' className={classes.Image} />
				<img src={Skype} alt='Skype' className={classes.Image} />
				<img src={Microsoft} alt='Microsoft' className={classes.Image} />
				<img src={Cisco} alt='Cisco' className={classes.Image} />
				<img src={Whereby} alt='Whereby' className={classes.Image} />
				<img src={Coursera} alt='Coursera' className={classes.Image} />
				<img src={Gotomeeting} alt='Gotomeeting' className={classes.Image} />
				<img src={Houseparty} alt='Houseparty' className={classes.Image} />
				<img src={BlueJeans} alt='Bluejeans' className={classes.Image} />
				<img src={Discord} alt='Discord' className={classes.Image} />
				<img src={Slack} alt='Slack' className={classes.Image} />
			</div>
		</div>
	);
}
