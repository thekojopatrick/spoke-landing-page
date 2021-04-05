import React from 'react'

//Importing components
import LoadingCard from './Card';

//Importing classes
import classes from './Discover.module.css';


function Discover() {
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

export default Discover