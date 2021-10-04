import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name,img,duration,fee} = props.service
    return (
    <Col>
      <Card className="card-style">
        <Card.Img variant="top" className="img-course-style" src={img} />
        <Card.Body>
          <Card.Title>
              <h3>Name:{name}</h3>
              <h3 className="duration-style">Duration:{duration}</h3>
              <h3 className="fee-style">Fee:{fee}</h3></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;