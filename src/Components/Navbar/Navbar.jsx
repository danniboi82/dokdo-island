import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/DokdoLogo1.png';
class Dokdo_Navbar extends Component {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="" width='250px'/>
                    </Link>
                    <div className="navbar-nav nav-menu ml-auto">
                        <Link to='/' className="nav-item">History</Link>
                        <Link to='/signup' className="nav-item">Image Gallery</Link>
                        <Link to='/signin' className="nav-item">Sign-in</Link>

                    </div>

                </div>
            </div>

        )
    }
}

export default Dokdo_Navbar;