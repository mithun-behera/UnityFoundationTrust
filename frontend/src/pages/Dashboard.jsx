// import{ Row, Col } from "react-bootstrap";
import {Row, Col, Card, Table, Badge} from "react-bootstrap";
import {
  FaUsers,
  FaDonate,
  FaHandHoldingHeart,
  FaBullhorn,
} from "react-icons/fa";

import DashboardCard from "../components/DashboardCard";

function Dashboard(){
  return (
    <div className="p-4">
        <h1 className="mb-1">Dashboard</h1>

        <p className="text-seconadary mb-4">Welcome to Unity Foundation Trust</p>

        <Row className="g-3">
           <Col lg={3} md={6}>
             <DashboardCard title="Total Donars" value="748" icon={<FaUsers/>}color="primary">
             </DashboardCard>
           </Col>
            <Col lg={3} md={6}>
              <DashboardCard title="Total Donations" value="₹ 11,20,00" icon={<FaDonate/>} color="success">

              </DashboardCard>
            </Col>
           <Col lg={3} md={6}>
             <DashboardCard title="Beneficiaries Helped " value="1,098" icon={<FaHandHoldingHeart/>} color="danger"/>
           </Col>

           <Col lg={3} md={6}>
             <DashboardCard title="Active Campaigns" value="9" icon={<FaBullhorn/>} color="warning"/>
           </Col>
        </Row>
          <Row className="mt-4">
             <Col lg={8}>
             <Card bg="dark" text="white" className="border-secandary">
                 <Card.Body>
                    <Card.Title className="mb-4">Recent Donations</Card.Title>

                    <Table responsive hover variant="dark" className="mb-0">
                        <thead>
                          <tr>
                            <th>Donor Name</th>
                            <th>Donation Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Om Prakash</td>
                            <td>Money</td>
                            <td>₹ 60,500</td>
                            <td><Badge bg="success">Approved</Badge></td>
                          </tr>

                          <tr>
                            <td>Mithun </td>
                            <td>Food</td>
                            <td>₹ 40,000</td>
                            <td>
                              <Badge bg="warning" text="dark">Pending</Badge>
                            </td>
                          </tr>

                          <tr>
                            <td>Amit Kumar</td>
                            <td>Books</td>
                            <td>₹ 45,000</td>
                            <td> 
                              <Badge bg="success">Approved</Badge>
                            </td>
                          </tr>
                        </tbody>
                    </Table>
                 </Card.Body>
             </Card>
             </Col>
          </Row>
    </div>
  );
}

export default Dashboard;