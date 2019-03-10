import React from 'react';
import logo from '../../../../images/logo.png'
import './related.css';

function Related(props){
    return(
        <figure className="FigureContainer">
            <img src={ logo } width={250}></img>
        </figure>
    )
}

export default Related;