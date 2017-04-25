import React, { Component } from 'react';

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <header className="navbar-header">
            {/*<!-- TODO Add Mudika Logo -->*/}
            {/*<!-- The button element and its attributes are to activate the toggle feature -->*/}
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#topNavbar">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <h1 className="navbar-brand">Mudika Vancouver</h1>
          </header>
          {/*<!-- Content wrapped within the below div will be collapsed into the hamburger button-->*/}
          <div className="collapse navbar-collapse" id="topNavbar">
            <ul className="nav navbar-nav">
              <li><a href="#">About</a></li>
              <li><a href="#">Happening in Mudika</a></li>
              <li><a href="#">Ministries</a></li> 
              {/*<!-- User can register in Join Us section -->*/}
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
