import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";

function User() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [memberId, setMemberId] = useState("");
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
      !formData.phone ||
      !formData.email ||
      !formData.city ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const newMemberId = `MEM-${1000 + Math.floor(Math.random() * 9000)}`;

    setMemberId(newMemberId);
    setShowSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">JOIN OUR FOUNDATION</p>

          <h1 className="display-5 fw-bold">Become a Member</h1>

          <p className="lead text-secondary mx-auto mt-3">
            Join Unity Foundation Trust and become part of meaningful
            community work.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <FaUserPlus className="text-primary fs-1 mb-3" />
                    <h3 className="fw-bold">Member Registration Form</h3>
                    <p className="text-secondary mb-0">
                      Fill your details to create your member account.
                    </p>
                  </div>

                  {showSuccess && (
                    <Alert variant="success">
                      <FaCheckCircle className="me-2" />
                      Registration successful. Your Member ID is{" "}
                      <strong>{memberId}</strong>.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter 10-digit phone number"
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

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 6 characters"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Button type="submit" variant="primary" size="lg">
                          <FaUserPlus className="me-2" />
                          Create Member Account
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

export default User;