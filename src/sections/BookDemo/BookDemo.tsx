import classes from './BookDemo.module.css';
import person from '../../assets/Media/images/person.png'
import arrows from '../../assets/Media/images/arrows.png'

export default function BookDemo() {
	return (
		<div className={classes.BookDemoBackground} id='contact-us'>
			<div
				className={[
					classes.Flex,
					classes.ItemsCenter,
					classes.JustifyCenter,
					classes.WidthFull,
					classes.HeightFull,
				].join(' ')}
			>
				<div className={[classes.TextCenter,classes.MarginBottom].join(' ')}>
					<div className={classes.BookDemoContentBox}>
						<div className={classes.BookDemoAvatar}>
							<img src={person} alt='person' />
						</div>
						<div className={classes.BookDemoParagraphBox}>
							<p className={classes.BookDemoParagraph}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<button className={classes.BookDemoButton}>
								Book a demo with Julien
							</button>
						</div>
					</div>
					<img className={classes.BookDemoArrows} src={arrows} alt='arrows' />
				</div>
			</div>
		</div>
	);
}
