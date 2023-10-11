import React from 'react';
import './images.css';

class Images extends React.Component {
    render() {
        const { ImageUrl } = this.props;

        return (
            <div className='row mt-4 mb-2'>
                {/* <div className='d-flex flex-md-row justify-content-center col-12 '> */}
                {/* <div className='row'> */}
                <div className='col-12 col-md-6 text-center text-white'>
                    <img src={ImageUrl} />
                    <p>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros</p>
                </div>
                       {/*  <div className='row'> */}
                {/* <div className='col-12 col-md-6 text-center text-white'>
                        
                </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Images;