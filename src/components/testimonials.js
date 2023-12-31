import React from 'react';
import './testimonials.css';
import { AiFillStar } from "react-icons/ai";

class Testimonials extends React.Component {
    render() {
        const { text, img, name, job } = this.props;

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
                    <div className="card-body text-white">
                        <p className="card-text">"El equipo de TATA se conectó a nuestra compañía como un verdadero equipo de Marketing interno y se hizoz cargo de nuestro canal online de forma exitosa."</p>
                        <div className='row mt-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={"https://placehold.it/100x100"} className="profile_pic" />
                                <div className='px-4'>
                                <h5>F. Prado</h5>
                                <p>Brand Manager Kazuma</p>
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