import React from 'react';

function MyPlaylist(props) {
    const myPlaylist = props.myPlaylist.playlist;
    console.log(myPlaylist);
    return(
        <div className="myPlaylist">
            <h2>My playlist</h2>
            <ol className="Playlist">
                {
                    myPlaylist.map((item) => {
                        return <li key={item.id}> {item.title}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default MyPlaylist;