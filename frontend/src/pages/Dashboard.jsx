import { Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaDonate,
  FaHandHoldingHeart,
  FaBullhorn,
} from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="mb-1">Dashboard</h1>
      <p className="text-secondary mb-4">
        Welcome to Unity Foundation Trust.
      </p>

      <Row className="g-3">
        <Col lg={3} md={6}>
          <DashboardCard
            title="Total Donors"
            value="498"
            icon={<FaUsers />}
            color="primary"
          />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard
            title="Total Donations"
            value="₹ 11,20,000"
            icon={<FaDonate />}
            color="success"
          />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard
            title="Beneficiaries Helped"
            value="1,098"
            icon={<FaHandHoldingHeart />}
            color="danger"
          />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard
            title="Active Campaigns"
            value="9"
            icon={<FaBullhorn />}
            color="warning"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;