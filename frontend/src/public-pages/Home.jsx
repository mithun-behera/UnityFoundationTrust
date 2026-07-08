import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaHeart,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-dark text-white py-5">
        <Container className="py-5">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="text-primary fw-bold mb-2">
                UNITY FOUNDATION TRUST
              </p>

              <h1 className="display-4 fw-bold">
                Together We Can Build a Better Tomorrow
              </h1>

              <p className="lead text-secondary mt-3">
                We support families and communities through food, education,
                medical care, and social welfare programs.
              </p>

              <Button variant="primary" size="lg" className="me-3">
                Become a Member <FaArrowRight className="ms-2" />
              </Button>

              <Button variant="outline-light" size="lg">
                View Our Work
              </Button>
            </Col>

            <Col lg={5}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 text-dark">
                  <h4 className="fw-bold">Our Impact</h4>

                  <Row className="g-3 mt-2">
                    <Col xs={6}>
                      <div className="bg-light rounded p-3 text-center">
                        <h3 className="text-primary mb-1">498+</h3>
                        <small>Donors</small>
                      </div>
                    </Col>

                    <Col xs={6}>
                      <div className="bg-light rounded p-3 text-center">
                        <h3 className="text-success mb-1">1,098+</h3>
                        <small>People Helped</small>
                      </div>
                    </Col>

                    <Col xs={6}>
                      <div className="bg-light rounded p-3 text-center">
                        <h3 className="text-danger mb-1">63+</h3>
                        <small>Volunteers</small>
                      </div>
                    </Col>

                    <Col xs={6}>
                      <div className="bg-light rounded p-3 text-center">
                        <h3 className="text-warning mb-1">9</h3>
                        <small>Campaigns</small>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">How We Help</h2>
            <p className="text-secondary">
              Our foundation works in important areas of community support.
            </p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaHeart className="text-danger fs-1 mb-3" />
                  <h4>Food Support</h4>
                  <p className="text-secondary mb-0">
                    Providing food and essential supplies to families in need.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaGraduationCap className="text-primary fs-1 mb-3" />
                  <h4>Education Support</h4>
                  <p className="text-secondary mb-0">
                    Helping children continue their education with resources.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaHandHoldingHeart className="text-success fs-1 mb-3" />
                  <h4>Medical Support</h4>
                  <p className="text-secondary mb-0">
                    Supporting medical camps and health care for communities.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;