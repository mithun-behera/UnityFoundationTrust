import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }

  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">CONTACT US</p>

          <h1 className="display-5 fw-bold">
            Get in Touch With Our Team
          </h1>

          <p className="lead text-secondary mx-auto mt-3">
            Have a question, suggestion, or want to support our work?
            Send us a message.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Contact Information</h4>

                  <div className="d-flex mb-4">
                    <FaMapMarkerAlt className="text-danger fs-4 me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Address</h6>
                      <p className="text-secondary mb-0">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <FaPhoneAlt className="text-primary fs-5 me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <p className="text-secondary mb-0">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <FaEnvelope className="text-success fs-5 me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <p className="text-secondary mb-0">
                        unityfoundation@gmail.com
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Send a Message</h4>

                  {showSuccess && (
                    <Alert variant="success">
                      Your message has been sent successfully.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter message subject"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Button type="submit" variant="primary">
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;