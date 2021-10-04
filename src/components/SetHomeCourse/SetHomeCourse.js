import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SetHomeCourse.css'
// Set home course components
const SetHomeCourse = (props) => {
    // distructing
    const {name,img, duration,fee} = props.setHomeCourse
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

export default SetHomeCourse;