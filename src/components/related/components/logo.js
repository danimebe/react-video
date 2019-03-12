import React from 'react';
import logo from '../../../../images/logo.png';
import './logo.css';
function Logo(props){
    return(
        <figure className="LogoContainer">
            <img src={logo}></img>
        </figure>
    )
}

export default Logo;