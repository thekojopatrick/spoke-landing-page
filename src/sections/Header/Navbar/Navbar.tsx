/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './Navbar.module.css';
import Logo from '../../../assets/Media/svg/logo/spoke.svg';

export const Navbar = () => {
	return (
		<nav className={classes.Nav}>
			<div className={classes.NavbarContainer}>
				<div className={classes.Navbar}>
					<div>
						<a className='' href='/'>
							<img src={Logo} alt='logo' className='h-8' />
						</a>
					</div>

					{/* <div className={classes.Flex}>
						<button
							type='button'
							className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
							aria-label='toggle menu'
						>
							<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
								<path
									fill-rule='evenodd'
									d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
								></path>
							</svg>
						</button>
					</div> */}
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div className={[classes.Flex, classes.ItemsCenter].join('')}>
					<div className={classes.NavLinks}>
						<a className={classes.NavLink} href='#'>
							Home
						</a>
						<a className={classes.NavLink} href='#'>
							Shop
						</a>
						<a className={classes.NavLink} href='#'>
							Contact
						</a>
						<a className={classes.NavLink} href='#'>
							About
						</a>
					</div>

					<div
						className={[
							classes.Flex,
							classes.JustifyCenter,
							classes.Block,
						].join(' ')}
					>
						<a className={classes.LoginButton}>Login</a>
						<button className={classes.RegisterButton}>
							Create an account
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
