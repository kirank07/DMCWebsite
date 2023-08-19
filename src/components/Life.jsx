import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import images from './LifeData';

const Life = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 

  const carouselItems = images.map((image, i) => (
    <Carousel.Item key={i}>
      <img className="d-block w-100" src={image.src} alt={image.alt} />
      <Carousel.Caption>
        <h3>{image.title}</h3>
        <p>{image.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
    <div className='page-mgt'>
    <section>
          <div className='conatiner'>
              <div className='page-title-area'>
                <div className='page-title-content'>
                    <h2>Life @ Digital Maketing</h2>
                </div>
            </div>
        </div>
    </section>
  </div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {carouselItems}
    </Carousel>
    <Container className='py-10'>
        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Our Culture</Card.Title>
                <Card.Text>
                  At our company, we believe in fostering a positive and inclusive culture that values collaboration, creativity, and innovation. Our team is made up of talented individuals who bring unique perspectives and experiences to the table, and we are committed to creating a work environment where everyone can thrive.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Our Benefits</Card.Title>
                <Card.Text>
                  We believe in taking care of our team members, and we offer a comprehensive benefits package that includes health insurance, paid time off, 401(k) matching, and more. We also provide ongoing training and professional development opportunities to help our team members grow and advance in their careers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default Life;
