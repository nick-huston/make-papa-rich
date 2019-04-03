import React from 'react';
import logo from './logo.svg';
import {Navbar, Nav, Button, ButtonGroup, Modal, Form} from 'react-bootstrap'

let Login = class extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleLoginShow = this.handleLoginShow.bind(this);
        this.handleSignupShow = this.handleSignupShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          loggedIn : false,
          signupShow : false,
          loginShow : false
        }
    }
    
    handleClose() {
        this.setState({ loginShow: false, signupShow: false });
    }

    handleLoginShow() {
        this.setState({ loginShow: true });
    }

    handleSignupShow() {
        this.setState({ signupShow: true });
    }

    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <ButtonGroup>
                        <Button variant="outline-primary" onClick={this.handleLoginShow}>Log In</Button>
                        <Button variant="primary" onClick={this.handleSignupShow}>Sign Up</Button>
                    </ButtonGroup>
                    </Navbar.Collapse>
                </Navbar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    <Button variant="primary" onClick={this.handleSignupShow}>Click here to make papa <i>RICH</i></Button>
                    </p>
                </header>
                <Modal show={this.state.loginShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome back!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="example@website.com" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="•••••••" />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.signupShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome to Make Papa Rich!</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="example@website.com" />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="•••••••" />
                                </Form.Group>
                                <Form.Group controlId="formPasswordConfirm">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="•••••••" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Login;
