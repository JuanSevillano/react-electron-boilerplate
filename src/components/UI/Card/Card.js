import React from 'react';
import classes from './Card.module.css'

const Card = props => {
    return (
        <div onClick={props.clicked} className={classes.Card}>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Card;
