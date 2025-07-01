import React from 'react'; import { Container, Form, Button, Col, Navbar, Nav } from 'react-bootstrap'; import { Link } from 'react-router-dom'; import '../assets/SignInPage.css';

function SignInPage() { 
    return ( 
    <div className="signin-page d-flex flex-column min-vh-100"> 
    {/* Navbar */} 
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4">
         <Navbar.Brand as={Link} to="/">Forgive Technologies</Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
         <Navbar.Collapse id="basic-navbar-nav"> <Nav className="ms-auto"> <Nav.Link as={Link} to="/">Home</Nav.Link> <Nav.Link as={Link} to="/about">About</Nav.Link>c <Nav.Link as={Link} to="/courses">Courses</Nav.Link> <Nav.Link as={Link} to="/contact">Contact</Nav.Link> <Nav.Link as={Link} to="/signin">Sign In</Nav.Link> </Nav> </Navbar.Collapse> </Navbar>

{/* Sign In Form */}
  <Container className="flex-grow-1 d-flex align-items-center justify-content-center pt-5 mt-5">
    <Col md={5} className="signin-form p-4 shadow rounded">
      <h2 className="text-center mb-4 text-white">Sign In</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Col>
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

export default SignInPage;