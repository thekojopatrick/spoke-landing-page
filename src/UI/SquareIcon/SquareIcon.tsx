import React from 'react';

//Importing classes
import classes from './SquareIcon.module.css';

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
