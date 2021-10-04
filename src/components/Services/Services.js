import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
// services components
const Services = () => {
    // services state
    const [services,setServices] = useState([])
    // services api calling
    useEffect(()=> {
        fetch('./courses.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div>
           <h2 className="all-course">Computer All Courses</h2>
        <Row xs={1} md={2} className="g-4 home-style">
        {
             services.map(service => <Service
                 key={service.id}
                 service={service}></Service>)
         }
        </Row>
       </div>
    );
};

export default Services;