import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Home.module.css'

const ipcRenderer = window.ipcRenderer

const Home = props => {
    const link = {
        pathname: "/admin",
        state: { fromHome: true }
    }

    // When is secondScreen it receives the url to be loaded 
    ipcRenderer.on('onLocation', (event, { url }) => { props.history.push(url) })

    return (
        <div className={classes.Home}>
            <Link to={link} className={classes.Link}>
                <h1> Iniciar <br /> Turnero</h1>
                <div className={classes.ldsripple}><div></div><div></div></div>
            </Link>
        </div>
    )
}

export default Home
