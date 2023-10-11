import React from 'react';
import './images.css';

class Images extends React.Component {
    render() {
        const { ImageUrl } = this.props;

        return (
            <div className='text-white text-center'>
                <img src={ImageUrl} />
                <p>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros</p>
            </div>
        );
    }
}

export default Images;