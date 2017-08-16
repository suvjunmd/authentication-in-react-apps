import React from 'react';
import ReactDom from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>
      <App></App>
    </Router>
  </MuiThemeProvider>), document.getElementById('react-app'));
