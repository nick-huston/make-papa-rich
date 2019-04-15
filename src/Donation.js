import React from 'react';
import { Card, CardGroup, Button, Alert } from 'react-bootstrap';
import Header from './Header.js';
import logo1 from './img/ACLU-logo.svg';
import ReactBootstrapSlider from 'react-bootstrap-slider';
// import logo2 from './img/cf-logo.svg';
// import logo3 from './img/ldf-logo.svg'

let Donation = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = { /* DEBUG - REMOVE */
            email: 'mscott@dundermifflinfinity.com',
            password: 'test',
            balance: 0,
            charity: '',
            donation: 0
        }
        /* this.state = {
            email: '',
            password: '',
            balance: 0,
            chari0ty: '',
            donation: 0
        } */
    }

    componentDidMount() {
        fetch('http://localhost:4000/balance?email='+this.state.email)
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({balance: data})
            })
            .catch(err => console.error(err))
    }

    donate = () => {
        let tickets = [];
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(({ data }) => {
                data.forEach(user => {
                    tickets.concat(Array(user.bracket).fill(user.user_id))
                });
            })
            .catch(err => console.error(err))
        console.log(tickets);
        const winner = tickets[Math.floor(Math.random() * tickets.length)];
        fetch('http://localhost:4000/donate?sender_email='+this.state.email+'&receiver_id='+winner+'&amount='+this.state.donation)
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.error(err))
    }

    changeCharity = (event) => {
        this.setState({charity: event.target.name})
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={true} />
                <header className="App-header">
                    <Alert variant="light">
                        <h4>You have {this.state.balance} credits remaining.</h4>
                    </Alert>
                    <div className="Cards">
                        <CardGroup>
                        <Card style={{width: '18rem'}}>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo1} />
                                    <Card.Title>Charity 1</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                    <Button name="charity1" variant="primary" onClick={this.changeCharity}>Choose</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={require("./img/cf-logo.png")} />
                                <Card.Body>
                                    <Card.Title>Charity 2</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                    <Button name="charity2" variant="primary" onClick={this.changeCharity}>Choose</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{width: '18rem'}}>
                            {/* <Card.Img variant="top" src={logo3} /> */}
                                <Card.Body>
                                    <Card.Title>Charity 3</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                    <Button name="charity3" variant="primary" onClick={this.changeCharity}>Choose</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        <ReactBootstrapSlider value={0} step={1} max={this.state.balance} min={0} disabled={this.state.balance === 0} />
                    </div>
                </header>
            </div>
        )
    }

}

export default Donation;
