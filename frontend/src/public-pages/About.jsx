import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeart,
  FaBullseye,
  FaEye,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">ABOUT OUR FOUNDATION</p>

          <h1 className="display-5 fw-bold">
            Working Together for Stronger Communities
          </h1>

          <p className="lead text-secondary mx-auto mt-3" style={{ maxWidth: "750px" }}>
            Unity Foundation Trust is a community-focused organization that
            supports people through food, education, healthcare, and social
            welfare programs.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-3">Who We Are</h2>

              <p className="text-secondary">
                Unity Foundation Trust works with donors, volunteers, and
                community members to provide practical support to people who
                need it most.
              </p>

              <p className="text-secondary mb-0">
                Our goal is to create positive change through transparent
                campaigns, responsible use of donations, and active community
                participation.
              </p>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="fs-2 text-danger me-3">
                      <FaHeart />
                    </div>
                    <div>
                      <h5 className="mb-1">Community First</h5>
                      <p className="text-secondary mb-0">
                        We focus on real needs and practical support.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <div className="fs-2 text-primary me-3">
                      <FaUsers />
                    </div>
                    <div>
                      <h5 className="mb-1">People Together</h5>
                      <p className="text-secondary mb-0">
                        Donors, members, and volunteers work as one team.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="fs-2 text-success me-3">
                      <FaBullseye />
                    </div>
                    <div>
                      <h5 className="mb-1">Meaningful Impact</h5>
                      <p className="text-secondary mb-0">
                        Every campaign is focused on measurable support.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <FaBullseye className="fs-1 text-primary mb-3" />
                  <h3>Our Mission</h3>
                  <p className="text-secondary mb-0">
                    To support underprivileged individuals and families through
                    food, education, medical assistance, and community welfare.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <FaEye className="fs-1 text-success mb-3" />
                  <h3>Our Vision</h3>
                  <p className="text-secondary mb-0">
                    To build an inclusive society where every person has access
                    to dignity, opportunity, and essential support.
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

export default About;