import React from 'react';
import { useTranslation } from 'react-i18next';

//Importing components
import UseCase from './Cases/UseCase';
import Testimonial from './Testimonials/Testimonial';
import SquareIcon from '../../UI/SquareIcon/SquareIcon';

//Importing classes
import classes from './UseCases.module.css';

//Importing others
import Person1 from '../../assets/landing/images/person1.png';
import illustration1 from '../../assets/landing/illustrations/GreenCard.svg';
import Person2 from '../../assets/landing/images/person2.png';
import illustration2 from '../../assets/landing/illustrations/RedCard.svg';
import Person3 from '../../assets/landing/images/person3.png';
import illustration3 from '../../assets/landing/illustrations/PurpleCard.svg';

const colorRed = '#FE1B4E';
const colorGreen = '#07DCA9';
const colorPurple = '#9D04FF';

function UseCases() {
	const { t } = useTranslation();
	return (
		<section>
			<div className={[classes.Container].join(' ')}>
				<div className={classes.UseCaseContainer}>
					<Testimonial
						personPicture={Person1}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration1}
					/>
					<UseCase
						color={colorGreen}
						title={'UX Research / Qualitative research'}
						buttonName={'Cut the fluff. Focus on your conversations'}
					>
						<li className={classes.Feature}>
							<SquareIcon color={colorGreen} />
							{t('Focus on your conversations') +
								':' +
								t(' mark moments of interest in one click, live')}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorGreen} />
							{t(
								'Get a 99% accurate transcript directly when starting your conversation'
							)}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorGreen} />
							{t('Impress your clients easily') +
								':' +
								t(' mashup 10 different interviews into one bite-sized video')}
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
						color={colorRed}
						title={'Customer Success'}
						buttonName={'Store all your user conversations in one click'}
					>
						<li className={classes.Feature}>
							<SquareIcon color={colorRed} />
							{t('Engage your team by forwarding user testimonials in seconds')}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorRed} />
							{t('Search through hours of recordings with keywords')}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorRed} />
							{t(
								'Edit themed videos regrouping specific feedback for thoughtful dive-ins'
							)}
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
						color={colorPurple}
						title={'Internal Communication'}
						buttonName={'Internal Communication as smooth as butter'}
					>
						<li className={classes.Feature}>
							<SquareIcon color={colorPurple} />
							{t(
								'What if you could stop repeating yourself and send watchable meeting minutes instantly?'
							)}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorPurple} />
							{t(
								'Store all your conversationnal knowledge in a shared team library'
							)}
						</li>
						<li className={classes.Feature}>
							<SquareIcon color={colorPurple} />
							{t("Let's be honest") +
								':' +
								t(
									'80% of a meeting does not matter. Have your team focus on their core job by sending meeting by-standers video minutes.'
								)}
						</li>
					</UseCase>
				</div>
			</div>
		</section>
	);
}

export default UseCases;
