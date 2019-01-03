import React from 'react';
// For Typechecking we ll import as fellows
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Header = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
        <div className="container">
          <Link className="navbar-brand" href="/">
            {props.branding}
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home" /> Home <span className="sr-only">
                    (current)
                  </span>
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link className="nav-link" to="/contact/add">
                  <i className="fas fa-plus" aria-hidden="true" /> Add
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-question" aria-hidden="true" /> About
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link className="nav-link" to="/test">
                  Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>;
      // <div>
      //     <h1 style={{...headingStyle, color:"red", fontSize: "50px"}}>{props.branding}</h1>
      // </div>
}

// example of styles object
// const headingStyle = {
//     margin: "0"
// }

// Example of default props
Header.defaultProps = {
    branding: 'Contact Manager'
}

// Example of typechecking for props
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
