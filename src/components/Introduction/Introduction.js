import React from 'react';
import img from '../../img/istockphoto-669775712-612x612.jpg'
import './Introduction.css'
const Introduction = () => {
    // introduction components
    return (
        <div className="intro-style">
             <div className="row py-5">
              <div className="col-md-6  ">
                  <img width="450px" src={img} alt="" />
              </div>
              <div className="col-md-6  px-5 text-light">
                  <h3 className='pb-5'>Take great computer coursees from the worlds best university </h3>
                  <p>Our courses are built in partnership with technology leaders and are relevant to industry needs.</p>
              </div>
          </div>
        </div>
    );
};

export default Introduction;