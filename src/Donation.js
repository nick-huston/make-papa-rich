import React from 'react';
import { Card, CardGroup, Button, Alert, InputGroup, FormControl, Spinner, Image } from 'react-bootstrap';
import Header from './Header.js';
import logo1 from './img/ACLU-logo.svg';
// import ReactBootstrapSlider from 'react-bootstrap-slider';
// import logo2 from './img/cf-logo.svg';
// import logo3 from './img/ldf-logo.svg'

let Donation = class extends React.Component {
    constructor(props) {
        super(props)

        /* this.state = {
            email: 'mscott@dundermifflinfinity.com',
            password: 'test',
            balance: 0,
            charity: '',
            donation: 0,
            balanceErr: false,
            success: false,
            fetching: false,
            showAlert: false
        } */
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            balance: 0,
            charity: '',
            donation: 0,
            balanceErr: false,
            success: false,
            fetching: false,
            showAlert: false
        }
    }

    componentDidMount() {
        console.log(this.state)
        fetch('http://localhost:4000/balance?email='+this.state.email)
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({balance: data})
            })
            .catch(err => console.error(err))
    }

    donate = async () => {
        this.setState({fetching: true})
        console.log("starting donation...")
        let tickets = [];
        await fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data)
                data.forEach(user => {
                    tickets = tickets.concat(Array(user.bracket+1).fill(user.user_id))
                });
            })
            .catch(err => console.error(err))
        console.log(tickets);
        const winner = tickets[Math.floor(Math.random() * tickets.length)];
        console.log(winner);
        if (winner !== undefined) {
            fetch('http://localhost:4000/donate?sender_email='+this.state.email+'&receiver_id='+winner+'&amount='+this.state.donation)
                .catch(err => console.error(err))
            console.log("donation complete")
        } else console.log("donation cancelled")
        this.setState({showAlert: true, success: true, fetching: false})
    }

    changeCharity = (event) => {
        this.setState({charity: event.target.name})
        console.log(this.state)
    }

    input = (event) => {
        let val = event.target.value * 1
        this.setState({donation: val})
    }

    handleSubmit = () => {
        if (this.state.donation <= this.state.balance) this.donate()
        else this.setState({balanceErr: true})
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
                                    <Image src={logo1} />
                                    <Card.Title>Charity 1</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer><Button name="charity1" variant="primary" onClick={this.changeCharity} disabled={this.state.charity === 'charity1'}>Choose</Button></Card.Footer>
                            </Card>
                            <Card style={{width: '18rem'}}>
                                <Image src={"http://www.equalityfederation.org/wp-content/uploads/2015/09/EF_Logo.png"} />
                                <Card.Body>
                                    <Card.Title>Charity 2</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer><Button name="charity2" variant="primary" onClick={this.changeCharity} disabled={this.state.charity === 'charity2'}>Choose</Button></Card.Footer>
                            </Card>
                            <Card style={{width: '18rem'}}>
                            {/* <Card.Img variant="top" src={"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"} /> */}
                                <Image src={"https://giffords.org/wp-content/themes/wp-gfd-rdsn/images/gfd_logo.png"}></Image>
                                <Card.Body>
                                    <Card.Title>Charity 3</Card.Title>
                                    <Card.Text>
                                        Example text
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer><Button name="charity3" variant="primary" onClick={this.changeCharity} disabled={this.state.charity === 'charity3'}>Choose</Button></Card.Footer>
                            </Card>
                        </CardGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend><InputGroup.Text>$</InputGroup.Text></InputGroup.Prepend>
                            <FormControl
                                placeholder="Donation Amount"
                                aria-label="Donation Amount"
                                aria-describedby="basic-addon2"
                                onChange={this.input}
                                isInvalid={isNaN(this.state.donation)}
                            />
                            <InputGroup.Append>
                                <Button name="submit" 
                                    variant="warning" 
                                    disabled={isNaN(this.state.donation) || this.state.fetching || this.state.donation > this.state.balance || this.state.donation === 0} 
                                    onClick={this.handleSubmit}>{this.state.fetching ? <Spinner /> : "Submit"}
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Alert dismissible variant={this.state.success ? "success" : "warning"} show={this.state.showAlert}>
                            <Alert.Heading>{this.state.success ? "Donation made!" : "Error in making donation"}</Alert.Heading>
                        </Alert>
                    </div>
                </header>
            </div>
        )
    }
}

export default Donation;
