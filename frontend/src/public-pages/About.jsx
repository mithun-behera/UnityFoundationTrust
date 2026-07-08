import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeart,
  FaBullseye,
  FaEye,
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaBullhorn,
  FaQuoteLeft,
} from "react-icons/fa";

function About() {
  const values = [
    {
      title: "Compassion",
      text: "We treat every person with care, dignity, and respect.",
      icon: <FaHeart />,
      color: "danger",
    },
    {
      title: "Transparency",
      text: "We work responsibly and focus on meaningful community support.",
      icon: <FaShieldAlt />,
      color: "primary",
    },
    {
      title: "Unity",
      text: "We bring donors, volunteers, and communities together.",
      icon: <FaHandsHelping />,
      color: "success",
    },
  ];

  return (
    <>
      {/* Page Heading */}
      <section className="bg-dark text-white py-5">
        <Container>
          <div className="text-center py-md-3">
            <p className="text-primary fw-bold mb-2">ABOUT OUR FOUNDATION</p>

            <h1 className="display-6 fw-bold mb-3">
              Serving Humanity Through Unity
            </h1>

            <p className="text-light mb-0 mx-auto" style={{ maxWidth: "700px" }}>
              Unity Foundation Trust works to support people through food,
              education, healthcare, and community welfare programs.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={6}>
              <p className="text-primary fw-bold mb-2">OUR STORY</p>

              <h2 className="fw-bold mb-3">
                Building Stronger Communities Together
              </h2>

              <p className="text-secondary">
                Unity Foundation Trust was created with a simple purpose: to
                support people when they need help the most. We believe that
                every contribution, no matter how small, can create a positive
                change in someone’s life.
              </p>

              <p className="text-secondary mb-0">
                Through the support of members, donors, and volunteers, we work
                on food distribution, education support, medical assistance,
                and community development activities.
              </p>
            </Col>

            <Col xs={12} lg={6}>
              <Card bg="dark" text="white" className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <FaHeart className="display-4 text-danger mb-3" />

                  <h3 className="fw-bold mb-3">Our Promise</h3>

                  <p className="text-light mb-0">
                    We aim to serve communities with compassion, responsibility,
                    and unity while creating opportunities for a better future.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission and Vision */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <FaBullseye className="text-primary fs-1 mb-3" />

                  <h3 className="fw-bold mb-3">Our Mission</h3>

                  <p className="text-secondary mb-0">
                    To provide practical support to individuals and families
                    through food, education, healthcare, and welfare programs,
                    while encouraging people to contribute to society.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <FaEye className="text-success fs-1 mb-3" />

                  <h3 className="fw-bold mb-3">Our Vision</h3>

                  <p className="text-secondary mb-0">
                    To build caring, empowered, and inclusive communities where
                    every person has access to support, opportunity, and hope.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold mb-2">WHAT GUIDES US</p>
            <h2 className="fw-bold mb-3">Our Core Values</h2>
            <p className="text-secondary mb-0">
              These values guide every program, campaign, and decision.
            </p>
          </div>

          <Row className="g-4">
            {values.map((value) => (
              <Col xs={12} md={6} lg={4} key={value.title}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className={`fs-1 text-${value.color} mb-3`}>
                      {value.icon}
                    </div>

                    <h4 className="fw-bold">{value.title}</h4>

                    <p className="text-secondary mb-0">{value.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Founder / Team */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={5}>
              <Card bg="dark" text="white" className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5 text-center">
                  <FaUsers className="display-3 text-primary mb-3" />

                  <h3 className="fw-bold mb-1">Unity Foundation Team</h3>

                  <p className="text-light mb-0">
                    A group of committed members and volunteers working for
                    community welfare.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={7}>
              <p className="text-primary fw-bold mb-2">OUR TEAM</p>

              <h2 className="fw-bold mb-3">
                People Working With Purpose
              </h2>

              <p className="text-secondary">
                Our foundation is supported by dedicated members, donors,
                volunteers, and community partners. Together, we plan and
                deliver programs that focus on real local needs.
              </p>

              <div className="d-flex gap-3 mt-4">
                <FaQuoteLeft className="text-primary fs-3 flex-shrink-0" />

                <p className="text-secondary mb-0 fst-italic">
                  “When people work together with compassion, even a small
                  effort can create a big impact.”
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Statistics */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <div className="text-center mb-5">
            <p className="fw-bold mb-2">OUR IMPACT</p>
            <h2 className="fw-bold mb-0">Together, We Are Making a Difference</h2>
          </div>

          <Row className="g-3 text-center">
            <Col xs={12} sm={6} lg={3}>
              <div className="p-3">
                <FaUsers className="fs-1 mb-2" />
                <h2 className="fw-bold mb-1">748+</h2>
                <p className="mb-0">Donors</p>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <div className="p-3">
                <FaHandHoldingHeart className="fs-1 mb-2" />
                <h2 className="fw-bold mb-1">1,098+</h2>
                <p className="mb-0">Lives Supported</p>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <div className="p-3">
                <FaBullhorn className="fs-1 mb-2" />
                <h2 className="fw-bold mb-1">9</h2>
                <p className="mb-0">Active Campaigns</p>
              </div>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <div className="p-3">
                <FaHeart className="fs-1 mb-2" />
                <h2 className="fw-bold mb-1">₹ 11L+</h2>
                <p className="mb-0">Support Raised</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;