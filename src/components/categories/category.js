import React from 'react';
import PlayList from '../playlist/playlist'
import './category.css'
function Category(props) {
    return (
        <div className="Category">
            <p> {props.description}</p>
            <h2>{props.title}</h2>
            <PlayList playlist={props.playlist} handleOpenModal={props.handleOpenModal} />
        </div>
    )
}

export default Category;