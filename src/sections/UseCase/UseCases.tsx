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

const SquareIcon: CSS.Properties = {
	width: '8px',
	height: '8px',
	backgroundColor: '#07DCA9',
	marginRight: '4px',
};

export default function UseCases() {
	return (
		<section className='text-gray-600 body-font overflow-hidden'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
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
							<span style={SquareIcon}></span>
							<p>
								Gain time: directly mark moments of interest
								<span className={classes.Italic}>
									<br />
									(80% of the information in a video-conference does NOT matter)
								</span>
							</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Perfect transcription
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Never forget anything
						</li>
					</UseCase>
				</div>
			</div>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
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
							<span style={SquareIcon}></span>
							<p>Playing around with your information</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Create fun videos
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Remix your video-conferences
						</li>
					</UseCase>
				</div>
			</div>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
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
							<span style={SquareIcon}></span>
							<p>Stop repeating yourself : archive and save it for ever.</p>
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Collectif : You’re gonna lose time by editing your videos, but
							everyone in your company will benefit.
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Cut the bullshit : 80% of the information in a video-conference
							does NOT matter
						</li>
						<li className={classes.Feature}>
							<span style={SquareIcon}></span>
							Knowledge: Personal library of all your video-conversations.
						</li>
					</UseCase>
				</div>
			</div>
		</section>
	);
}
