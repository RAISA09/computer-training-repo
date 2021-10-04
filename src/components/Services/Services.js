import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('./courses.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div>
            <Header></Header>
        <Row xs={1} md={2} className="g-4 home-style">
        {
             services.map(service => <Service
                 key={service.id}
                 service={service}></Service>)
         }
        </Row>
        <Footer></Footer>
       </div>
    );
};

export default Services;