/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './Navbar.module.css';
import Logo from '../../../assets/Media/svg/logo/spoke.svg';

export const Navbar = () => {
	return (
		<div className={classes.Nav}>
			<div className={classes.Navbar}>
				<a
					href='./index.html'
					className='pr-2 lg:pr-8 lg:px-6 focus:outline-none'
				>
					<div className='inline-flex items-center'>
						<img src={Logo} alt='logo' className={classes.Logo} />
					</div>
				</a>
				<nav className={classes.NavLinks}>
					<a
						href='#'
						className={classes.NavLink}
					>
						How it works
					</a>
					<a
						href='#'
						className={classes.NavLink}
					>
						Our Clients
					</a>
					<a
						href='/'
						className={classes.NavLink}
					>
						Use cases
					</a>
					<a
						href='/'
						className={classes.NavLink}
					>
						Why Spoke
					</a>
					<a
						href='/'
						className={classes.NavLink}
					>
						Privacy
					</a>
					<a
						href='/'
						className={classes.NavLink}
					>
						Contact
					</a>
				</nav>
				<a className={classes.LoginButton}>
					Login
				</a>
				<a className={classes.RegisterButton}>
					Create an account
				</a>
			</div>
		</div>
	);
};
