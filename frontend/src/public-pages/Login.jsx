import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaSignInAlt, FaUserPlus, FaUserShield } from "react-icons/fa";

function Login({ openAdminDashboard, goToMemberPage }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    loginType: "member",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Please enter email and password.");
      return;
    }

    setErrorMessage("");

    /*
      Temporary frontend login:

      Admin:
      Email: admin@unityfoundation.org
      Password: admin123

      Member:
      Any email + password with 6 or more characters
    */

    if (formData.loginType === "admin") {
      if (
        formData.email === "beheramithun2021@gmail.com" &&
        formData.password === "admin123"
      ) {
        openAdminDashboard();
      } else {
        setErrorMessage("Invalid admin email or password.");
      }

      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Member password must contain at least 6 characters.");
      return;
    }

    alert("Member login successful. Member dashboard will be added next.");
  }

  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">WELCOME BACK</p>

          <h1 className="display-5 fw-bold">Login to Your Account</h1>

          <p className="lead text-secondary mx-auto mt-3">
            Login as a member or administrator of Unity Foundation Trust.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={9} lg={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <FaSignInAlt className="text-primary fs-1 mb-3" />
                    <h3 className="fw-bold">Account Login</h3>
                    <p className="text-secondary mb-0">
                      Enter your details to continue.
                    </p>
                  </div>

                  {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                  )}

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Login As</Form.Label>

                      <Form.Select
                        name="loginType"
                        value={formData.loginType}
                        onChange={handleChange}
                      >
                        <option value="member">Member</option>
                        <option value="admin">Administrator</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>

                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">
                      <FaSignInAlt className="me-2" />
                      Login
                    </Button>
                  </Form>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="text-secondary mb-2">
                      Not a member yet?
                    </p>

                    <Button
                      variant="outline-primary"
                      onClick={goToMemberPage}
                    >
                      <FaUserPlus className="me-2" />
                      Become a Member
                    </Button>
                  </div>

                  <div className="bg-light border rounded p-3 mt-4 small">
                    <div className="fw-bold mb-1">
                      <FaUserShield className="me-2" />
                      Temporary Admin Login
                    </div>

                    <div>Email: beheramithun2021@gamil.com</div>
                    <div>Password: admin123</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;