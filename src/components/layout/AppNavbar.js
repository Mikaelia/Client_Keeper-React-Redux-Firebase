import React, { Component } from "react";
import { Link } from "react-router-dom";

//this will have state, so we are using a class
class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container" />
        <Link to="/" className="navbar-brand">
          ClientPanel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain" />
        <ul className="navbar-nav mr-auto">
          <li className="nav-link">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AppNavbar;