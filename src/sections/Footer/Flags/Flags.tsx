import classes from './Flag.module.css';

interface IProps {
	flag: string;
}

export default function Flags({ flag }: IProps) {
	return (
		<div className={classes.FlagBox}>
			<img src={flag} alt='' className={classes.Flag} />
		</div>
	);
}
