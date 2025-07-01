import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/AboutPage.css';
import 'animate.css';
import team from '../assets/images/t1.jpg';
import office1 from '../assets/images/office.jpg';
import team2 from '../assets/images/t5.webp';
import team3 from '../assets/images/t3.jpg';

function AboutPage() {
  return (
    <div className="aboutpage text-white d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Forgive Technologies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <Container className="flex-grow-1 py-5">

        <h2 className="text-center mb-5 animate_animated animate_fadeInDown">About Forgive Technologies</h2>

        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={office1}
              fluid
              rounded
              className="shadow-lg animate_animated animate_fadeInLeft"
            />
          </Col>
          <Col md={6}>
            <p className="lead animate_animated animate_fadeInUp">
              Forgive Technologies is a visionary IT company focused on empowering learners and businesses
              with cutting-edge digital skills and tools. We are passionate about crafting solutions,
              building careers, and fostering innovation.
            </p>
            <p className="animate_animated animate_fadeInUp animate_delay-1s">
              From web development to UI/UX design, our platform provides top-notch training courses
              and mentorship from industry experts. With a focus on real-world projects and personalized
              learning paths, we aim to build the next generation of tech leaders.
            </p>
          </Col>
        </Row>

        {/* Vision & Mission */}
        <Row className="text-center mb-5">
          <Col md={6} className="mb-4 animate_animated animate_fadeInUp">
            <h4>Our Vision</h4>
            <p className="small">To democratize access to advanced technology education and create an inclusive, tech-empowered future.</p>
          </Col>
          <Col md={6} className="mb-4 animate_animated animate_fadeInUp animate_delay-1s">
            <h4>Our Mission</h4>
            <p className="small">To deliver innovative learning experiences that enable individuals and organizations to thrive in a digital world.</p>
          </Col>
        </Row>

        {/* Team Section */}
        <h3 className="text-center mb-4 animate_animated animate_fadeIn">Our Team</h3>
        <Row className="g-4 justify-content-center">
          {[
            { name: "Alice Johnson", role: "Lead Developer", img: team },
            { name: "Bob Smith", role: "UI/UX Designer", img: team2 },
            { name: "Charlie Lee", role: "Full Stack Engineer", img: team3 }
          ].map((member, idx) => (
            <Col key={idx} md={4} className="text-center">
              <Card className="bg-dark text-white border-0 h-100 animate_animated animate_zoomIn">
                <Card.Img
                  variant="top"
                  src={member.img}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
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

export default AboutPage;