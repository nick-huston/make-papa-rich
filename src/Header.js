import React from 'react';
import {Navbar, Button, ButtonGroup,} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

let Header = class extends React.Component {

    onClick = (event) => {
        if (event.target.name === "logout") this.props.history.push('/');
        if (event.target.name === "settings") this.props.history.push('/settings')
    }

    render() {
        if (!this.props.loggedIn) {
            return (
                <Navbar>
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Button className="mr-auto" variant="outline-light">About</Button>
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
                    <ButtonGroup inline>
                        <Button name="settings" variant="outline-primary" onClick={this.onClick}>Settings</Button>
                        <Button name="logout" variant="primary" onClick={this.onClick}>Logout</Button>
                    </ButtonGroup>
                    {/* <DropdownButton title="My Account">
                        <Dropdown.Item name="settings" as="button" onClick={this.onClick}>Settings</Dropdown.Item>
                        <Dropdown.Item name="logout" as="button" onClick={this.onClick}>Logout</Dropdown.Item>
                    </DropdownButton> */}
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}

export default withRouter(Header);
