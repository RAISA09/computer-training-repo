import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="MenuBar-container header-style">
        <div className="container">
          <div className="row">
           
            <div>
              <div className="menu-container ">
                <h1 className="computer-training">Computer Training Center</h1>
                <ul className="d-flex align-items-center justify-content-center">
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About</li>
                  </Link>
                  <Link to="/services" className="items">
                    <li>Services</li>
                  </Link>
                  <Link to="/contact" className="items">
                    <li>Contact us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;