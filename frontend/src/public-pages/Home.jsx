import { Container, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import {
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
  FaBullhorn,
  FaArrowRight,
  FaCheckCircle,
  FaHandsHelping,
  FaShieldAlt,
  FaQuoteLeft,
} from "react-icons/fa"; 3

function Home({ setPublicPage }) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center g-4 py-md-4">
            <Col xs={12} lg={7}>
              <p className="text-primary fw-bold mb-2">
                SERVING HUMANITY THROUGH UNITY
              </p>

              <h1 className="display-5 fw-bold mb-3">
                Together We Can Create a Better Tomorrow
              </h1>

              <p className="lead text-secondary mb-4">
                Unity Foundation Trust supports families through food,
                education, medical care, and community development programs.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setPublicPage("Campaigns")}
                >
                  <FaHeart className="me-2" />
                  Donate Now
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => setPublicPage("User")}
                >
                  Become a Member
                  <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>

            <Col xs={12} lg={5}>
              <Card
                bg="secondary"
                text="white"
                className="border-0 shadow-sm"
              >
                <Card.Body className="p-4 p-md-5">
                  <FaHandHoldingHeart className="display-3 text-warning mb-3" />

                  <h3 className="fw-bold">Every Contribution Matters</h3>

                  <p className="mb-0 text-light">
                    Your support helps us reach more people and build stronger
                    communities.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-3">
            <Col xs={12} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="py-4">
                  <FaUsers className="fs-2 text-primary mb-2" />
                  <h3 className="fw-bold mb-1">748+</h3>
                  <p className="text-secondary mb-0">Donors</p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="py-4">
                  <FaHandHoldingHeart className="fs-2 text-danger mb-2" />
                  <h3 className="fw-bold mb-1">1,098+</h3>
                  <p className="text-secondary mb-0">Lives Supported</p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="py-4">
                  <FaBullhorn className="fs-2 text-warning mb-2" />
                  <h3 className="fw-bold mb-1">9</h3>
                  <p className="text-secondary mb-0">Active Campaigns</p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="py-4">
                  <FaHeart className="fs-2 text-success mb-2" />
                  <h3 className="fw-bold mb-1">₹ 11L+</h3>
                  <p className="text-secondary mb-0">Support Raised</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold mb-2">MAKE A DIFFERENCE</p>

            <h2 className="fw-bold mb-3">Featured Campaigns</h2>

            <p className="text-secondary mb-0">
              Support a campaign and help us create a meaningful change.
            </p>
          </div>

          <Row className="g-4">
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-danger">Food Support</span>
                    <FaBullhorn className="text-danger fs-4" />
                  </div>

                  <h4 className="fw-bold">Food for Children</h4>

                  <p className="text-secondary">
                    Help provide healthy meals to children and families in need.
                  </p>

                  <div className="d-flex justify-content-between small mb-2">
                    <span>Raised: ₹ 65,000</span>
                    <span>Target: ₹ 1,00,000</span>
                  </div>

                  <ProgressBar now={65} variant="danger" className="mb-3" />

                  <Button
                    variant="outline-danger"
                    className="w-100"
                    onClick={() => setPublicPage("Campaigns")}
                  >
                    Support Campaign
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">Education</span>
                    <FaBullhorn className="text-primary fs-4" />
                  </div>

                  <h4 className="fw-bold">Education Support</h4>

                  <p className="text-secondary">
                    Help students get books, school supplies, and learning
                    support.
                  </p>

                  <div className="d-flex justify-content-between small mb-2">
                    <span>Raised: ₹ 1,20,000</span>
                    <span>Target: ₹ 1,50,000</span>
                  </div>

                  <ProgressBar now={80} variant="primary" className="mb-3" />

                  <Button
                    variant="outline-primary"
                    className="w-100"
                    onClick={() => setPublicPage("Campaigns")}
                  >
                    Support Campaign
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-success">Medical Help</span>
                    <FaBullhorn className="text-success fs-4" />
                  </div>

                  <h4 className="fw-bold">Medical Help Drive</h4>

                  <p className="text-secondary">
                    Support urgent medical treatment and healthcare for families.
                  </p>

                  <div className="d-flex justify-content-between small mb-2">
                    <span>Raised: ₹ 80,000</span>
                    <span>Target: ₹ 80,000</span>
                  </div>

                  <ProgressBar now={100} variant="success" className="mb-3" />

                  <Button
                    variant="outline-success"
                    className="w-100"
                    onClick={() => setPublicPage("Campaigns")}
                  >
                    Support Campaign
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setPublicPage("Campaigns")}
            >
              View All Campaigns
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={6}>
              <p className="text-primary fw-bold mb-2">WHY UNITY FOUNDATION</p>

              <h2 className="fw-bold mb-3">
                Small Actions Can Create Big Change
              </h2>

              <p className="text-secondary mb-4">
                We work with donors, volunteers, and local communities to provide
                meaningful support where it is needed most.
              </p>

              <div className="d-flex gap-3 mb-3">
                <FaCheckCircle className="text-success fs-3 flex-shrink-0" />

                <div>
                  <h5 className="mb-1">Transparent Support</h5>
                  <p className="text-secondary mb-0">
                    We focus on using every contribution responsibly for community
                    support programs.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <FaHandsHelping className="text-primary fs-3 flex-shrink-0" />

                <div>
                  <h5 className="mb-1">Community Driven</h5>
                  <p className="text-secondary mb-0">
                    Our volunteers and members work together to help families and
                    communities.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <FaShieldAlt className="text-warning fs-3 flex-shrink-0" />

                <div>
                  <h5 className="mb-1">Trusted Programs</h5>
                  <p className="text-secondary mb-0">
                    We support food, education, healthcare, and emergency assistance
                    initiatives.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <Card bg="dark" text="white" className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <FaHeart className="text-danger display-4 mb-3" />

                  <h3 className="fw-bold">Join Our Mission</h3>

                  <p className="text-light mb-4">
                    Become a member and help us serve more people with compassion,
                    dignity, and unity.
                  </p>

                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setPublicPage("User")}
                  >
                    Become a Member
                    <FaArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold mb-2">VOICES OF SUPPORT</p>

            <h2 className="fw-bold mb-3">What People Say About Us</h2>

            <p className="text-secondary mb-0">
              Every contribution and volunteer effort helps create a positive impact.
            </p>
          </div>

          <Row className="g-4">
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <FaQuoteLeft className="text-primary fs-2 mb-3" />

                  <p className="text-secondary">
                    Unity Foundation Trust gave my family support when we needed it
                    most. Their food support program made a real difference.
                  </p>

                  <hr />

                  <h6 className="fw-bold mb-1">Suresh Kumar</h6>
                  <small className="text-secondary">Community Member</small>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <FaQuoteLeft className="text-success fs-2 mb-3" />

                  <p className="text-secondary">
                    Volunteering here has shown me how small actions can help many
                    people. The team is supportive and focused on real impact.
                  </p>

                  <hr />

                  <h6 className="fw-bold mb-1">Anjali Reddy</h6>
                  <small className="text-secondary">Volunteer</small>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <FaQuoteLeft className="text-danger fs-2 mb-3" />

                  <p className="text-secondary">
                    I am happy to support their education campaign. Their work gives
                    students better opportunities to continue learning.
                  </p>

                  <hr />

                  <h6 className="fw-bold mb-1">Ravi Sharma</h6>
                  <small className="text-secondary">Donor</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* 6. Call To Action Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={8}>
              <h2 className="fw-bold mb-2">
                Ready to Make a Difference?
              </h2>

              <p className="mb-0 fs-5">
                Join Unity Foundation Trust as a member, volunteer, or donor and
                help us support more lives.
              </p>
            </Col>

            <Col xs={12} lg={4}>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                <Button
                  variant="light"
                  size="lg"
                  onClick={() => setPublicPage("User")}
                >
                  Become a Member
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => setPublicPage("Campaigns")}
                >
                  Donate Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Home;