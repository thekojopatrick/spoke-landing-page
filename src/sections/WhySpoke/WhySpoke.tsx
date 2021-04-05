import React from 'react'
import { useTranslation } from 'react-i18next'

//Importing components
import OurIntegration from './OurIntegration/OurIntergration'

//Importing classes
import classes from './WhySpoke.module.css'

//Importing others
import Brightness from '../../assets/landing/svg/Brightness.svg'
import Trophy from '../../assets/landing/svg/Trophy.svg'
import Speedometer from '../../assets/landing/svg/Speedometer.svg'


function WhySpoke() {
    const { t } = useTranslation()
    return (
        <section>
            <div className={classes.Container}>
                <div className={classes.ColumnLeft}>
                    <OurIntegration />
                </div>
                <div className={classes.ColumnRight}>
                    <h1 className={classes.Title}>Why Spoke</h1>
                    <div
                        className={[
                            classes.Content,
                            classes.Spaces,
                            classes.MarginBottom,
                        ].join(' ')}
                    >
                        <div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
                            <img src={Brightness} alt='Brightness' />
                            <div
                                className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
                            >
                                <h2 className={classes.SubTitle}>
                                    {t('Ease of use')}
                                </h2>
                                <p className={classes.Body}>
                                    {t('Record your conversations directly with Spoke. From your favorite video-conference tool. Or upload them in any file format.')}
                                </p>
                            </div>
                        </div>
                        <div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
                            <img src={Trophy} alt='' />
                            <div
                                className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
                            >
                                <h2 className={classes.SubTitle}>
                                    {t('Quality')}
                                </h2>
                                <p className={classes.Body}>
                                    {t('Our AI speech engine is trained on 50,000+ hours of human-transcribed content across a diversity of topics and accents. Want more? We offer human proof-read transcription in less than 24 hours.')}
                                </p>
                            </div>
                        </div>
                        <div className={[classes.Flex, classes.ItemsCenter].join(' ')}>
                            <img src={Speedometer} alt='' />
                            <div
                                className={[classes.FlexGrow, classes.PaddingLeft].join(' ')}
                            >
                                <h2 className={classes.SubTitle}>
                                    {t('Easy & fast')}
                                </h2>
                                <p className={classes.Body}>
                                    {t('Focus on your conversations') + ':' + t(' editing videos with Spoke is 12x faster than video editing with a timeline.')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className={classes.SignUpButton}>Signup now</button>
                </div>
            </div>
        </section>
    )
}

export default WhySpoke
