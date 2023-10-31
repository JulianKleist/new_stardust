import React from 'react';
import SpacerLine from '../components/spacer_line';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

class Footer extends React.Component {
    render() {
        return (
            <div className='row mt-4 mb-2'>
                <SpacerLine width="100%" height="1px" />
                <div className=' mt-3 col-12 text-white'>
                    <div className='row'>
                        <div className='d-flex justify-content-center col-12 col-md-6 order-md-3'>
                            <p>Avda. Puente Cavalcanti, Ciudad del Este, Paraguay</p>
                        </div>
                        <div className='d-flex justify-content-center col-12 fs-6 col-md-6 order-md-2'>
                            <p>hola@stardust.com.py</p>
                        </div>
                        <div className='row my-2 order-md-4'>
                            <div className='col-12 d-flex justify-content-center col-md-6'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <a href="https://www.linkedin.com/company/stardustpy/" target="_blank" style={{color: 'white'}}><AiOutlineLinkedin size={30}/></a>
                                    </div>
                                    <div className='col-4'>
                                        <a href="https://es-la.facebook.com/stardustpy/" target="_blank" style={{color: 'white'}}><AiOutlineFacebook size={30}/></a>
                                    </div>
                                    <div className='col-4'>
                                        <a href="https://www.instagram.com/stardustpy/" target="_blank" style={{color: 'white'}}><AiOutlineInstagram size={30}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;