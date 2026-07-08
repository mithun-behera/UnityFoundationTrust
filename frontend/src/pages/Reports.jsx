import { Card, Row, Col, Button, Table, Badge } from "react-bootstrap";
import {
  FaUsers,
  FaDonate,
  FaHandHoldingHeart,
  FaBullhorn,
  FaFilePdf,
  FaFileExcel,
} from "react-icons/fa";

function Reports() {
  return (
    <div className="p-3 p-md-4">
      <div className="mb-4">
        <h1 className="mb-1">Reports</h1>
        <p className="text-secondary mb-0">
          View foundation activity and donation summaries.
        </p>
      </div>

      <Row className="g-3 mb-4">
        <Col xs={12} md={6} lg={3}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <div className="text-primary fs-3 mb-2">
                <FaUsers />
              </div>
              <p className="text-secondary mb-1">Total Donors</p>
              <h3 className="mb-0">498</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <div className="text-success fs-3 mb-2">
                <FaDonate />
              </div>
              <p className="text-secondary mb-1">Total Donations</p>
              <h3 className="mb-0">₹ 11,20,000</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <div className="text-danger fs-3 mb-2">
                <FaHandHoldingHeart />
              </div>
              <p className="text-secondary mb-1">Beneficiaries Helped</p>
              <h3 className="mb-0">1,098</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <div className="text-warning fs-3 mb-2">
                <FaBullhorn />
              </div>
              <p className="text-secondary mb-1">Active Campaigns</p>
              <h3 className="mb-0">9</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <Card bg="dark" text="white" className="border-secondary">
            <Card.Body>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-3">
                <Card.Title className="mb-0">
                  Monthly Donation Report
                </Card.Title>

                <div className="d-flex gap-2">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="flex-fill"
                  >
                    <FaFilePdf className="me-1" />
                    PDF
                  </Button>

                  <Button
                    variant="outline-success"
                    size="sm"
                    className="flex-fill"
                  >
                    <FaFileExcel className="me-1" />
                    Excel
                  </Button>
                </div>
              </div>

              <Table responsive hover variant="dark" className="mb-0">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Donations</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>April 2026</td>
                    <td>48</td>
                    <td>₹ 2,40,000</td>
                    <td>
                      <Badge bg="success">Completed</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>May 2026</td>
                    <td>56</td>
                    <td>₹ 3,10,000</td>
                    <td>
                      <Badge bg="success">Completed</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>June 2026</td>
                    <td>63</td>
                    <td>₹ 3,70,000</td>
                    <td>
                      <Badge bg="success">Completed</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>July 2026</td>
                    <td>29</td>
                    <td>₹ 2,00,000</td>
                    <td>
                      <Badge bg="warning" text="dark">
                        In Progress
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <Card.Title className="mb-3">Quick Reports</Card.Title>

              <Button variant="outline-primary" className="w-100 mb-3">
                Donor Report
              </Button>

              <Button variant="outline-success" className="w-100 mb-3">
                Donation Report
              </Button>

              <Button variant="outline-warning" className="w-100 mb-3">
                Campaign Report
              </Button>

              <Button variant="outline-info" className="w-100">
                Volunteer Report
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Reports;