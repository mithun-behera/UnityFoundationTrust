import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import {
  FaUserPlus,
  FaHeart,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

function User({ setPublicPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
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
      alert("Passwords do not match");
      return;
    }

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} lg={5}>
            <div className="mb-4">
              <p className="text-primary fw-bold mb-2">
                JOIN OUR COMMUNITY
              </p>

              <h1 className="fw-bold mb-3">Become a Member</h1>

              <p className="text-secondary">
                Join Unity Foundation Trust and become part of a community
                working to support people through food, education, healthcare,
                and social welfare programs.
              </p>
            </div>

            <Card bg="dark" text="white" className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Member Benefits</h4>

                <div className="d-flex gap-3 mb-3">
                  <FaHeart className="text-danger fs-4 mt-1" />

                  <div>
                    <h6 className="mb-1">Support Meaningful Causes</h6>
                    <p className="text-light mb-0">
                      Take part in campaigns that help communities.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-3">
                  <FaHandsHelping className="text-warning fs-4 mt-1" />

                  <div>
                    <h6 className="mb-1">Volunteer Opportunities</h6>
                    <p className="text-light mb-0">
                      Participate in foundation events and programs.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <FaCheckCircle className="text-success fs-4 mt-1" />

                  <div>
                    <h6 className="mb-1">Track Your Contribution</h6>
                    <p className="text-light mb-0">
                      View your support and activities in your profile later.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <FaUserPlus className="text-primary fs-3" />
                  <h3 className="fw-bold mb-0">Member Registration</h3>
                </div>

                {showSuccess && (
                  <Alert variant="success">
                    Registration successful. Your member account UI has been
                    created.
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
                          placeholder="Enter full name"
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
                          placeholder="Enter email address"
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
                          placeholder="Enter 10-digit phone number"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
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

                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Create password"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Button type="submit" variant="primary" className="w-100">
                        <FaUserPlus className="me-2" />
                        Create Member Account
                      </Button>
                    </Col>

                    <Col xs={12}>
                      <p className="text-center text-secondary mb-0">
                        Already a member?{" "}
                        <Button
                          type="button"
                          variant="link"
                          className="p-0 text-decoration-none"
                          onClick={() => setPublicPage("Login")}
                        >
                          Login here
                        </Button>
                      </p>
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

export default User;