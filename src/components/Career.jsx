import React from 'react';
import { Container, Row, Col, Button, Card,CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import career from '../../src/assets/images/joinus.jpg';
import cData from './CareerData';

export default function Career() {
  return (
    <>
      <div className='page-mgt'>
          <section>
            <div className='conatiner'>
                <div className='page-title-area'>
                  
                      <div className='page-title-content'>
                          <h2>Career</h2>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      <div className='page-mgt'></div>
      <div>
        <Container className="px-5">
          <div className='about-content'>
            <span>Join Our Team</span>
          </div>
          <Row>
            <Col xs={12} md={12}>
              <img src={career} className='career-img-height' alt='' />
            </Col>
            <Col xs={12} md={12}>
                <div className='about-content'>
                  <h3> </h3>
                  <p>
                    At Digital Marketing Co., we're always on the lookout for talented individuals who are passionate about digital marketing. If you're driven, creative, and love working in a fast-paced environment, we want to hear from you.
                  </p>
                  <center><h4>Current Job Openings</h4></center>
              </div>
            </Col>

          </Row>
        </Container>
        
        <Container>
          <CardGroup>
            <Row xs={{ gutterX: 5 }} >

            { cData.map((cItem) => (
              <Col key={cItem.id} md={4} className="p-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{cItem.jobtitle}</Card.Title>
                    <Card.Text>{cItem.jobdescription}</Card.Text>
                    <Link to="/contact">
                      <Button variant="outline-primary" >Apply Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            
            )) }
            </Row>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}