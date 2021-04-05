import React from 'react';


//Importing classes
import classes from './UseCase.module.css';

//Importing others
import styled from 'styled-components';

interface ButtonProps {
	color: string;
}

const Button = styled.button<ButtonProps>`
	background-color: ${props => props.color};
`;


function UseCase(props: {
	title: string;
	children: any;
	buttonName: string;
	color: string;
}) {
	return (
		<div className={classes.Container}>
			<div>
				<h1 className={classes.Title}>{props.title}</h1>
				<ul className={[classes.FeatureLists, classes.Spaces].join(' ')}>
					{props.children}
				</ul>
				<Button color={props.color} className={classes.PrimaryButton}>
					{props.buttonName}
					<span>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							className={classes.MarginLeft}
						>
							<path
								d='M5.99719 11.3L5.13719 10.38L9.15719 6.64H0.397188V5.28H9.15719L5.13719 1.54L5.99719 0.619999L11.4372 5.92V6L5.99719 11.3Z'
								fill='white'
							/>
						</svg>
					</span>
				</Button>
			</div>
		</div>
	);
}

export default UseCase;
