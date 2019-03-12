import React from 'react';
import Category from './category';
import './categories.css';


function Categories(props){
    const categories = props.categories;
    return(
        <div className="Categories">
            {
                categories.map((item) => {
                    return <Category key={item.id} {...item} handleOpenModal ={props.handleOpenModal}/>
                })
            }
        </div>
    )
}

export default Categories;