import { useState } from "react";
import {
  Card,
  Table,
  Badge,
  Button,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

function Donations() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [donations, setDonations] = useState([
    {
      id: "DON-101",
      donorName: "Om Prakash",
      type: "Money",
      amount: "₹ 60,500",
      date: "2026-07-07",
      status: "Approved",
    },
    {
      id: "DON-102",
      donorName: "Mithun",
      type: "Food",
      amount: "₹ 40,000",
      date: "2026-07-06",
      status: "Pending",
    },
    {
      id: "DON-103",
      donorName: "Amit Kumar",
      type: "Books",
      amount: "₹ 45,000",
      date: "2026-07-05",
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

  function resetForm() {
    setFormData({
      donorName: "",
      type: "",
      amount: "",
      date: "",
      status: "Pending",
    });
  }

  function handleOpenAddModal() {
    setEditingId(null);
    resetForm();
    setShowModal(true);
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

    if (editingId) {
      const updatedDonations = donations.map((donation) =>
        donation.id === editingId
          ? {
              ...donation,
              donorName: formData.donorName,
              type: formData.type,
              amount: `₹ ${Number(formData.amount).toLocaleString()}`,
              date: formData.date,
              status: formData.status,
            }
          : donation
      );

      setDonations(updatedDonations);
    } else {
      const newDonation = {
        id: `DON-${100 + donations.length + 1}`,
        donorName: formData.donorName,
        type: formData.type,
        amount: `₹ ${Number(formData.amount).toLocaleString()}`,
        date: formData.date,
        status: formData.status,
      };

      setDonations([...donations, newDonation]);
    }

    setEditingId(null);
    resetForm();
    setShowModal(false);
  }

  function handleEditDonation(donation) {
    setFormData({
      donorName: donation.donorName,
      type: donation.type,
      amount: donation.amount.replace("₹ ", "").replaceAll(",", ""),
      date: donation.date,
      status: donation.status,
    });

    setEditingId(donation.id);
    setShowModal(true);
  }

  function handleDeleteDonation(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this donation?"
    );

    if (isConfirmed) {
      setDonations(donations.filter((donation) => donation.id !== id));
    }
  }

  function handleCancel() {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  }

  const filteredDonations = donations.filter((donation) => {
    const nameMatches = donation.donorName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const statusMatches =
      statusFilter === "All" || donation.status === statusFilter;

    return nameMatches && statusMatches;
  });

  return (
    <div className="p-3 p-md-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="mb-1">Donations</h1>
          <p className="text-secondary mb-0">
            Manage all foundation donations.
          </p>
        </div>

        <Button variant="primary" onClick={handleOpenAddModal}>
          <FaPlus className="me-2" />
          Add Donation
        </Button>
      </div>

      <Card bg="dark" text="white" className="border-secondary">
        <Card.Body>
          <Row className="g-2 mb-4">
            <Col xs={12} md={5}>
              <Form.Control
                type="text"
                placeholder="Search donor name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>

            <Col xs={12} md={3}>
              <Form.Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
              </Form.Select>
            </Col>

            <Col xs={12} md={2}>
              <Button variant="outline-secondary" className="w-100">
                <FaSearch className="me-2" />
                Search
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
              {filteredDonations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-secondary py-4">
                    No donations found.
                  </td>
                </tr>
              ) : (
                filteredDonations.map((donation) => (
                  <tr key={donation.id}>
                    <td>{donation.id}</td>
                    <td>{donation.donorName}</td>
                    <td>{donation.type}</td>
                    <td>{donation.amount}</td>
                    <td>{donation.date}</td>
                    <td>
                      <Badge
                        bg={
                          donation.status === "Approved"
                            ? "success"
                            : "warning"
                        }
                        text={
                          donation.status === "Pending" ? "dark" : undefined
                        }
                      >
                        {donation.status}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditDonation(donation)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteDonation(donation.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCancel} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingId ? "Edit Donation" : "Add New Donation"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Donor Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleChange}
                    placeholder="Enter donor name"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Donation Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select donation type</option>
                    <option value="Money">Money</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Medical Support">Medical Support</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Donation Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSaveDonation}>
            {editingId ? "Update Donation" : "Save Donation"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Donations;