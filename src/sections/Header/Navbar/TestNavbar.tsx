/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './TestNavbar.module.css';
import { Navbar } from './Navbar';

import Logo from '../../../assets/Media/svg/logo/spoke.svg';

export default function TestNavbar() {
	return (
		<nav className={classes.Nav}>
			<div className={classes.Navbar}>
				<div
					className={[
						classes.Flex,
						classes.ItemsCenter,
						classes.JustifyBetween,
					].join(' ')}
				>
					<div>
						<img src={Logo} alt='logo' className={classes.Logo} />
					</div>

					{/* <!-- Mobile menu button --> */}
					<div className={classes.MobileMenu}>
						<button
							type='button'
							className={classes.MenuButton}
							aria-label='toggle menu'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
									fill='#2E3A59'
								></path>
							</svg>
						</button>
					</div>
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div className='items-center md:flex'>
					<div className='flex flex-col md:flex-row md:mx-6'>
						<a
							className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
							href='#'
						>
							Home
						</a>
						<a
							className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
							href='#'
						>
							Shop
						</a>
						<a
							className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
							href='#'
						>
							Contact
						</a>
						<a
							className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
							href='#'
						>
							About
						</a>
					</div>

					<div className='flex justify-center md:block'>
						<a
							className='relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
							href='#'
						>
							<svg
								className='w-5 h-5'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>

							<span className='absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full'></span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
