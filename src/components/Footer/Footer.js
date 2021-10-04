import React from 'react';
import './Footer.css'
const Footer = () => {
    // footer components
    return (
      <div className='bg-dark text-white text-center mt-4 '>
          
        <div className="row py-4">
            <h3 className="learning">Computer Learining</h3>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <p>San Francisco, CA 94102, US</p>
                    <p>1234 Some St</p>
                </div>
                <div className="col-md-3">
                    <p>Phone: 800 123 4567</p>
                    <p>Fax: 1.800.123.4566</p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;