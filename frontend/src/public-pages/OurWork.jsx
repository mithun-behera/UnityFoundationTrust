import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUtensils,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaTshirt,
  FaArrowRight,
} from "react-icons/fa";

function OurWork({ setPublicPage }) {
  const services = [
    {
      title: "Food Support",
      icon: <FaUtensils />,
      text: "We provide food packets, groceries, and essential supplies to families facing hardship.",
      color: "danger",
    },
    {
      title: "Education Support",
      icon: <FaGraduationCap />,
      text: "We help students with books, school materials, fees, and learning opportunities.",
      color: "primary",
    },
    {
      title: "Medical Support",
      icon: <FaBriefcaseMedical />,
      text: "We support health camps, medical assistance, medicines, and emergency care.",
      color: "success",
    },
    {
      title: "Clothes Support",
      icon: <FaTshirt />,
      text: "We distribute clothes and basic necessities to people and families in need.",
      color: "warning",
    },
  ];

  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">OUR WORK</p>

          <h1 className="display-5 fw-bold">
            Support That Reaches People
          </h1>

          <p
            className="lead text-secondary mx-auto mt-3"
            style={{ maxWidth: "720px" }}
          >
            Our programs focus on essential needs and long-term community
            development.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {services.map((service) => (
              <Col md={6} lg={3} key={service.title}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className={`text-${service.color} fs-1 mb-3`}>
                      {service.icon}
                    </div>

                    <h4>{service.title}</h4>

                    <p className="text-secondary mb-0">
                      {service.text}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center bg-dark text-white rounded-4 p-4 p-md-5">
            <Col lg={8}>
              <h2 className="fw-bold">Want to make a difference?</h2>

              <p className="text-secondary mb-lg-0">
                Join Unity Foundation Trust as a member and become part of
                meaningful community work.
              </p>
            </Col>

            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setPublicPage("User")}
              >
                Become a Member <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurWork;