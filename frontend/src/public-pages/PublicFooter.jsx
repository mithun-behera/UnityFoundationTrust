import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function PublicFooter({ setPublicPage }) {
  function goToPage(pageName) {
    setPublicPage(pageName);
    window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row className="g-4 pb-4">
          <Col xs={12} md={6} lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaHeart className="text-danger fs-3" />
              <h4 className="mb-0 fw-bold">Unity Foundation Trust</h4>
            </div>

            <p className="text-light">
              Serving humanity through unity. We support food, education,
              healthcare, and community welfare programs.
            </p>

            <div className="d-flex gap-2">
              <Button
                variant="outline-light"
                size="sm"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Button>

              <Button
                variant="outline-light"
                size="sm"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Button>

              <Button
                variant="outline-light"
                size="sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Button>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={2}>
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <div className="d-flex flex-column align-items-start gap-2">
              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("Home")}
              >
                Home
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("About")}
              >
                About Us
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("OurWork")}
              >
                Our Work
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("Campaigns")}
              >
                Campaigns
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("Contact")}
              >
                Contact
              </Button>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <h5 className="fw-bold mb-3">Get Involved</h5>

            <div className="d-flex flex-column align-items-start gap-2">
              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("User")}
              >
                Become a Member
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("Campaigns")}
              >
                Donate Now
              </Button>

              <Button
                variant="link"
                className="text-light text-decoration-none p-0"
                onClick={() => goToPage("User")}
              >
                Volunteer With Us
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <div className="d-flex gap-2 mb-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span className="text-light">
                Hyderabad, Telangana, India
              </span>
            </div>

            <div className="d-flex gap-2 mb-3">
              <FaPhoneAlt className="text-success mt-1" />
              <span className="text-light">+91 98765 43210</span>
            </div>

            <div className="d-flex gap-2">
              <FaEnvelope className="text-danger mt-1" />
              <span className="text-light">
                unityfoundation@gmail.com
              </span>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-3">
          <p className="text-secondary mb-0 text-center text-md-start">
            © 2026 Unity Foundation Trust. All rights reserved.
          </p>

          <Button
            variant="outline-light"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="me-1" />
            Back to Top
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default PublicFooter;