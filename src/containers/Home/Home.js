import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Home.module.css'

const Home = props => {
    const link = {
        pathname: "/turner",
        state: { fromHome: true }
    }

    return (
        <div className={classes.Home}>
            <Link to={link}>
                <h1> Generar un turno</h1>
                <div className={classes.ldsripple}><div></div><div></div></div>
            </Link>
        </div>
    );
}

export default Home;
