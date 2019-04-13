import React from 'react';
// import {Navbar, Nav, Button, ButtonGroup, Modal, Form} from 'react-bootstrap'
import Header from './Header.js'

let Donation = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <Header loggedIn={true} />
        )
    }

}

export default Donation;
