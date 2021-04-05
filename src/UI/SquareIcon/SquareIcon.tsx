import React from 'react';

//Importing classes
import classes from './SquareIcon.module.css'

//Importing others
import styled from 'styled-components';


interface IconProps {
	color: string;
}

const Square = styled.button<IconProps>`
	background-color: ${props => props.color};
`;

export function SquareIcon(props: { color: string }) {
	return (
		<span className={classes.SquareIcon}>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='32' height='32' fill='white' />
				<rect x='12' y='12' width='8' height='8' fill={props.color} />
			</svg>
		</span>
	);
}

export default SquareIcon;
