import React from 'react';
import MyPlaylist from './my-playlist';
import FriendsPlaylists from './friends-playlists';
import Logo from './logo';
import './related.css';

function Related(props){
    console.log(props.related)
    return(
        <section className="Related">
            <Logo />
            <MyPlaylist myPlaylist= {props.related.myPlaylist} />
            <FriendsPlaylists friendsPlaylist = { props.related.friendsPlaylist } />
        </section>
    )
}

export default Related;