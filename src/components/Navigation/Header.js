import React from 'react';
import { useHistory } from 'react-router-dom'

import classes from './Header.module.css'


const Header = () => {

    const history = useHistory()
    const backHandler = event => history.push('/')

    return (
        <header className={classes.App_header}>
            <span onClick={backHandler}> Back </span>
            <span className={classes.Dragger}>  </span>
            <section>
                <span>-</span>
                <span>X</span>
            </section>
        </header>
    )
}

export default Header;
