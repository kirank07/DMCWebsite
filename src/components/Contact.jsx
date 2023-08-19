import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
//import { database } from './firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import contactus from '../../src/assets/images/contactus.jpg';
library.add(faFacebook, faTwitter, faInstagram);

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    // const Push = () => {
    //     database.ref("user").set({
    //         name : name,
    //         emaiil : email,
    //         message : message,
    //         subject : subject,
    //         }).catch(alert);
    // }

  return (
    <>
        <div className='page-mgt'></div>
        <section>
            <div className='page-title-area'>
                <div className='conatiner'>
                    <div className='page-title-content'>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </section>
    
        <div className='spacer'></div>
        <div>
            <Container>
                <Row className="justify-content-center" >
                    <Col lg={4} md={12}>
                    <div className='contact-box'>
                        <div className='icon'><i><FontAwesomeIcon icon={faPhone} /></i></div>
                        <div>
                            <h4>Phone</h4>
                            <p>020 125 256 256</p>
                        </div>
                    
                    </div>
                    </Col>
                    <Col lg={4} md={12}>
                    <div className='contact-box'>
                        <div className='icon'><i><FontAwesomeIcon icon={faEnvelope} /></i></div>
                        <div>
                            <h4>Email</h4>
                            <p>020 125 256 256</p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4} md={12}>
                    <div className='contact-box'>
                        <div className='icon'><i><FontAwesomeIcon icon={faLocationDot} /></i></div>
                        <div>
                            <h4>Location</h4>
                            <p>Pune</p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <div className='spacer'></div>
            <Container className="centered-container">
                <Row className="align-items-center" >
                    <Col lg={12} md={6}>
                        <div className='contact-text about-content'>
                            <span className='about-content span'>GET IN TOUCH</span>
                            <p>We are here for you.</p>
                        </div>
                    </Col>
                </Row>
                <Row  className="centered-container">
                    <Col lg={6} md={6}>
                        <Form className='contact-form'>
                            <Row>
                                <Col lg={6}>
                                    <div className='form-group'>
                                        <input className='form-control'
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        />
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className='form-group'>
                                        <input className='form-control'
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='form-group'>
                                        <input className='form-control'
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={phonenumber}
                                        onChange={(event) => setPhonenumber(event.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='form-group'>
                                        <input className='form-control'
                                        type="text"
                                        placeholder="Enter subject address"
                                        value={subject}
                                        onChange={(event) => setSubject(event.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='form-group'>
                                        <input className='form-control'
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter your message"
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} sm={12}>
                                    {/* <Button type="submit" variant="outline-primary" onClick={Push}>Send Message</Button> */}
                                    <Button type="submit" variant="outline-primary">Send Message</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={contactus} className='about-img-height' alt='' />
                    </Col>
                </Row>
                <div className='contact-text about-content'>
                <ul className='social-links'>
                    <li><FontAwesomeIcon icon={['fab', 'facebook']} /></li>
                    <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
                    <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
                </ul>
                </div>
            </Container>
        </div>
    </>
  );
}
