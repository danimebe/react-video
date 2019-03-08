import React , { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../components/categories/categories';


class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Categories categories={ this.props.categories } />
            </HomeLayout>
        )
    }
}

export default Home;
