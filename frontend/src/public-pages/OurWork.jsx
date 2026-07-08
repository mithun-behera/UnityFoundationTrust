import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUtensils,
  FaGraduationCap,
  FaHeartbeat,
  FaHouseDamage,
  FaArrowRight,
  FaHandsHelping,
} from "react-icons/fa";

function OurWork({ setPublicPage }) {
  const workAreas = [
    {
      title: "Food Support",
      icon: <FaUtensils />,
      color: "danger",
      description:
        "We provide food packets, cooked meals, and nutrition support to children, families, and people facing difficult situations.",
      points: [
        "Food packet distribution",
        "Meals for children",
        "Community food drives",
      ],
    },
    {
      title: "Education Support",
      icon: <FaGraduationCap />,
      color: "primary",
      description:
        "We help students continue their education by providing books, school kits, learning materials, and guidance.",
      points: [
        "Books and stationery",
        "School kit distribution",
        "Learning support",
      ],
    },
    {
      title: "Medical Support",
      icon: <FaHeartbeat />,
      color: "success",
      description:
        "We support families with medicines, health camps, emergency medical help, and awareness programs.",
      points: [
        "Medical camps",
        "Medicine support",
        "Emergency healthcare help",
      ],
    },
    {
      title: "Disaster & Emergency Support",
      icon: <FaHouseDamage />,
      color: "warning",
      description:
        "During emergencies, we work to provide essential relief materials and support to affected families.",
      points: [
        "Emergency food relief",
        "Clothes and basic supplies",
        "Community rehabilitation support",
      ],
    },
  ];

  return (
    <>
      {/* Heading */}
      <section className="bg-dark text-white py-5">
        <Container>
          <div className="text-center py-md-3">
            <p className="text-primary fw-bold mb-2">OUR WORK</p>

            <h1 className="display-6 fw-bold mb-3">
              Supporting Communities With Care
            </h1>

            <p
              className="text-light mb-0 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Our programs focus on practical support that helps people live
              with dignity, hope, and better opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Work Cards */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold mb-2">HOW WE HELP</p>

            <h2 className="fw-bold mb-3">Our Focus Areas</h2>

            <p className="text-secondary mb-0">
              We work across important areas that directly support individuals
              and families.
            </p>
          </div>

          <Row className="g-4">
            {workAreas.map((work) => (
              <Col xs={12} md={6} lg={3} key={work.title}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className={`text-${work.color} fs-1 mb-3`}>
                      {work.icon}
                    </div>

                    <h4 className="fw-bold">{work.title}</h4>

                    <p className="text-secondary">{work.description}</p>

                    <ul className="text-secondary ps-3 mb-4">
                      {work.points.map((point) => (
                        <li key={point} className="mb-2">
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={`outline-${work.color}`}
                      className="w-100 mt-auto"
                      onClick={() => setPublicPage("Campaigns")}
                    >
                      Support This Work
                      <FaArrowRight className="ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Volunteer Call To Action */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={8}>
              <div className="d-flex gap-3">
                <FaHandsHelping className="text-primary display-5 flex-shrink-0" />

                <div>
                  <h2 className="fw-bold mb-2">
                    Your Time Can Change Someone’s Life
                  </h2>

                  <p className="text-secondary mb-0">
                    Become a member and join our activities, campaigns, and
                    community support programs.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <Button
                variant="primary"
                size="lg"
                className="w-100"
                onClick={() => setPublicPage("User")}
              >
                Become a Member
                <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurWork;