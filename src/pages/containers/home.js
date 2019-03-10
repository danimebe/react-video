import React , { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../components/categories/categories';
import Related from '../../../src/components/related/components/related';

class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Related />
                <Categories categories={ this.props.categories } />
            </HomeLayout>
        )
    }
}

export default Home;
