import CSS from 'csstype';
import classes from './PricingCard.module.css'

const BgGreen: CSS.Properties = {
	backgroundColor: 'rgba(7,220,169,1)',
};
const BgPurple: CSS.Properties = {
	backgroundColor: 'rgba(157,4,255,1)',
};
const BgYellow: CSS.Properties = {
	backgroundColor: 'rgba(255,198,25,1)',
};
const BgRed: CSS.Properties = {
	backgroundColor: 'rgba(254,27,78,1)',
};

const TextGreen: CSS.Properties = {
	color: 'rgba(7,220,169,1)',
};
const TextPurple: CSS.Properties = {
	color: 'rgba(157,4,255,1)',
};
const TextYellow: CSS.Properties = {
	color: 'rgba(255,198,25,1)',
};
const TextRed: CSS.Properties = {
	color: 'rgba(254,27,78,1)',
};

export default function PricingCard() {
	return (
		<div className={classes.PricingContainer}>
			<div className={classes.CardContainer}>
				<div className={classes.CardContentBox}>
					<h1 className={classes.Title}>
						<span>Light</span>
						<span style={TextRed}>30€</span>
					</h1>
					<p className={classes.Body}>
						Spokez vos conversations <br /> importantes
					</p>
					<button style={BgRed} className={classes.CardButton}>
						Select
					</button>

					<p className={classes.Feature}>
						<span className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						120 langues
					</p>
					<p className={classes.Feature}>
						<span className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Précision à 90%
					</p>
					<p className={classes.Feature}>
						<span className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Stockage de 200 vidéos
					</p>
					<p className={classes.Feature}>
						<span className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						5 heures / mois
					</p>
					<p className={classes.Feature}>
						<span className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Puis 5$ / heure
					</p>
				</div>
			</div>

			<div className={classes.PopularOptionCard}>
				<div className='h-full p-4 flex flex-col relative overflow-hidden'>
					<h2 style={TextYellow} className={classes.PopularOptionTag}>
						Most popular
					</h2>
					<h1 className={classes.Title}>
						<span>Unlocked</span>
						<span style={TextYellow}>70€</span>
					</h1>
					<p className={classes.Body}>Spokez vos conversations</p>
					<button style={BgYellow} className={classes.CardButton}>
						Select
					</button>

					<p className={classes.Feature}>
						<span style={TextYellow} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						120 langues
					</p>
					<p className={classes.Feature}>
						<span style={TextYellow} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Précision à 90%
					</p>
					<p className={classes.Feature}>
						<span style={TextYellow} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Stockage de 200 vidéos
					</p>
					<p className={classes.Feature}>
						<span style={TextYellow} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						5 heures / mois
					</p>
					<p className={classes.Feature}>
						<span style={TextYellow} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Puis 5$ / heure
					</p>
				</div>
			</div>

			<div className={classes.CardContainer}>
				<div className={classes.CardContentBox}>
					<h1 className={classes.Title}>
						<span>Perfect</span>
						<span style={TextPurple}>300€</span>
					</h1>
					<p className={classes.Body}>
						Transcription parfaite. Pour un partage parfait
					</p>
					<button style={BgPurple} className={classes.CardButton}>
						Select
					</button>

					<p className={classes.Feature}>
						<span style={TextPurple} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						120 langues
					</p>
					<p className={classes.Feature}>
						<span style={TextPurple} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Précision à 90%
					</p>
					<p className={classes.Feature}>
						<span style={TextPurple} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Stockage de 200 vidéos
					</p>
					<p className={classes.Feature}>
						<span style={TextPurple} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						5 heures / mois
					</p>
					<p className={classes.Feature}>
						<span style={TextPurple} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Puis 5$ / heure
					</p>
				</div>
			</div>
			<div className={classes.CardContainer}>
				<div className={classes.CardContentBox}>
					<h1 className={classes.Title}>
						<span>Enterprise</span>
						<span style={TextGreen}></span>
					</h1>
					<p className={classes.Body}>Spoke à la maison</p>
					<button style={BgGreen} className={classes.CardButton}>
						Get a qoute
					</button>
					<p className={classes.Feature}>
						<span style={TextGreen} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						20 heures + à 99,5%
					</p>
					<p className={[classes.Feature, classes.MarginBottom].join(' ')}>
						<span style={TextGreen} className={classes.CheckIcon}>
							<svg width='10' height='8' viewBox='0 0 10 8' fill='currentColor'>
								<path d='M9.39997 1.99998L7.99998 0.599976L3.99998 4.59998L1.99998 2.59998L0.599976 3.99998L3.99998 7.39998L9.39997 1.99998Z' />
							</svg>
						</span>
						Hébergement 'On-premise'
					</p>
				</div>
			</div>
		</div>
	);
}
