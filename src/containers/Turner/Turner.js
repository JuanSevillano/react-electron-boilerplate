import React from 'react';
import classes from './Turner.module.css'

const Turner = () => {
    return (
        <div className={classes.Turner}>
            <section>
                <h2>En preparación</h2>
                <ul>
                    <li>002</li>
                    <li>003</li>
                </ul>
            </section>
            <section>
                <h2>En entrega</h2>
                <ul>
                    <li>000</li>
                    <li>001</li>
                </ul>
            </section>
        </div>
    );
}

export default Turner;
