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
          <DashboardCard title="Total Donors" value="498" icon={<FaUsers />} color="primary" />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard title="Total Donations" value="₹ 11,20,000" icon={<FaDonate />} color="success" />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard title="Beneficiaries Helped" value="1,098" icon={<FaHandHoldingHeart />} color="danger" />
        </Col>

        <Col lg={3} md={6}>
          <DashboardCard title="Active Campaigns" value="9" icon={<FaBullhorn />} color="warning" />
        </Col>
      </Row>

      <Row className="g-3 mt-2">
        <Col lg={7}>
          <div className="card bg-dark border-secondary text-white h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">Recent Donations</h5>

              <table className="table table-dark table-hover mb-0">
                <thead>
                  <tr>
                    <th>Donor Name</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rakesh Kumar</td>
                    <td>Money</td>
                    <td>₹ 2,500</td>
                    <td><span className="badge text-bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>Divya Nair</td>
                    <td>Food</td>
                    <td>₹ 2,000</td>
                    <td><span className="badge text-bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>Manish Jain</td>
                    <td>Books</td>
                    <td>₹ 9,000</td>
                    <td><span className="badge text-bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>

        <Col lg={5}>
          <div className="card bg-dark border-secondary text-white h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">Active Campaigns</h5>

              <p className="mb-1">Food Support — 50%</p>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "50%" }} />
              </div>

              <p className="mb-1">Education Support — 52%</p>
              <div className="progress mb-4">
                <div className="progress-bar bg-success" style={{ width: "52%" }} />
              </div>

              <p className="mb-1">Medical Support — 40%</p>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: "40%" }} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;