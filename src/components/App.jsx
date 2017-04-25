import React, { Component } from 'react';
// Component that handles module reloading and error handling
// import { AppContainer } from 'react-hot-loader';
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <h1>Welcome to Mudika Vancouver</h1>
      </div>
    );
  }
}
export default App;
