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

import classes from "./OurIntegration.module.css";

export default function OurIntegration() {
	return (
		<div>
			<h1 className={classes.Title}>
				Our Integration
			</h1>
			<div className={classes.BrandsContainer}>
				<img src={Zoom} alt='Zoom' />
				<img src={Hangout} alt='Hangout' />
				<img src={Skype} alt='Skype' />
				<img src={Microsoft} alt='Microsoft' />
				<img src={Cisco} alt='Cisco' />
				<img src={Whereby} alt='Whereby' />
				<img src={Coursera} alt='Coursera' />
				<img src={Gotomeeting} alt='Gotomeeting' />
				<img src={Houseparty} alt='Houseparty' />
				<img src={BlueJeans} alt='Bluejeans' />
				<img src={Discord} alt='Discord' />
				<img src={Slack} alt='Slack' />
			</div>
		</div>
	);
}
