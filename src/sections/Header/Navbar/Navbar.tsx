import React from 'react'

//Importing classes
import classes from './Navbar.module.css';

//Importing others
import Logo from '../../../assets/landing/svg/logo/spoke.svg';


function Navbar() {
    return (
        <nav className={classes.Nav}>
            <div className={classes.Navbar}>
                <div>
                    <a href='/' className='pr-2 lg:pr-8 lg:px-6 focus:outline-none'>
                        <img src={Logo} alt='logo' className={classes.Logo} />
                    </a>
                </div>

                {/* <!-- Mobile menu button --> */}
                <div className={classes.HamburgerMenu}>
                    <button
                        type='button'
                        className={classes.HamburgerMenuButton}
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
                                d='M21 19H3V17H21V19ZM21 15H3V13H21V15ZM21 11H3V9H21V11ZM21 7H3V5H21V7Z'
                                fill='#2E3A59'
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={classes.NavLinkGroup}>
                    <div className={classes.NavLinks}>
                        <a href='#how-it-works' className={classes.NavLink}>
                            How it works
						</a>
                        <a href='#our-clients' className={classes.NavLink}>
                            Our Clients
						</a>
                        <a href='#use-cases' className={classes.NavLink}>
                            Use cases
						</a>
                        <a href='#why-spoke' className={classes.NavLink}>
                            Why Spoke
						</a>
                        <a href='#privacy' className={classes.NavLink}>
                            Privacy
						</a>
                        <a href='#contact-us' className={classes.NavLink}>
                            Contact
						</a>
                    </div>
                    <div className={classes.NavButtonsGroup}>
                        <a className={classes.LoginButton}>Login</a>
                        <a className={classes.RegisterButton}>Create an account</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar