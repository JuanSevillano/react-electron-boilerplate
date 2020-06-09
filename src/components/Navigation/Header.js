import React from 'react';
import { useHistory } from 'react-router-dom'

import classes from './Header.module.css'


const Header = props => {

    const history = useHistory()
    const backHandler = event => history.goBack()

    return (
        <header className={classes.App_header}>
            <span onClick={backHandler}> Back </span>
            <span className={classes.Dragger}>  </span>
            <section id="window_corner_buttons" className={classes.window_corner_buttons}>
                <span>-</span>
                <span>x</span>
            </section>
        </header>
    )
}

export default Header
