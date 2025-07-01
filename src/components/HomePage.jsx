import React from 'react';
import { Container, Button, Navbar, Nav, Card, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/HomePage.css';
import 'animate.css';
import rjs from '../assets/images/rj.png';
import nodejs from '../assets/images/nd.jfif';
import uiux from '../assets/images/ui.jpg';
import car from '../assets/images/c1.webp';
import car1 from '../assets/images/c2.jpg';

function HomePage() {
  return (
    <div className="homepage text-white">

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 top">
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

      {/* Carousel */}
      <Carousel fade className="carousel-container">
        <Carousel.Item>
          <img className="d-block w-100" src={car1} alt="First slide" />
          <Carousel.Caption>
            <h3>Innovate with Us</h3>
            <p>Building the future with passion and precision</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={car} alt="Second slide" />
          <Carousel.Caption>
            <h3>Learn & Grow</h3>
            <p>Top-quality courses for every learner</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Marquee */}
      <div className="full-width-marquee text-dark py-2">
        <marquee behavior="scroll" direction="left">🔥 Enroll now and get 50% off on premium tech courses! 🔥</marquee>
      </div>

      {/* Course Cards */}
      {/* Course Cards */}
<Container className="my-5">
  <h2 className="text-center mb-4">Popular Courses</h2>

  {/** Define course details */}
  {(() => {
    const courses = [
      { title: "ReactJS", img: rjs },
      { title: "NodeJS", img: nodejs },
      { title: "UI/UX Design", img: uiux },
    ];

    return (
      <Row className="g-4">
        {courses.map((course, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  Master {course.title} with industry experts and hands-on projects.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  })()}
</Container>

      {/* About Us Preview */}
      <Container className="text-center my-5">
        <h2>About Forgive Technologies</h2>
        <p className="lead">
          We empower learners with cutting-edge tech training and career support. Our vision is to make future tech accessible to all.
        </p>
        <Link to="/about">
          <Button variant="outline-light">Learn More</Button>
        </Link>
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

export default HomePage;