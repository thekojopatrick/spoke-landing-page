import UseCase from './Cases/UseCase';
import Testimonial from './Testimonials/Testimonial';
/* eslint-disable jsx-a11y/anchor-is-valid */

import Person1 from '../../assets/Media/images/person1.png';
import illustration1 from '../../assets/Media/illustrations/GreenCard.svg';
import Person2 from '../../assets/Media/images/person2.png';
import illustration2 from '../../assets/Media/illustrations/RedCard.svg';
import Person3 from '../../assets/Media/images/person3.png';
import illustration3 from '../../assets/Media/illustrations/PurpleCard.svg';

export default function UseCases() {
	return (
		<section className='text-gray-600 body-font overflow-hidden'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
					<Testimonial
						personPicture={Person1}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration1}
					/>
					<UseCase />
				</div>
			</div>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
					<Testimonial
						personPicture={Person2}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration2}
					/>
					<UseCase />
				</div>
			</div>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap items-center justify-between'>
					<Testimonial
						personPicture={Person3}
						personName={'John Doe ~ Big Corp'}
						illustration={illustration3}
					/>
					<UseCase />
				</div>
			</div>
		</section>
	);
}
