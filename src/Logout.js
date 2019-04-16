import React from 'react';

let Logout = class extends React.Component {

    componentDidMount() {
        this.props.history.push('/')
    }
}

export default Logout;
