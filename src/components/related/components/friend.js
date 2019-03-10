import React from 'react';
import './friend.css';


function Friend(props){
    return(
        <div className="Friend">
            <img className="FriendPhoto" src= {props.img}></img>
            <p className="FriendNamie">{props.name}</p>
        </div>
    )
}

export default Friend;