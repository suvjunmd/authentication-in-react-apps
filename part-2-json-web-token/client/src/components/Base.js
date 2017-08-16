import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import DashboardPage from '../containers/DashboardPage';
import HomePage from './HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import LogoutPage from '../containers/LogoutPage';

const Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">React App</Link>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    <Route exact path="/" render={() =>
      Auth.isUserAuthenticated() ? <DashboardPage/> : <HomePage/>}
    />
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpPage}/>
    <Route path="/logout" component={LogoutPage}/>

  </div>
);

export default Base;
