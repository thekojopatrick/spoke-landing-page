import React from 'react'

//Importing components
import PricingCard from './PricingCard/PricingCard';

//Importing classes
import classes from './Pricing.module.css';


function Pricing() {
    return (
        <section id='pricing'>
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h1 className={classes.Title}>Plans & Pricing</h1>

                    <div className={classes.ToggleOptionContainer}>
                        <div
                            className={[
                                classes.Flex,
                                classes.JustifyCenter,
                                classes.ItemsCenter,
                            ].join(' ')}
                        >
                            <label className={classes.PricingOptionText}>Monthly</label>
                            <div
                                className={[
                                    classes.FormSwitch,
                                    classes.InlineBlock,
                                    classes.AlignMiddle,
                                ].join(' ')}
                            >
                                <input
                                    type='checkbox'
                                    name='1'
                                    id='1'
                                    className={classes.FormSwitchCheckbox}
                                />
                                <label className={classes.FormSwitchLabel} htmlFor='1'></label>
                            </div>
                            <label className={classes.PricingOptionText} htmlFor='1'>
                                Annual
							</label>
                        </div>
                        <div
                            className={[
                                classes.Flex,
                                classes.JustifyCenter,
                                classes.ItemsCenter,
                            ].join(' ')}
                        >
                            <p className={classes.SavedText}>Save 17%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <PricingCard />
                </div>
            </div>
        </section>
    )
}

export default Pricing