import React , { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../components/categories/categories';
import RelatedData from  '../../related.json';
import Related from '../../../src/components/related/components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';


class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }

    handleOpenModal = (event) => {
        this.setState({
            modalVisible: true,
        })
    }

    render(){
        
        return(
            <HandleError>
                <HomeLayout>
                    <Related related = { RelatedData }/>
                    <Categories categories={ this.props.categories } handleOpenModal ={this.handleOpenModal}/>
                    {
                        this.state.modalVisible && 
                        <ModalContainer>
                            <Modal handleClick = {this.handleCloseModal}>
                                <h1>Puto El que lo lea</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;
