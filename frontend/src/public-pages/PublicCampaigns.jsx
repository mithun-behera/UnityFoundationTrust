import { Container, Row, Col, Card, Button, ProgressBar, Badge } from "react-bootstrap";
import {
  FaUtensils,
  FaGraduationCap,
  FaHeartbeat,
  FaArrowRight,
} from "react-icons/fa";

function PublicCampaigns({ setPublicPage }) {
  const campaigns = [
    {
      id: 1,
      title: "Food for Children",
      category: "Food Support",
      description:
        "Help provide healthy meals to children and families facing food insecurity.",
      raised: 65000,
      target: 100000,
      percentage: 65,
      icon: <FaUtensils />,
      badge: "danger",
      button: "outline-danger",
      progress: "danger",
    },
    {
      id: 2,
      title: "Education Support",
      category: "Education",
      description:
        "Help students receive books, uniforms, school supplies, and learning support.",
      raised: 120000,
      target: 150000,
      percentage: 80,
      icon: <FaGraduationCap />,
      badge: "primary",
      button: "outline-primary",
      progress: "primary",
    },
    {
      id: 3,
      title: "Medical Help Drive",
      category: "Medical Help",
      description:
        "Support urgent treatment, medicines, and healthcare for families in need.",
      raised: 80000,
      target: 80000,
      percentage: 100,
      icon: <FaHeartbeat />,
      badge: "success",
      button: "outline-success",
      progress: "success",
    },
    {
      id: 4,
      title: "School Kit Distribution",
      category: "Education",
      description:
        "Help provide notebooks, bags, pens, and other essential school kits.",
      raised: 35000,
      target: 75000,
      percentage: 47,
      icon: <FaGraduationCap />,
      badge: "primary",
      button: "outline-primary",
      progress: "primary",
    },
    {
      id: 5,
      title: "Community Food Drive",
      category: "Food Support",
      description:
        "Support food packages for low-income families in local communities.",
      raised: 42000,
      target: 100000,
      percentage: 42,
      icon: <FaUtensils />,
      badge: "danger",
      button: "outline-danger",
      progress: "danger",
    },
    {
      id: 6,
      title: "Emergency Medical Fund",
      category: "Medical Help",
      description:
        "Provide emergency healthcare support for patients who cannot afford treatment.",
      raised: 90000,
      target: 200000,
      percentage: 45,
      icon: <FaHeartbeat />,
      badge: "success",
      button: "outline-success",
      progress: "success",
    },
  ];

  function formatAmount(amount) {
    return `₹ ${amount.toLocaleString("en-IN")}`;
  }

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-bold mb-2">SUPPORT A CAUSE</p>

          <h1 className="fw-bold mb-3">Our Campaigns</h1>

          <p className="text-secondary mb-0">
            Choose a campaign and help us bring hope to more people.
          </p>
        </div>

        <Row className="g-4">
          {campaigns.map((campaign) => (
            <Col xs={12} md={6} lg={4} key={campaign.id}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge bg={campaign.badge}>{campaign.category}</Badge>

                    <span className={`fs-3 text-${campaign.badge}`}>
                      {campaign.icon}
                    </span>
                  </div>

                  <h4 className="fw-bold">{campaign.title}</h4>

                  <p className="text-secondary">
                    {campaign.description}
                  </p>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between small mb-2">
                      <span>Raised: {formatAmount(campaign.raised)}</span>
                      <span>Target: {formatAmount(campaign.target)}</span>
                    </div>

                    <ProgressBar
                      now={campaign.percentage}
                      variant={campaign.progress}
                      className="mb-2"
                    />

                    <p className="text-secondary small mb-3">
                      {campaign.percentage}% of target completed
                    </p>

                    <Button
                      variant={campaign.button}
                      className="w-100"
                      onClick={() => setPublicPage("User")}
                    >
                      Donate Now
                      <FaArrowRight className="ms-2" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PublicCampaigns;