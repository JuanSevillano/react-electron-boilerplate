import React, { useState, useEffect } from 'react'
import classes from './Option.module.css'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/actions'

import Header from '../Navigation/Header'

import Generator from '../Generator/Generator'
import Current from '../Current/Current'
import Caller from '../Caller/Caller'
import Save from '../Save/Save'


const Option = props => {

    const { type } = props.match.params

    const [currentOption, setCurrentOption] = useState()

    const checkOption = () => {
        switch (type) {
            case 'generate':
                props.generateTurn()
                console.log(props.turn)
                setCurrentOption(<Generator turn={props.turn} />)
                break
            case 'call':
                setCurrentOption(<Caller />)
                break
            case 'current':
                setCurrentOption(<Current turn={props.turn} />)
                break
            case 'save':
                setCurrentOption(<Save />)
                break
            default:
                setCurrentOption(<Generator />)
                break
        }
    }

    useEffect(() => { checkOption() }, [])


    return (
        <div className={classes.Option}>
            <Header />
            {currentOption}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.turns,
        turn: state.currentTurn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        generateTurn: () => dispatch(actions.generateTurn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
