import React from 'react'

//Importing classes
import classes from './BookDemo.module.css';

//Importing others
import person from '../../assets/landing/images/person.png'
import arrows from '../../assets/landing/images/arrows.png'


function BookDemo() {
    return (
			<section className={classes.BookDemoBackground} id='contact-us'>
				<div className={classes.Container}>
					<div className={classes.BookDemoContentBox}>
						<div>
							<img
								className={classes.BookDemoAvatar}
								src={person}
								alt='person'
							/>
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