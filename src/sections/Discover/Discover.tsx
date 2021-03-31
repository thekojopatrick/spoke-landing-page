import classes from './Discover.module.css';
import LoadingCard from './Card';

export default function DiscoverWhy() {
	return (
		<section className={classes.Discover} id='our-clients'>
			<div className={classes.DiscoverContainer}>
				<div className={classes.DiscoverContentBox}>
					<h1 className={classes.Title}>
						Discover why more than 3000+ teams use Spoke
					</h1>
					<div className={[classes.Cards,classes.Space].join(' ')}>
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
					</div>
					<div className={[classes.Cards,classes.Space].join(' ')}>
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
					</div>
				</div>
			</div>
		</section>
	);
}
