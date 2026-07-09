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
  FaHeart,
  FaDonate,
  FaShieldAlt,
  FaArrowLeft,
} from "react-icons/fa";

function PublicDonation({ setPublicPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationType: "Food Support",
    amount: "",
    paymentMethod: "UPI",
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
      !formData.amount
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (Number(formData.amount) <= 0) {
      alert("Donation amount must be greater than 0");
      return;
    }

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      donationType: "Food Support",
      amount: "",
      paymentMethod: "UPI",
      message: "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToCampaigns() {
    setPublicPage("Campaigns");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Button
              variant="link"
              className="text-decoration-none px-0 mb-3"
              onClick={goToCampaigns}
            >
              <FaArrowLeft className="me-2" />
              Back to Campaigns
            </Button>

            <Row className="g-4">
              <Col xs={12} lg={5}>
                <Card bg="dark" text="white" className="border-0 h-100 shadow-sm">
                  <Card.Body className="p-4 p-md-5">
                    <FaHeart className="text-danger display-5 mb-3" />

                    <h2 className="fw-bold mb-3">
                      Your Support Creates Change
                    </h2>

                    <p className="text-light">
                      Your donation helps Unity Foundation Trust support food,
                      education, healthcare, and emergency relief programs.
                    </p>

                    <hr className="border-secondary my-4" />

                    <div className="d-flex gap-3 mb-3">
                      <FaDonate className="text-warning fs-4 mt-1" />

                      <div>
                        <h6 className="mb-1">Direct Community Support</h6>
                        <p className="text-light mb-0">
                          Your contribution supports people who need help.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <FaShieldAlt className="text-success fs-4 mt-1" />

                      <div>
                        <h6 className="mb-1">Secure Donation Process</h6>
                        <p className="text-light mb-0">
                          Payment integration will be added in the backend phase.
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} lg={7}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4 p-md-5">
                    <h3 className="fw-bold mb-1">Make a Donation</h3>

                    <p className="text-secondary mb-4">
                      Fill in your details to support a cause.
                    </p>

                    {showSuccess && (
                      <Alert variant="success">
                        Thank you for your support. Your donation request has
                        been submitted successfully.
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col xs={12} md={6}>
                          <Form.Group>
                            <Form.Label>Full Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                          <Form.Group>
                            <Form.Label>Email Address *</Form.Label>
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
                            <Form.Label>Phone Number *</Form.Label>
                            <Form.Control
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter 10-digit phone number"
                              maxLength={10}
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                          <Form.Group>
                            <Form.Label>Donation Type</Form.Label>
                            <Form.Select
                              name="donationType"
                              value={formData.donationType}
                              onChange={handleChange}
                            >
                              <option>Food Support</option>
                              <option>Education Support</option>
                              <option>Medical Support</option>
                              <option>Disaster Relief</option>
                              <option>General Donation</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                          <Form.Group>
                            <Form.Label>Donation Amount (₹) *</Form.Label>
                            <Form.Control
                              type="number"
                              name="amount"
                              value={formData.amount}
                              onChange={handleChange}
                              placeholder="Enter donation amount"
                              min="1"
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                          <Form.Group>
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Select
                              name="paymentMethod"
                              value={formData.paymentMethod}
                              onChange={handleChange}
                            >
                              <option>UPI</option>
                              <option>Debit Card</option>
                              <option>Credit Card</option>
                              <option>Net Banking</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label>Message (Optional)</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Write a message for the foundation"
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12}>
                          <Button
                            type="submit"
                            variant="primary"
                            className="w-100"
                          >
                            <FaHeart className="me-2" />
                            Continue to Payment
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PublicDonation;