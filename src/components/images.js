import React from 'react';
import './images.css';

class Images extends React.Component {
    render() {
        const { ImageUrl, description } = this.props;

        return (
            <div className='text-white text-center'>
                <img className='img-fluid' src={ImageUrl} />
                <p data-aos="fade-down" data-aos-duration="1500">{description}</p>
            </div>
        );
    }
}

export default Images;