import UseCase from './Cases/UseCase';
import Testimonial from './Testimonials/Testimonial';
import CSS from 'csstype';
import classes from './UseCases.module.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

import Person1 from '../../assets/Media/images/person1.png';
import illustration1 from '../../assets/Media/illustrations/GreenCard.svg';
import Person2 from '../../assets/Media/images/person2.png';
import illustration2 from '../../assets/Media/illustrations/RedCard.svg';
import Person3 from '../../assets/Media/images/person3.png';
import illustration3 from '../../assets/Media/illustrations/PurpleCard.svg';


const SquareRed: CSS.Properties = {
	backgroundColor: '#FE1B4E',
};

const SquarePurple: CSS.Properties = {
	backgroundColor: '#9D04FF',
};

const SquareGreen: CSS.Properties = {
	backgroundColor: ' #07DCA9',
};

export default function UseCases() {
	return (
		<section>
			<div className={[classes.Container, classes.Spaces].join(' ')}>
				<div className={classes.UseCaseContainer}>
					<Testimonial
						personPicture={Person1}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration1}
					/>
					<UseCase
						title={'UX Research / Qualitative research'}
						buttonName={'Summarize your UX & Qualitative Research'}
					>
						<li className={classes.Feature}>
							<span style={SquareGreen} className={classes.SquareIcon}></span>
							<p>
								Gain time: directly mark moments of interest
								<span className={classes.Italic}>
									<br />
									(80% of the information in a video-conference does NOT matter)
								</span>
							</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquareGreen} className={classes.SquareIcon}></span>
							Perfect transcription
						</li>
						<li className={classes.Feature}>
							<span style={SquareGreen} className={classes.SquareIcon}></span>
							Never forget anything
						</li>
					</UseCase>
				</div>

				<div className={classes.UseCaseContainer}>
					<Testimonial
						personPicture={Person2}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration2}
					/>
					<UseCase
						title={'Customer Success'}
						buttonName={'Summarize your Customer Success'}
					>
						<li className={classes.Feature}>
							<span style={SquareRed} className={classes.SquareIcon}></span>
							<p>Playing around with your information</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquareRed} className={classes.SquareIcon}></span>
							Create fun videos
						</li>
						<li className={classes.Feature}>
							<span style={SquareRed} className={classes.SquareIcon}></span>
							Remix your video-conferences
						</li>
					</UseCase>
				</div>

				<div className={classes.UseCaseContainer}>
					<Testimonial
						personPicture={Person3}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration3}
					/>
					<UseCase
						title={'Internal Communication'}
						buttonName={'Summarize your Internal Communication'}
					>
						<li className={classes.Feature}>
							<span style={SquarePurple} className={classes.SquareIcon}></span>
							<p>Stop repeating yourself : archive and save it for ever.</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquarePurple} className={classes.SquareIcon}></span>
							Collectif : You’re gonna lose time by editing your videos, but
							everyone in your company will benefit.
						</li>
						<li className={classes.Feature}>
							<span style={SquarePurple} className={classes.SquareIcon}></span>
							Cut the bullshit : 80% of the information in a video-conference
							does NOT matter
						</li>
						<li className={classes.Feature}>
							<span style={SquarePurple} className={classes.SquareIcon}></span>
							Knowledge: Personal library of all your video-conversations.
						</li>
					</UseCase>
				</div>
			</div>
		</section>
	);
}