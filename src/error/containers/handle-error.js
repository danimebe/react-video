import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
    state = {
        handleError: false,
    }

    componentDidCatch(error,info){
        this.setState({
            handleError: true,
        })
    }

    render(){
        const retorno = this.state.handleError ? <RegularError /> : this.props.children
        return retorno;
    }
}

export default HandleError;