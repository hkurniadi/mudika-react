import React, { Component } from 'react';
// Component that handles module reloading and error handling
// import { AppContainer } from 'react-hot-loader';
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello React </h1>
      </div>
    );
  }
}
export default App;
