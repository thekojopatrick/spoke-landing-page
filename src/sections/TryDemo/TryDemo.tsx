import React from 'react'
import { useTranslation } from 'react-i18next'

//Importing classes
import classes from './TryDemo.module.css';

//Importing others
import ArrowDown from '../../assets/landing/images/arrow-down.png';


function TryDemo() {
    const { t } = useTranslation()
    return (
        <section className={classes.Background} id='how-it-works'>
            <div className={classes.Container}>
                <div className={classes.TopContentBox}>
                    <div className={classes.HeadlineContainer}>
                        <h1 className={classes.HeadlineTitle}>Try it now</h1>
                        <span>
                            <img className={classes.ArrowIcon} src={ArrowDown} alt='ArrowDown' />
                        </span>
                    </div>
                    <p className={classes.HeadlineParagraph}>
                        {t('Highlight your conversations to create impactful summaries in a few seconds.')}
                        <br />
                        {t('Share them instantly, with a unique link.')}
                    </p>
                </div>
                <div className={classes.DemoCardContainer}>
                    <div className={classes.DemoCard}></div>
                </div>
            </div>
        </section>
    );
}

export default TryDemo
