import classes from './BookDemo.module.css';
import person from '../../assets/Media/images/person.png';
import arrows from '../../assets/Media/images/arrows.png';

 function BookDemo() {
	return (
		<section className={classes.BookDemoBackground}>
			<div className={classes.Container}>
				<div className={classes.BookDemoContentBox}>
					<div>
						<img className={classes.BookDemoAvatar} src={person} alt='person' />
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
		</section>
	);
}

export default BookDemo