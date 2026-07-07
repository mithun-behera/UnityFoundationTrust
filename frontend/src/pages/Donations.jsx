import { useState } from "react";
import { Card, Table, Badge, Button, Row, Col, Form, Modal } from "react-bootstrap";

import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

function Donations() {
    const [showModal, setShowModal] = useState(false);
    const [donations, setDonations] = useState([
        {
            id: "DON-101",
            donorName: "Om Prakash",
            type: "Money",
            amount: "₹ 60,500",
            date: "07 Jul 2026",
            status: "Approved",
        },
        {
            id: "DON-102",
            donorName: "Mithun",
            type: "Food",
            amount: "₹ 40,000",
            date: "06 Jul 2026",
            status: "Pending",
        },
        {
            id: "DON-103",
            donorName: "Amit Kumar",
            type: "Books",
            amount: "₹ 45,000",
            date: "05 Jul 2026",
            status: "Approved",
        },
    ]);

    const [formData, setFormData] = useState({
        donorName: "",
        type: "",
        amount: "",
        date: "",
        status: "Pending",
    });
    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSaveDonation() {
        if (
            !formData.donorName ||
            !formData.type ||
            !formData.amount ||
            !formData.date
        ) {
            alert("Please fill all fields");
            return;
        }

        const newDonation = {
            id: `DON-${100 + donations.length + 1}`,
            donorName: formData.donorName,
            type: formData.type,
            amount: `₹ ${formData.amount}`,
            date: formData.date,
            status: formData.status,
        };

        setDonations([...donations, newDonation]);

        setFormData({
            donorName: "",
            type: "",
            amount: "",
            date: "",
            status: "Pending",
        });

        setShowModal(false);
    }

    function handleDeleteDonation(id) {
        const updatedDonations = donations.filter(
            (donation) => donation.id !== id
        );
        setDonations(updatedDonations);
    }
    const filteredDonations = donations.filter((donation) => {
        const nameMatches = donation.donorName
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const statusMatches = statusFilter === "All" || donation.status === statusFilter;

        return nameMatches && statusMatches;
    });

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
                            <Form.Control type="text"
                                placeholder="Serach donor name..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)} />
                        </Col>

                        <Col md={3} className="mt-2 mt-md-0">
                            <Form.Select value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="All">All Status</option>
                                <option value="Approved">Approved</option>
                                <option value="Pending">Pending</option>
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
                            {filteredDonations.map((donation) => (
                                <tr key={donation.id}>
                                    <td>{donation.id}</td>
                                    <td>{donation.donorName}</td>
                                    <td>{donation.type}</td>
                                    <td>{donation.amount}</td>
                                    <td>{donation.date}</td>
                                    <td>
                                        <Badge bg={donation.status === "Approved" ? "success" : "warning"}>
                                            {donation.status}
                                        </Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            <FaEdit />
                                        </Button>

                                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteDonation(donation.id)}>
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            {/* // <tr>
                            //     <td>DON-101</td>
                            //     <td>Om Prakash</td>
                            //     <td>Money</td>
                            //     <td>₹ 60,500</td>
                            //     <td>07 Jul 2026</td>
                            //     <td>
                            //         <Badge bg="success">Approved</Badge>
                            //     </td>
                            //     <td>
                            //         <Button variant="outline-primary" size="sm" className="me-2">
                            //             <FaEdit />
                            //         </Button>

                            //         <Button variant="outline-danger" size="sm">
                            //             <FaTrash />
                            //         </Button>
                            //     </td>
                            // </tr>

                            // <tr>
                            //     <td>DON-102</td>
                            //     <td>Mithun</td>
                            //     <td>Food</td>
                            //     <td>₹ 40,000</td>
                            //     <td>06 Jul 2026</td>
                            //     <td>
                            //         <Badge bg="warning">Pending</Badge>
                            //     </td>
                            //     <td>
                            //         <Button variant="outline-primary" size="sm" className="me-2">
                            //             <FaEdit />
                            //         </Button>

                            //         <Button variant="outline-danger" size="sm">
                            //             <FaTrash />
                            //         </Button>
                            //     </td>
                            // </tr>

                            // <tr>
                            //     <td>DON-103</td>
                            //     <td>Amit Kumar</td>
                            //     <td>Books</td>
                            //     <td>₹ 45,000</td>
                            //     <td>05 Jul 2026</td>
                            //     <td>
                            //         <Badge bg="success">Approved</Badge>
                            //     </td>
                            //     <td>
                            //         <Button variant="outline-primary" size="sm" className="me-2">
                            //             <FaEdit />
                            //         </Button>

                            //         <Button variant="outline-danger" size="sm">
                            //             <FaTrash />
                            //         </Button>
                            //     </td>
                            // </tr> */}

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
                            <Form.Control type="text"
                                name="donorName"
                                value={formData.donorName}
                                onChange={handleChange}
                                placeholder="Enter donor name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Donation Type</Form.Label>
                            <Form.Select name="type" value={formData.type} onChange={handleChange}>
                                <option value="">Select Donation type</option>
                                <option value="Money">Money</option>
                                <option value="Food">Food</option>
                                <option value="Books">Books</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Medical Support">Medical Support</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="Enter Amount"></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Donation Date</Form.Label>
                            <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={formData.status} onChange={handleChange}>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>

                    <Button variant="primary" onClick={handleSaveDonation}>
                        Save Donation
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Donations;