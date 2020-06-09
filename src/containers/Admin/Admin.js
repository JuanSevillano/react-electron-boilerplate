import React from 'react'
import classes from './Admin.module.css'

import { useHistory } from 'react-router-dom'

import Header from '../../components/Navigation/Header'
import Card from '../../components/UI/Card/Card'

const Admin = props => {


    const history = useHistory()
    const path = history.location.pathname

    const cardClickHandler = type => {
        const goTo = path + '/' + type
        history.push(goTo)
    }


    return (
        <div className={classes.Admin}>
            <Header />
            <Card type="generate" clicked={cardClickHandler} title="Generar turno" />
            <Card type="call" clicked={cardClickHandler} title="Llamar turno" />
            <Card type="current" clicked={cardClickHandler} title="Turno Actual" />
            <Card type="save" clicked={cardClickHandler} title="Turno Entregado" />
        </div >
    )
}


export default Admin