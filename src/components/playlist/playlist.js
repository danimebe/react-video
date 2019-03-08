import React  from 'react';
import Media from './media';
import './playlist.css';


function PlayList(props) {

    const playList = props.playlist;
    console.log(playList);
    
    return (
            <article className="categorie">
                {
                    playList.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </article>
        
    )
}

export default PlayList;