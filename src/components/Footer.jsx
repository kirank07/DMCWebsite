import React, { useState } from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../App.css';

export default function Home() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission here
        console.log(email);
        setEmail('');
    };
    return(
        <>
            <div className='page-mgt'></div>
            <section className='subscribe-section'>
                <div className='container'>
                    <div className='subscribe-area-content'>
                        <div className='subscribe-content'>
                            <span className='sub-title'>Get Started Instantly!</span>
                            <h2>Get the only new update from this newsletter</h2>
                            <Form onSubmit={handleSubmit} className='newsletter-form'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    className='input-newsletter'
                                    onChange={(event) => setEmail(event.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className='copyright'>
                    <Container>
                        <p>&copy; 2023 Digital Marketing Co.</p>
                    </Container>
                </div>
            </footer>

        </>
    )
}