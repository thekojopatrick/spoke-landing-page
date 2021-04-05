import React from 'react'

//Importing classes
import classes from './OurIntegration.module.css'

//Importing others
import Zoom from '../../../assets/landing/brands/zoom.png'
import { useTranslation } from 'react-i18next'
import Hangout from '../../../assets/landing/brands/hangouts.png'
import Skype from '../../../assets/landing/brands/skype.png'
import Microsoft from '../../../assets/landing/brands/microsoft.png'
import Cisco from '../../../assets/landing/brands/cisco.png'
import Slack from '../../../assets/landing/brands/slack.png'
import Discord from '../../../assets/landing/brands/discord.png'
import BlueJeans from '../../../assets/landing/brands/bluejeans.png'
import Coursera from '../../../assets/landing/brands/cousera.png'
import Houseparty from '../../../assets/landing/brands/houseparty.png'
import Whereby from '../../../assets/landing/brands/whereby.png'
import Gotomeeting from '../../../assets/landing/brands/gotomeeting.png'


function OurIntegration() {
    const { t } = useTranslation()
    return (
        <div>
            <h1 className={classes.Title}>{t('Spoke wherever your conversations happen')}</h1>
            <div className={classes.BrandsContainer}>
                <img src={Zoom} alt='Zoom' className={classes.Image} />
                <img src={Hangout} alt='Hangout' className={classes.Image} />
                <img src={Skype} alt='Skype' className={classes.Image} />
                <img src={Microsoft} alt='Microsoft' className={classes.Image} />
                <img src={Cisco} alt='Cisco' className={classes.Image} />
                <img src={Whereby} alt='Whereby' className={classes.Image} />
                <img src={Coursera} alt='Coursera' className={classes.Image} />
                <img src={Gotomeeting} alt='Gotomeeting' className={classes.Image} />
                <img src={Houseparty} alt='Houseparty' className={classes.Image} />
                <img src={BlueJeans} alt='Bluejeans' className={classes.Image} />
                <img src={Discord} alt='Discord' className={classes.Image} />
                <img src={Slack} alt='Slack' className={classes.Image} />
            </div>
        </div>
    )
}

export default OurIntegration
