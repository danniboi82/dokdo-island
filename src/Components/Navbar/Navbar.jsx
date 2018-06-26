import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Dokdo_Navbar extends Component {
    state = {}

    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop style={{background: 'rgba(0, 0, 0, 0.4)', border:'none'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Dokdo Island</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            History
                        </NavItem>
                        <NavDropdown eventKey={3} title="Image Gallery" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Sign-in
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}


export default Dokdo_Navbar;