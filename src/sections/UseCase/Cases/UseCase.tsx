import CSS from 'csstype';
import { ReactNode } from 'react';
import classes from './UseCase.module.css';

const ButtonColor: CSS.Properties = {
	backgroundColor: ' #07DCA9',
};

interface IProps {
	children: ReactNode;
	title: string;
	buttonName:string;
}

export default function UseCase({ title, children,buttonName }: IProps) {
	return (
		<div className={classes.Container}>
			<div>
				<h1 className={classes.Title}>{title}</h1>
				<ul className={[classes.FeatureLists, classes.Spaces].join(' ')}>
					{children}
				</ul>
				<button style={ButtonColor} className={classes.PrimaryButton}>
					{buttonName}
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
				</button>
			</div>
		</div>
	);
}
