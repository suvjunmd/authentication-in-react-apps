import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor() {
    super();

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    axios.get('/api/dashboard')
      .then((response) => {
        this.setState({
          secretData: response.data.message
        });
      });
  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }

}

export default DashboardPage;
