import React ,{ PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {

    
    state = {
        author: this.props.author
    }

    /* constructor(props){
        super(props);
        this.state = {
            author: this.props.author
        }
    } */

  /*   handleClick = (event) => {
        const name = 'Leonidas Esteban';
        console.log(this)
        this.setState({
            author: name
        })
    }
 */
    render() {

        
        return (
            <div className='Media' onClick= { this.props.handleOpenModal }>
                <div className='Media-cover'>
                    <img className='Media-image' src={ this.props.cover } alt="" width={260} height={160} />
                </div>
                <h3 className="Media-title">{ this.props.title }</h3>
                <p className="Media-author">{ this.state.author }</p>
            </div>
        )

    }
}

export default Media;

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

