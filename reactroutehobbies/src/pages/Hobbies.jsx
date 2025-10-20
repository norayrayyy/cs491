import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HobbyData } from '../info/hobbydata';

const Hobbies = () => {
    const shuffled = [...HobbyData].sort(() => 0.5 - Math.random());
    const shownHobbies = shuffled.slice(0,4);

  return (
    <div>
      <h2 className="mb-4">Hobbies</h2>
      <Row>
        {shownHobbies.map((hobby) => (
          <Col key={hobby.id} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={hobby.image} />
              <Card.Body>
                <Card.Title>{hobby.title}</Card.Title>
                <Card.Text>{hobby.caption}</Card.Text>
                <Link to={`/hobbies/${hobby.id}`} className="btn btn-primary">Learn More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hobbies;