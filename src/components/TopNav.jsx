import React from 'react';
import  { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './TopNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {

    const menuData = [
        {
            path:'/',
            name:"DGC"
        },
        {
            path:'/services',
            name:"SERVICES"
        },
        {
            path:'/ecommerce',
            name:"ECOMMERCE"
        },
        {
            path:'/customers',
            name:"CUSTOMERS"
        },
        {
            path:'/blog',
            name:"BLOG"
        },
        {
            path:'/contact',
            name:"CONTACT"
        }
    ];
    
    return (
        <Navbar className='navbar pt-4' expand="lg">
            <Container>
                <Navbar.Brand href='#'>
                    <a class="navbar-brand text-white" href="#">
                        <img className='logo' src={logo} />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle  style={{color: "white"}}/>
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        {
                            menuData.map((item)=>(
                                <Nav.Link to={item.path} key={item.name}>
                                    <div className='list_item'>{item.name}</div>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;