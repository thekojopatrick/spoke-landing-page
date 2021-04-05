import React from 'react';

//Importing classes
import classes from './Testimonial.module.css';

//Importing others
import CSS from 'csstype';

const PersonName: CSS.Properties = {
	fontFamily: 'Source Sans Pro',
	fontStyle: 'italic',
	fontSize: '16px',
	lineHeight: '24px',
	color: '#07DCA9',
};

function Testimonial(props: {
	illustration: string;
	personPicture: string;
	personName: string;
}) {
	return (
		<div className={classes.Card}>
			<div className={classes.Relative}>
				<div className={classes.IllustrationContainer}>
					<img
						src={props.illustration}
						alt='illustration'
						className={classes.Illustration}
					/>
				</div>
				<div className={classes.CardImageContainer}>
					<img
						className={classes.CardImage}
						src={props.personPicture}
						alt='avatar'
					/>
					<button className={classes.CardButton}>
						<span className={classes.PlayIcon}>
							<svg
								width='10'
								height='12'
								viewBox='0 0 10 12'
								fill='currentColor'
							>
								<path d='M0 10.2338V1.76619C0 0.988896 0.847972 0.508783 1.5145 0.908698L8.57084 5.14251C9.21818 5.53091 9.21818 6.46909 8.57084 6.85749L1.5145 11.0913C0.847971 11.4912 0 11.0111 0 10.2338Z' />
							</svg>
						</span>
						Play testimonials
					</button>
					<div className={classes.CardContentContainer}>
						<p className={classes.Paragraph}>
							Lorem ipsum <span className={classes.Highlight}>dolor sit</span>{' '}
							amet, consectetur adipiscing elit,
							<span className={classes.Highlight}> sed do</span> eiusmod tempor{' '}
							<span className={classes.Highlight}>
								incididunt ut labore et dolore magna aliqua.
							</span>{' '}
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
							<span className={classes.Highlight}>
								nisi ut aliquip ex ea commodo consequat.
							</span>
						</p>
						<span style={PersonName}>{props.personName}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
