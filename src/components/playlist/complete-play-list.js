import React, { Component } from 'react';
import PlayList from './playlist';
import Figure from '../../icons/components/figure';


function CompletePlayList(props) {

    const categories = props.categories
    console.log(categories)
    return(
        <div className="Categories">
            <Figure.Play color="blue" size={60} />
            <Figure.Pause color="Red" size={40} />
            {
                categories.map((item) => {
                    return <PlayList {...item} key={ item.id} />
                })
            }
        </div>
    )

}

export default CompletePlayList;