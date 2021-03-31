import PricingCard from './PricingCard/PricingCard';
import classes from './Pricing.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Pricing() {
	return (
		<section className='text-gray-600 body-font overflow-hidden'>
			<div className={classes.Container}>
				<div className={classes.Header}>
					<h1 className={classes.Title}>
						Plans & Pricing
					</h1>

					<div className={classes.ToggleOptionContainer}>
						<div className={[classes.Flex,classes.JustifyCenter,classes.ItemsCenter].join(' ')}>
							<p className={classes.PricingOptionText}>
								Monthly
							</p>
							<div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
								<input
									type='checkbox'
									name='toggle'
									id='toggle'
									className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white p-3 appearance-none cursor-pointer'
								/>
								<label
									htmlFor='toggle'
									className='toggle-label block overflow-hidden h-6 rounded-full bg-black cursor-pointer'
								></label>
							</div>
						</div>
						<div className={[classes.Flex,classes.JustifyCenter,classes.ItemsCenter].join(' ')}>
							<p className={classes.PricingOptionText}>Annual</p>
							<a className={classes.SavedText}>
								Save 17%
							</a>
						</div>
					</div>
				</div>
				<div>
					<PricingCard />
				</div>
			</div>
		</section>
	);
}
