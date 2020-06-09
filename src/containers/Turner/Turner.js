import React from 'react';
import classes from './Turner.module.css'

const Turner = () => {

    // const waitingList = props.map.something 

    return (
        <div className={classes.Turner}>
            <section className={classes.Column}>
                <h2>En preparación</h2>
                <ul className={classes.List}>
                    <li>002</li>
                    <li>003</li>
                </ul >
            </section>
            <section className={classes.Column}>
                <h2>En entrega</h2>
                <ul className={classes.List}>
                    <li>000</li>
                    <li>001</li>
                </ul >
            </section>
        </div>
    );
}

export default Turner;
