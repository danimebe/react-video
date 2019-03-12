import React  from 'react';
import Media from './media';
import './playlist.css';


function PlayList(props) {

    const playList = props.playlist;
    return (
            <article className="categorie">
                {
                    playList.map((item) => {
                        return <Media {...item} key={item.id} handleOpenModal ={props.handleOpenModal}/>
                    })
                }
            </article>
        
    )
}

export default PlayList;