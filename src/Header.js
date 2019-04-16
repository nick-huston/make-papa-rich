import React from 'react';
import {Navbar, Nav, NavDropdown, Button, ButtonGroup} from 'react-bootstrap';
/* TODO: create logged-in header */
let Header = class extends React.Component {
    /* constructor(props) {
        super(props)

        this.state = {
            loggedIn : false
        }
    } */

    render() {
        if (!this.props.loggedIn) {
            return (
                <Navbar>
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <ButtonGroup inline>
                        <Button variant="outline-primary" onClick={this.handleLoginShow}>Log In</Button>
                        <Button variant="primary" onClick={this.handleSignupShow}>Sign Up</Button>
                    </ButtonGroup>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
        else {
            return (
                <Navbar>
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <NavDropdown title="My Account" id="nav-dropdown">
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}

export default Header;
