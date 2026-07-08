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
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handlePageChange(pageName) {
    setPublicPage(pageName);
    goToTop();
  }

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <div className="d-flex align-items-center mb-3">
              <FaHeart className="text-danger fs-3 me-2" />
              <h4 className="mb-0">Unity Foundation Trust</h4>
            </div>

            <p className="text-secondary mb-3">
              Serving humanity through unity. We support people through food,
              education, medical care, and community development programs.
            </p>

            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-circle"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Button>

              <Button
                variant="outline-danger"
                size="sm"
                className="rounded-circle"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Button>

              <Button
                variant="outline-info"
                size="sm"
                className="rounded-circle"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Button>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={2}>
            <h5 className="mb-3">Quick Links</h5>

            <div className="d-flex flex-column gap-2">
              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("Home")}
              >
                Home
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("About")}
              >
                About Us
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("OurWork")}
              >
                Our Work
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("Campaigns")}
              >
                Campaigns
              </Button>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <h5 className="mb-3">Get Involved</h5>

            <div className="d-flex flex-column gap-2">
              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("User")}
              >
                Become a Member
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("Campaigns")}
              >
                Donate to a Campaign
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("Contact")}
              >
                Contact Us
              </Button>

              <Button
                variant="link"
                className="text-secondary text-start p-0 text-decoration-none"
                onClick={() => handlePageChange("Login")}
              >
                Admin Login
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <h5 className="mb-3">Contact Information</h5>

            <div className="d-flex gap-2 mb-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span className="text-secondary">
                Hyderabad, Telangana, India
              </span>
            </div>

            <div className="d-flex gap-2 mb-3">
              <FaPhoneAlt className="text-primary mt-1" />
              <span className="text-secondary">+91 98765 43210</span>
            </div>

            <div className="d-flex gap-2">
              <FaEnvelope className="text-primary mt-1" />
              <span className="text-secondary">
                unityfoundation@gmail.com
              </span>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <p className="text-secondary mb-0 text-center text-md-start">
            © 2026 Unity Foundation Trust. All rights reserved.
          </p>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={goToTop}
            className="align-self-center"
          >
            <FaArrowUp className="me-2" />
            Back to Top
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default PublicFooter;