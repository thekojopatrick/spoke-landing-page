import classes from './Discover.module.css';
import LoadingCard from './Card';

export default function DiscoverWhy() {
	return (
		<section className={classes.Discover}>
			<div className={classes.Container}>
				<h1 className={classes.Title}>
					Discover why more than 3000+ teams use Spoke
				</h1>
				<div className={classes.ContentBox}>
					<div className={[classes.Cards].join(' ')}>
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<p className={classes.Display}></p>
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<div className={classes.Display}>
							<LoadingCard />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
