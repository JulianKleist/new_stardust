import React from 'react';
import './std-button.css';

class StdButton extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <div className='row mt-4 mb-2' data-aos="fade-up"
            data-aos-duration="2000">
                <div className='d-flex justify-content-center col-12'>
                    <span className='std_span'>{text}</span>
                </div>
            </div>
        );
    }
}

export default StdButton;