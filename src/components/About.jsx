import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutus from '../../src/assets/images/aboutus.jpg';
export default function About() {
  return (
    <>
        <div className='page-mgt'>
            <section>
                <div className='conatiner'>
                    <div className='page-title-area'>
                        <div className='page-title-content'>
                            <div>
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='page-mgt'></div>
        <div>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6}>
                        <img src={aboutus} className='about-img-height' alt='' />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='about-content'>
                            <span>ABOUT US</span>
                            <h3>We are dynamic team of Email Marketing and SEO </h3>
                                <p>
                                Welcome to our team! We are a dedicated group of professionals who specialize in email marketing and search engine optimization (SEO). Our goal is to help businesses of all sizes reach their target audiences and grow their online presence.<br/>
                                Email marketing is a powerful tool that allows you to connect with your customers and keep them engaged with your brand. Our team has years of experience in creating effective email marketing campaigns that drive results. From crafting compelling subject lines to designing eye-catching templates, we know what it takes to get your emails opened and read.</p>

                                <p>In addition to email marketing, we also specialize in SEO. Search engine optimization is the process of optimizing your website to rank higher in search engine results pages (SERPs). This helps potential customers find your website when they search for relevant keywords related to your business. Our team has a deep understanding of the latest SEO strategies and tactics, and we use this knowledge to help businesses improve their search engine rankings and drive more traffic to their websites.<br/>
                                At our core, we are passionate about helping businesses succeed online. We believe in building long-term relationships with our clients and providing them with the highest level of service and support. If you're looking to take your email marketing or SEO to the next level, we're here to help. Get in touch with us today to learn more about our services and how we can help you achieve your business goals.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}
