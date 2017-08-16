import React from 'react';
import Auth from '../modules/Auth';

class LogoutPage extends React.Component {
    componentDidMount() {
        Auth.deauthenticateUser();
        this.props.history.replace('/');
    }

    render() {
        return null;
    }
}

export default LogoutPage;