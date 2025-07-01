import React from 'react'; import { Container, Form, Button, Row, Col, Navbar, Nav } from 'react-bootstrap'; import { Link } from 'react-router-dom'; import '../assets/ContactPage.css';

function ContactPage() { return ( <div className="contact-page d-flex flex-column min-vh-100"> {/* Navbar */} <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4"> <Navbar.Brand as={Link} to="/">Forgive Technologies</Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" /> <Navbar.Collapse id="basic-navbar-nav"> <Nav className="ms-auto"> <Nav.Link as={Link} to="/">Home</Nav.Link> <Nav.Link as={Link} to="/about">About</Nav.Link> <Nav.Link as={Link} to="/courses">Courses</Nav.Link> <Nav.Link as={Link} to="/contact">Contact</Nav.Link> <Nav.Link as={Link} to="/signin">Sign In</Nav.Link> </Nav> </Navbar.Collapse> </Navbar>

{/* Contact Form */}
  <Container className="flex-grow-1 pt-5 mt-5">
    <h2 className="text-center mb-4 text-white">Get in Touch</h2>
    <Row className="justify-content-center">
      <Col md={6}>
        <Form className="contact-form shadow p-4 rounded">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Send Message
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>

  {/* Footer */}
      {/* Footer */}
<footer className="footer-gradient text-white text-center py-4 mt-auto animate-glow w-100">
  <div className="row mx-0 px-3">
    <div className="col-md-4 mb-3 mb-md-0">
      <h5>Forgive Technologies</h5>
      <p className="small">Empowering future tech minds</p>
    </div>
    <div className="col-md-4 mb-3 mb-md-0">
      <h6>Quick Links</h6>
      <ul className="list-unstyled small">
        <li><a href="/about" className="text-white text-decoration-none">About</a></li>
        <li><a href="/courses" className="text-white text-decoration-none">Courses</a></li>
        <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
      </ul>
    </div>
    <div className="col-md-4">
      <h6>Follow Us</h6>
      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <hr className="bg-light my-3 mx-3" />
  <p className="mb-0 small px-3">© 2025 Forgive Technologies. All rights reserved.</p>
</footer>
   
</div>

); }

export default ContactPage;