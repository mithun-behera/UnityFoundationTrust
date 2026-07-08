import { Container, Row, Col, Card, ProgressBar, Badge, Button } from "react-bootstrap";
import { FaBullhorn, FaHeart, FaArrowRight } from "react-icons/fa";

function PublicCampaigns({ setPublicPage }) {
  const campaigns = [
    {
      id: 1,
      title: "Food Support for Families",
      category: "Food",
      target: 100000,
      raised: 65000,
      status: "Active",
      description:
        "Help us provide grocery kits and nutritious meals to families in need.",
      color: "danger",
    },
    {
      id: 2,
      title: "Education for Every Child",
      category: "Education",
      target: 150000,
      raised: 78000,
      status: "Active",
      description:
        "Support school books, uniforms, and learning materials for children.",
      color: "primary",
    },
    {
      id: 3,
      title: "Medical Help Campaign",
      category: "Medical",
      target: 200000,
      raised: 120000,
      status: "Active",
      description:
        "Help fund medicines, health camps, and emergency medical support.",
      color: "success",
    },
    {
      id: 4,
      title: "Winter Clothes Distribution",
      category: "Clothes",
      target: 80000,
      raised: 80000,
      status: "Completed",
      description:
        "This campaign helped distribute warm clothes and blankets.",
      color: "warning",
    },
  ];

  return (
    <>
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <p className="text-primary fw-bold mb-2">OUR CAMPAIGNS</p>

          <h1 className="display-5 fw-bold">
            Support a Cause That Matters
          </h1>

          <p
            className="lead text-secondary mx-auto mt-3"
            style={{ maxWidth: "720px" }}
          >
            Every contribution helps us reach more people and create meaningful
            change in communities.
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {campaigns.map((campaign) => {
              const percentage = Math.round(
                (campaign.raised / campaign.target) * 100
              );

              return (
                <Col md={6} key={campaign.id}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className={`text-${campaign.color} fs-2`}>
                          <FaBullhorn />
                        </div>

                        <Badge
                          bg={
                            campaign.status === "Active"
                              ? "success"
                              : "secondary"
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </div>

                      <h4>{campaign.title}</h4>

                      <p className="text-secondary">
                        {campaign.description}
                      </p>

                      <div className="d-flex justify-content-between small mb-2">
                        <span>Raised: ₹ {campaign.raised.toLocaleString()}</span>
                        <span>Target: ₹ {campaign.target.toLocaleString()}</span>
                      </div>

                      <ProgressBar
                        now={percentage}
                        label={`${percentage}%`}
                        variant={campaign.color}
                        className="mb-3"
                      />

                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-secondary small">
                          {campaign.category} Support
                        </span>

                        {campaign.status === "Active" && (
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => setPublicPage("User")}
                          >
                            Support Now <FaHeart className="ms-1" />
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center bg-dark text-white rounded-4 p-4 p-md-5">
            <Col lg={8}>
              <h2 className="fw-bold">Want to support our mission?</h2>
              <p className="text-secondary mb-lg-0">
                Become a member and stay connected with our campaigns,
                volunteering opportunities, and community work.
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

export default PublicCampaigns;