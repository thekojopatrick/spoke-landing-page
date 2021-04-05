import React from 'react'

//Importing classes
import classes from './Security.module.css';

//Importing others
import Lock from '../../assets/landing/svg/Lock.svg';
import Amazon from '../../assets/landing/images/aws.png';
import Google from '../../assets/landing/images/google.png';


function Security() {
    return (
        <section id='privacy'>
            <div className={classes.Container}>
                <img className={classes.SecurityImage} alt='lock' src={Lock} />
                <div className={classes.SecurityContentBox}>
                    <h1 className={classes.Title}>Privacy</h1>
                    <p className={classes.Body}>
                        Encrypted on AWS, or encrypted on Google. We can also set you up{' '}
                        <br />
						with running it on your servers / computer.
					</p>
                    <div className={[classes.Flex, classes.JustifyCenter].join(' ')}>
                        <img className={classes.Brand} alt='amazon' src={Amazon} />
                        <img
                            className={[classes.Brand, classes.MarginLeft].join(' ')}
                            alt='google'
                            src={Google}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Security