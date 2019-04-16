import React from 'react';
import {Navbar, Button, ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';
let Header = class extends React.Component {

    render() {
        if (!this.props.loggedIn) {
            return (
                <Navbar>
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Button className="mr-auto" variant="outline-light">About</Button>
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav> */}
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
                    <Button className='mr-auto' variant="outline-dark"><i>About</i></Button>
                    <DropdownButton title="My Account">
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </DropdownButton>
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <NavDropdown title="My Account" id="nav-dropdown">
                        <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown> */}
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}

export default Header;
