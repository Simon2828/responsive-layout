import React, { Component } from 'react';
import logo from '../logo.svg';


const Navbar = function() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <img src={logo} className="app-logo" alt="logo" height='20px' width='20px'/>
              <a className="navbar-brand" href="#">Logo</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#">Range</a></li>
                <li><a href="#">Where to buy</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
              
            </div>
          </div>
        </nav>
        );
}

export default Navbar;
