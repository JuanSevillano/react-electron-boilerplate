import React from 'react';
import classes from './Card.module.css'

const Card = props => {
    
    const clickBinder = e => props.clicked(props.type)
    
    return (
        <div onClick={clickBinder} className={classes.Card}>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Card;
