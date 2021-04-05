import React from 'react'

//Importing classes
import classes from './Flag.module.css';


export default function Flags(props: { flag: string }) {
    return (
        <div className={classes.FlagBox}>
            <img src={props.flag} alt='' className={classes.Flag} />
        </div>
    );
}
