import React from 'react'
import { useTranslation } from 'react-i18next'

//Importing classes
import classes from './Hero.module.css';

//Importing others
import Heroillustrations from '../../../assets/landing/images/Heroillustrations.svg'


function Hero() {
    const { t } = useTranslation()
    return (
        <div className={classes.Container}>
            <div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
                <div className={classes.LeftHeroBox}>
                    <h1 className={classes.Title}>
                        <span className={classes.Highlight} id='AnimateHeroText'>
                            Summarize
						</span>{' '}
						all your <br />
                        <span className={classes.Highlight}>video-conversations</span>
                    </h1>
                    <p className={classes.HeroParagraph}>
                        {t('Save, share and edit all your conversational knowledge in one place.')}
                        <br />
                        {t('For yourself, your team, your clients, or your followers.')}
                    </p>
                    <button className={classes.CTAButton}>{t('Share moments that matter')}</button>
                </div>

                <div className={classes.RightHeroBox}>
                    <img className={classes.HeroImage} src={Heroillustrations} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Hero
