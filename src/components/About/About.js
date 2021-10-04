import React from 'react';
import aboutLogo from '../../aboutImage/159759559_732907254091107_8228210713734617701_n.jpg' 
import './About.css'
const About = () => {
    return (
      /* About of my computer training center */
        <div className="about-container">
         <div>
         <h1>About Us</h1>
          <p>Join with us, We fulfill your dream properly. If you want to be a computer expart you must skilled many computer programming knowledge .If you join with us we teach you all of program that you know and computer Sciences degrees teach computer hardware and software, so students can work with algorithms, databases, networks, or artificial intelligence. IT degrees from top tech schools allow students to fix complex problems better and faster.</p> 
         </div>
         <div>
           <img width="400px" src={aboutLogo} alt="" />
         </div>
        </div>
    );
};

export default About;