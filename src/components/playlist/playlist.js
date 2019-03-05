import React , { Component } from 'react';
import Media from './media';
import './playlist.css';


function PlayList(props) {

    const playList = props.playlist;
    return (
        <div className="playlist">

            <h2>{  props.title } </h2>
            <h3>{  props.description } </h3>

            <article className="categorie">
                {
                    playList.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </article>
        </div>
        
    )
}

export default PlayList;