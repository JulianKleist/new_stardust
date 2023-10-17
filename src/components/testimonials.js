import React from 'react';
import './blog.css';
import { AiFillStar } from "react-icons/ai";

class Testimonials extends React.Component {
    render() {
        const { text, img, name, job } = this.props;

        return (
            <div className=''>
                <div className="card border-2 mx-4" style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='d-flex col-4'> 
                        <AiFillStar className='bg-white text-warning' />
                        <AiFillStar className='bg-white text-warning' />
                        <AiFillStar className='bg-white text-warning' />
                        <AiFillStar className='bg-white text-warning' />
                        <AiFillStar className='bg-white text-warning' />
                        </div>
                    </div>
                    {/* <img src={"https://placehold.it/300x200"} className="card-img-top" /> */}
                    <div className="card-body text-dark bg-white">
                        {/* <h5 className="card-title bg-black">Marcas de ropa: 3 ideas de funnels</h5> */}
                        <p className="card-text bg-white">"El equipo de TATA se conectó a nuestra compañía como un verdadero equipo de Marketing interno y se hizoz cargo de nuestro canal online de forma exitosa."</p>
                    {/* <img src={"https://placehold.it/300x200"} className="card-img-top" /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;