import React from 'react';
import Category from './category'
function Categories(props){
    const categories = props.categories;
    console.log(categories)
    return(
        categories.map((item) => {
            return <Category key={item.id} {...item}/>
        })
    )
}

export default Categories;