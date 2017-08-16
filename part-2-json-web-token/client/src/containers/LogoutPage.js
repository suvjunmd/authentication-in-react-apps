import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';

class LogoutPage extends React.Component {
    componentDidMount() {
        Auth.deauthenticateUser();
        this.props.history.replace('/');
    }

    render() {
        return null;
    }
}

LogoutPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default LogoutPage;