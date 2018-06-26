import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Navbar.css';
class Dokdo_Navbar extends Component {
    state = {
        hover: false,
    }


    hoverHandler = (event) => {
        console.log("event");
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop className="Navbar" style={{}}>
                <Navbar.Header>
                    <Navbar.Brand onMouseEnter={this.hoverHandler}>
                        <a className="Navbar-Brand"  href="#brand">Dokdo Island</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#" className="Navbar-Links">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="#" className="Navbar-Links">
                            History
                        </NavItem>
                        <NavDropdown
                            eventKey={3}
                            title="Image Gallery"
                            id="basic-nav-dropdown"
                            className="Navbar-Links">
                            <MenuItem eventKey={3.1} className="Navbar-Links">Action</MenuItem>
                            <MenuItem eventKey={3.2} className="Navbar-Links"></MenuItem>
                            <MenuItem eventKey={3.3} className="Navbar-Links"></MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3} className="Navbar-Links">Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" className="Navbar-Links">
                            Sign-in
                        </NavItem>
                        <NavItem eventKey={2} href="#" className="Navbar-Links"></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Dokdo_Navbar;