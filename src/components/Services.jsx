import React  from "react";
import { Container, Row, Col,Card, CardGroup } from 'react-bootstrap';
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
        <div className='page-mgt'>
            <section>
                <div className='page-title-area'>
                    <div className='conatiner'>
                        <div className='page-title-content'>
                            <h2>Services</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='page-mgt spacer'></div>

        <section className="services-section">
        <Container>
            <div className='about-content'>
                <h3>How we can help?</h3>
            </div>
        </Container>
            <div>
                <Container className="px-4">
                    <CardGroup>
                        <Row xs={{ gutterX: 5 }}>{servicesData.map((service) => (
                            <Col key={service.id} md={6} className="p-3">
                                <Card>
                                    <Card.Img variant="top" src={service.image} className='card-img-height' />
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>{service.description}</Card.Text>
                                        </Card.Body>
                                </Card>
                            </Col>
                            ))}
                        </Row>
                    </CardGroup>
                </Container>
            </div>
        </section>
    </>
  )
}

export default Services;