import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import '../App.css';
import slider1 from '../../src/assets/images/slider1.jpg';
import slider2 from '../../src/assets/images/slider2.jpg';
import slider3 from '../../src/assets/images/slider3.jpg';
import slider4 from '../../src/assets/images/slider4.jpg';
import slider5 from '../../src/assets/images/slider5.jpg';

export default function Home() {
  return (
    <>
        <section>
            <div>
                <Carousel>
                    <Carousel.Item>
                    <h2><span className='slider-heading'>DIGITAL MARKETING</span></h2>
                    <img
                        className="d-block w-100 slider-img"
                        src={slider1}
                        alt="First slide"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                    <h2><span className='slider-heading'>MARKETING</span></h2>
                    <img
                        className="d-block w-100 slider-img"
                        src={slider2}
                        alt="Second slide"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                    <h2><span className='slider-heading'>SOCIAL MEDIA</span></h2>
                    <img
                        className="d-block w-100 slider-img"
                        src={slider3}
                        alt="Third slide"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                    <h2><span className='slider-heading'>SEO</span></h2>
                    <img
                        className="d-block w-100 slider-img"
                        src={slider4}
                        alt="Third slide"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                    <h2><span className='slider-heading'>EMAIL MARKETING</span></h2>
                    <img
                        className="d-block w-100 slider-img"
                        src={slider5}
                        alt="Third slide"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Item>
                </Carousel>
                
            </div>
            <div className='spacer'></div>
            <div>
                <Container className="my-5">
                    <Row>
                    <Col lg={12}>
                        <div className='about-content'>
                            <h3><span>Digital Marketing Co.</span></h3>
                            <p>
                            We're a digital marketing agency that specializes in helping businesses
                            increase their online presence and reach their target audience.
                            </p>
                            <p>
                            Our services include SEO, social media marketing, email marketing, and
                            content marketing. We work with businesses of all sizes and industries to
                            develop custom strategies that meet their unique needs.
                            </p>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        </section>
        
    </>
    );
}