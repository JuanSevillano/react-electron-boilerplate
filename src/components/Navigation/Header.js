import React from 'react';
import { useHistory } from 'react-router-dom'

import classes from './Header.module.css'


const Header = props => {

    const history = useHistory()
    const backHandler = event => history.push('/')
    const isTurnerScreen = !history.location.pathname.includes('turner') ?
        <span onClick={backHandler}> Back </span>
        : null

    return (
        <header className={classes.App_header}>
            {isTurnerScreen}
            <span className={classes.Dragger}>  </span>
            {
                isTurnerScreen != null ? (
                    <section id="window_corner_buttons">
                        <span>-</span>
                        <span>x</span>
                    </section>)
                    : null
            }

        </header>
    )
}

export default Header;
