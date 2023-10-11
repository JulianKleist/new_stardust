import React from 'react';
import './blog.css';

class Blog extends React.Component {
    render() {
        const { image } = this.props;

        return (
            <div className=''>
                <div className="card border-0" style={{ width: "100%" }}>
                    <img src={"https://placehold.it/300x200"} className="card-img-top" />
                    <div className="card-body text-white bg-black">
                        <h5 className="card-title bg-black">Marcas de ropa: 3 ideas de funnels</h5>
                        <p className="card-text bg-black">El marketing digital es una herramienta clave para las marcas de ropa que buscan llegar a su audiencia objetivo y aumentar sus ventas. Uno de</p>
                        <a href="#" className="btn bg-black text-white">LEER POST</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;