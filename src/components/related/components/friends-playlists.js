import React from 'react';
import Friend from './friend';

function FriendsPlaylists(props){
    const friends = props.friendsPlaylist.friends;
    console.log(friends)
    return(
        <div className="FriendsPlaylists">
            <h2 className="friends-title">Friends Playlists</h2>
            <ul className="friendsList">
                {
                    friends.map((item) => {
                        return <li key={item.id}><Friend  {...item} /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsPlaylists;