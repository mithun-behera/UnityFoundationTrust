import { useState } from "react";
import { Card, Table, Badge, Button, Row, Col, Form ,Modal } from "react-bootstrap";

import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

function Donations() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="mb-1">Donations</h1>
                    <p className="text-secondary mb-0">Manage All Foundations</p>
                </div>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    <FaPlus className="me-2" />
                    Add Donation
                </Button>
            </div>
            <Card bg="dark" text="white" className="border-secondary">
                <Card.Body>
                    <Row className="mb-4">
                        <Col md={5}>
                            <Form.Control type="text" placeholder="Serach donor name..." />
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
                                <FaSearch className="me-2" /> Search
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
                                        <FaEdit />
                                    </Button>

                                    <Button variant="outline-danger" size="sm">
                                        <FaTrash />
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
                                        <FaEdit />
                                    </Button>

                                    <Button variant="outline-danger" size="sm">
                                        <FaTrash />
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
                                        <FaEdit />
                                    </Button>

                                    <Button variant="outline-danger" size="sm">
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                 <Modal.Header closeButton>
                       <Modal.Title>Add New Donation</Modal.Title>
                 </Modal.Header>

                 <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                           <Form.Label>Donor Name</Form.Label>
                           <Form.Control type="text" placeholder="Enter donor name"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Donation Type</Form.Label>
                          <Form.Select>
                              <option value="">Select Donation type</option>
                              <option value="">Money</option>
                              <option value="">Food</option>
                              <option value="">Books</option>
                              <option value="">Clothes</option>
                              <option value="">Medical Support</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter Amount"></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                             <Form.Label>Donation Date</Form.Label>
                             <Form.Control type="date"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option value="">Pending</option>
                                <option value="">Approved</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                 </Modal.Body>

                 <Modal.Footer>
                     <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                     </Button>

                     <Button variant="primary" onClick={() => setShowModal(false)}>
                          Save Donation
                     </Button>
                 </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Donations;