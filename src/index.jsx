// Application entrypoint.

// Load up the application styles
import '../styles/application.scss';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { AppContainer } from 'react-hot-loader';

// Using React-router
// import routes from './router.jsx';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// ReactDOM.render(Routes, document.getElementById('react-root'));
// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('react-root')
);   

// Enable hot reload using only-dev-server
// i.e. to keep the state of React components when the components change
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('react-root')
    );   
  })
}