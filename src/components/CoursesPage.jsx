import React from 'react';
import { Container, Card, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/CoursesPage.css';
import dss from '../assets/images/ds.jpg';
import ccs from '../assets/images/cc.jpg';
import fsd from '../assets/images/fs.webp';
import uiux from '../assets/images/ui.jpg';
import rjs from '../assets/images/rj.png';
import cys from '../assets/images/cy.jpg';

function CoursesPage() {
  const courses = [
    {
      title: 'Full Stack Development',
      desc: 'Master frontend and backend with real-world projects.',
      img: fsd,
    },
    {
      title: 'ReactJS Essentials',
      desc: 'Build modern UIs using React and hooks.',
      img:rjs ,
    },
    {
      title: 'UI/UX Design',
      desc: 'Learn design tools, prototyping, and user research.',
      img: uiux,
    },
    {
      title: 'Cybersecurity',
      desc: 'Understand ethical hacking and secure app development.',
      img:cys ,
    },
    {
      title: 'Data Science',
      desc: 'Work with real data, Python, ML models and insights.',
      img: dss,
    },
    {
      title: 'Cloud Computing',
      desc: 'Master AWS, Azure, and DevOps fundamentals.',
      img: ccs,
    },
  ];

  return (
    <div className="courses-page text-white d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4">
        <Navbar.Brand as={Link} to="/">Forgive Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-4 animate_animated animate_fadeInDown">Explore Our Courses</h2>
        <Row className="g-4">
          {courses.map((course, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 shadow-lg animate_animated animate_fadeInUp">
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.desc}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
  );
}

export default CoursesPage;