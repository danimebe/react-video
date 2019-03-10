import React , { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../components/categories/categories';
import RelatedData from  '../../related.json';
import Related from '../../../src/components/related/components/related';


class Home extends Component {
    render(){
        
        return(
            <HomeLayout>
                <Related related = { RelatedData }/>
                <Categories categories={ this.props.categories } />
            </HomeLayout>
        )
    }
}

export default Home;
