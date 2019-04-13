import React from 'react';
import logo from './logo.svg';
import {Navbar, Nav, Button, ButtonGroup, Modal, Form, Alert} from 'react-bootstrap';

let Login = class extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleLoginShow = this.handleLoginShow.bind(this);
        this.handleSignupShow = this.handleSignupShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    
        this.state = {
          loggedIn : false,
          signupShow : false,
          loginShow : false,
          forgotPassword : false,
          emailInput : '',
          passwordInput : '',
          confirmPasswordInput : '',
          loginFail : false,
        //   users: []
        }
    }

    /* componentDidMount() {
        this.getUsers();
    } */

    getUsers = _ => {
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({users: data})
            })
            .catch(err => console.error(err))
    }
    
    handleClose() {
        this.setState({ loginShow: false, signupShow: false, forgotPassword: false, loginFail: false });
    }

    handleLoginShow() {
        this.setState({ loginShow: true });
    }

    handleSignupShow() {
        this.setState({ signupShow: true });
    }

    handleForgotPassword() {
        this.setState({ forgotPassword: true, loginShow: false })
    }

    handleLoginSubmit = () => {
        /* TODO: salt and hash passwords */
        const email = this.state.emailInput
        const password = this.state.passwordInput
        fetch('http://localhost:4000/login?email='+email+"&password="+password)
            .then(response => response.json())
            .then(({ data }) => {
                if (data.length === 1) {
                    this.setState({loggedIn: true, page: "donation"})
                    console.log(this.state)
                } else {
                    this.setState({loginFail: true})
                }
            })
            .catch(err => console.error(err))
    }

    onField = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
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
                        <Alert key="loginAlert" variant="danger" show={this.state.loginFail}>Incorrect email or password</Alert>
                        <Form>
                            <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="example@example.com" onChange={this.onField} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="•••••••" onChange={this.onField} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={this.handleForgotPassword} className="mr-auto">
                            <i>Forgot Password</i>
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
                            <Button variant="primary" onClick={this.handleClose}>
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
