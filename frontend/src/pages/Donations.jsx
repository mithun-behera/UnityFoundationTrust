import{Card, Table, Badge, Button, Row, Col, Form} from "react-bootstrap";
import {FaPlus, FaSearch, FaEdit, FaTrash} from "react-icons/fa";

function Donations(){
    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="mb-1">Donations</h1>
                    <p className="text-secondary mb-0">Manage All Foundations</p>
                </div>
                <Button variant="primary">
                   <FaPlus className="me-2"/>
                   Add Donation
                </Button>
            </div>
            <Card bg="dark" text="white" className="border-secondary">
               <Card.Body>
                  <Row className="mb-4">
                      <Col md={5}>
                        <Form.Control type="text" placeholder="Serach donor name..."/>
                      </Col>

                      <Col md={3} className="mt-2 mt-md-0">
                        <Form.Select>
                            <option value="">All Status</option>
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                        </Form.Select>
                      </Col>
                      <Col md={2} className="mt-2 mt-md-0">
                       <Button variant="outline-secondary" className="w-100">
                        <FaSearch className="me-2"/> Search
                       </Button>
                      </Col>
                  </Row>

                  <Table responsive hover variant="dark" className="mb-0">
                       <thead>
                           <tr>
                             <th>ID</th>
                             <th>Donor Name</th>
                             <th>Type</th>
                             <th>Amount</th>
                             <th>Date</th>
                             <th>Status</th>
                             <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                          <tr>
                            <td>DON-101</td>
                            <td>Om Prakash</td>
                            <td>Money</td>
                            <td>₹ 60,500</td>
                            <td>07 Jul 2026</td>
                            <td>
                                <Badge bg="success">Approved</Badge>
                            </td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  <FaEdit/>
                                </Button>

                                <Button variant="outline-danger" size="sm">
                                   <FaTrash/>
                                </Button>
                            </td>
                          </tr>

                           <tr>
                            <td>DON-102</td>
                            <td>Mithun</td>
                            <td>Food</td>
                            <td>₹ 40,000</td>
                            <td>06 Jul 2026</td>
                            <td>
                                <Badge bg="warning">Pending</Badge>
                            </td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  <FaEdit/>
                                </Button>

                                <Button variant="outline-danger" size="sm">
                                   <FaTrash/>
                                </Button>
                            </td>
                          </tr>

                           <tr>
                            <td>DON-103</td>
                            <td>Amit Kumar</td>
                            <td>Books</td>
                            <td>₹ 45,000</td>
                            <td>05 Jul 2026</td>
                            <td>
                                <Badge bg="success">Approved</Badge>
                            </td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  <FaEdit/>
                                </Button>

                                <Button variant="outline-danger" size="sm">
                                   <FaTrash/>
                                </Button>
                            </td>
                          </tr>
                       </tbody>
                  </Table>
               </Card.Body>
            </Card>
        </div>
    );
}
export default Donations;