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
    phone: "",
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
      !formData.phone ||
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
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-bold mb-2">GET IN TOUCH</p>
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="text-secondary mb-0">
            Have a question or want to support our mission? Send us a message.
          </p>
        </div>

        <Row className="g-4">
          <Col xs={12} lg={5}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold mb-4">Contact Information</h3>

                <div className="d-flex gap-3 mb-4">
                  <FaMapMarkerAlt className="text-primary fs-4 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="text-secondary mb-0">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <FaPhoneAlt className="text-success fs-4 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="text-secondary mb-0">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <FaEnvelope className="text-danger fs-4 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="text-secondary mb-0">
                      unityfoundation@gmail.com
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                {showSuccess && (
                  <Alert variant="success">
                    Your message has been sent successfully.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
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

                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter subject"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
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

                    <Col xs={12}>
                      <Button type="submit" variant="primary" className="w-100">
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
  );
}

export default Contact;