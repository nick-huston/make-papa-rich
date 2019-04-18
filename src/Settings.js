import React from 'react';
import Header from './Donation.js';
import { Form } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

let Settings = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : this.props.location.state.email,
            password : this.props.location.state.password,
            newEmailInput : '',
            newPassInput : '',
            newPassConfirm : '',
            profilePicInput : '',
            ageInput : 0,
            locationInput : '',
            genderInput : '',
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
                <Header loggedIn={true} />
                <header className="App-header">
                    <Form>
                        <Form.Group controlId="formEmail">
                                <Form.Label>Change Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="example@example.com" onChange={this.onField} />
                            </Form.Group>
                            <Form.Group controlId="formAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name="age" type="age" onChange={this.onField} />
                            </Form.Group>
                            <Form.Group controlId="formLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control name="location" type="location" onChange={this.onField} />
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
                </header>
            </div>
        )
    }
}

export default withRouter(Settings);
