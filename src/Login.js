import React from 'react';
import logo from './img/logo.png';
import {Navbar, Nav, Button, ButtonGroup, Modal, Form, Alert } from 'react-bootstrap';

let Login = class extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          loggedIn : false,
          signupShow : false,
          loginShow : false,
          forgotPassword : false,
          emailInput : '',
          passwordInput : '',
          confirmPasswordInput : '',
          loginFail : false,
          passwordMismatch : false,
          error : false,
          badEmail : false
        }
    }

    /* componentDidMount() {
        this.getUsers();
    } */

    /* getUsers = () => {
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({users: data})
            })
            .catch(err => console.error(err))
    } */
    
    handleClose = () => {
        this.setState({ loginShow: false, signupShow: false, forgotPassword: false, loginFail: false });
    }

    handleLoginShow = () => {
        this.setState({ loginShow: true });
    }

    handleSignupShow = () => {
        this.setState({ signupShow: true });
    }

    handleForgotPassword = () => {
        this.setState({ forgotPassword: true, loginShow: false })
    }

    handleModal = (event) => {
        switch (event.target.name) {
            case "signup":
                this.setState({ signupShow: true })
                break;
            case "login":
                this.setState({loginShow: true})
                break;
            case "forgotPassword":
                this.setState({forgotPassword: true, loginShow: false})
                break;
            default:
                console.log(event.target.variant)
                break;
        }
    }

    onKey = (event) => {
        if (event.key === 'Enter') this.handleLoginSubmit()
    }

    handleLoginSubmit = async () => {
        const email = this.state.emailInput
        const password = this.state.passwordInput
        await fetch('http://localhost:4000/login?email='+email+"&password="+password)
            .then(response => response.json())
            .then(({ data }) => {
                if (data.length === 1) {
                    this.setState({loggedIn: true, loginShow: false})
                    this.props.history.push({
                        pathname: '/donation',
                        state: {
                            email: this.state.emailInput,
                            password: this.state.passwordInput
                        }
                    })
                } else {
                    this.setState({loginFail: true})
                }
            })
            .catch(err => console.error(err))
    }

    handleSignupSubmit = () => {
        const email = this.state.emailInput;
        const password = this.state.passwordInput;
        if (!email.includes('@')) {
            this.setState({badEmail: true})
        }
        if (!(password === this.state.confirmPasswordInput)) {
            this.setState({passwordMismatch: true})
        }
        if (!this.state.badEmail && !this.state.passwordMismatch) {
            fetch('http://localhost:4000/users/add?email='+email+"&password="+password)
                .then(response => {
                    if (response === 'error') {
                        this.setState({error: true})
                    } else {
                        this.props.history.push({
                            pathname: '/donation',
                            state: {
                                email: email,
                                password: password
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        }
    }

    onField = (event) => {
        switch(event.target.name) {
            case "email":
                this.setState({emailInput: event.target.value});
                break;
            case "password":
                this.setState({passwordInput: event.target.value});
                break;
            case "confirmPassword":
                this.setState({confirmPasswordInput: event.target.value});
                break;
            default:
                console.log(event.target.name);
                break;
        }
    }

    render() {
        return (
            <div className="App">
                <Navbar sticky="top">
                    <Navbar.Brand href="#home">Make Papa Rich</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <ButtonGroup>
                        <Button name="login" variant="outline-primary" onClick={this.handleModal}>Log In</Button>
                        <Button name="signup" variant="primary" onClick={this.handleModal}>Sign Up</Button>
                    </ButtonGroup>
                    </Navbar.Collapse>
                </Navbar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    <Button name="signup" variant="primary" onClick={this.handleModal}>Click here to make papa <i>RICH</i></Button>
                    </p>
                </header>
                <Modal show={this.state.loginShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome back!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert key="loginAlert" variant="danger" show={this.state.loginFail}>Incorrect email or password</Alert>
                        <Form>
                            <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                name="email" 
                                type="email" 
                                placeholder="example@example.com" 
                                onChange={this.onField}
                                onKeyPress={this.onKey} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password" 
                                type="password" 
                                placeholder="•••••••" 
                                onChange={this.onField} 
                                onKeyPress={this.onKey} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button name="forgotPassword" size="sm" variant="light" onClick={this.handleModal} className="mr-auto">
                            Forgot Password
                        </Button>   
                        <ButtonGroup>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleLoginSubmit}>
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.signupShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome to Make Papa Rich!</Modal.Title>
                    </Modal.Header>
                    <Alert key="passwordMismatchAlert" variant="danger" show={this.state.passwordMismatch}>Both passwords must match</Alert>
                    <Alert key="badEmailAlert" variant="danger" show={this.state.badEmail}>email address must follow pattern "example@example.com"</Alert>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="example@example.com" onChange={this.onField} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="•••••••" onChange={this.onField} />
                            </Form.Group>
                            <Form.Group controlId="formPasswordConfirm">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control name="confirmPassword" type="password" placeholder="•••••••" onChange={this.onField} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonGroup>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleSignupSubmit}>
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.forgotPassword} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please enter your email address. If an account exists with that email, you will be sent an email to reset your password.
                        <Form>
                            <Form.Group controlId="formEmail">
                            <Form.Control name="email" type="email" placeholder="example@example.com" onChange={this.onField} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonGroup>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Login;
