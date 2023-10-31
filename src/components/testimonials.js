import React from 'react';
import './testimonials.css';
import { AiFillStar } from "react-icons/ai";

class Testimonials extends React.Component {
    render() {
        const { text, img, business, customer } = this.props;

        return (
            <div className=''>
                <div className="card border-2 mx-4" style={{ width: "100%" }}>
                    <div className=''>
                        <div className='px-3 pt-3'> 
                        <AiFillStar className='text-warning' />
                        <AiFillStar className='text-warning' />
                        <AiFillStar className='text-warning' />
                        <AiFillStar className='text-warning' />
                        <AiFillStar className='text-warning' />
                        </div>
                    </div>
                    <div className="card-body text-white px-4">
                        <p className="card-text" style={{'minHeight': "100px"}}>{text}</p>
                        <div className='row mt-4'>
                            <div className='d-flex justify-content-start'>
                                {/*<img src={"https://placehold.it/100x100"} className="profile_pic" />*/}
                                <div>
                                <h5>{customer}</h5>
                                <p>{business}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;