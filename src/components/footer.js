import React from 'react';
import SpacerLine from '../components/spacer_line';
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

class Footer extends React.Component {
    render() {
        return (
            <div className='row mt-4 mb-2'>
                <SpacerLine width="100%" height="1px" />
                <div className=' mt-3 col-12 text-white'>
                    <div className='row'>
                        <div className='d-flex justify-content-center  col-md-6 order-md-1'>
                            <p>Argentina / Rosario · Moreno 878 · Oficina 8</p>
                        </div>
                        <div className='d-flex justify-content-center col-12 col-md-6 order-md-3'>
                            <p>EEUU / Miami · 66 West Flagler Street · Suite 900</p>
                        </div>
                        <div className='d-flex justify-content-center col-12 fs-6 col-md-6 order-md-2'>
                            <p>contacto@stardust.com</p>
                        </div>
                        <div className='row my-2 order-md-4'>
                            <div className='col-12 d-flex justify-content-center col-md-6'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <AiOutlineYoutube size={40}/>
                                    </div>
                                    <div className='col-4'>
                                    <AiOutlineFacebook size={40}/>
                                    </div>
                                    <div className='col-4'>
                                        <AiOutlineInstagram size={40}/>
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