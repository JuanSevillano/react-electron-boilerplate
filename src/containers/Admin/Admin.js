import React from 'react'
import classes from './Admin.module.css'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/actionTypes'


import Card from '../../components/UI/Card/Card'

const Admin = props => {


    const cardsClickHandler = e => {
        console.log('Debería de redireccionar a otro lado')
    }
    
    return (
        <div className={classes.Admin}>
           <Card clicked={cardsClickHandler} title="Generar turno" />
           <Card clicked={cardsClickHandler} title="Llamar turno" />
           <Card clicked={cardsClickHandler} title="Turno Actual" />
           <Card clicked={cardsClickHandler} title="Turno Entregado" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderAdded: number => dispatch(actions.GENERATE_TURN)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin)