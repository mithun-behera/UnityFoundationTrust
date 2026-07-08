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

function Donors() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [donors, setDonors] = useState([
    {
      id: "DNR-101",
      name: "Rakesh Kumar",
      phone: "9876543210",
      email: "rakesh@gmail.com",
      city: "Hyderabad",
      type: "Regular",
    },
    {
      id: "DNR-102",
      name: "Divya Nair",
      phone: "9876501234",
      email: "divya@gmail.com",
      city: "Bengaluru",
      type: "One Time",
    },
    {
      id: "DNR-103",
      name: "Manish Jain",
      phone: "9876512345",
      email: "manish@gmail.com",
      city: "Mumbai",
      type: "Regular",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    type: "",
  });

  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function resetForm() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      type: "",
    });
  }

  function handleOpenAddModal() {
    setEditingId(null);
    resetForm();
    setShowModal(true);
  }

  function handleSaveDonor() {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.city ||
      !formData.type
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updatedDonors = donors.map((donor) =>
        donor.id === editingId
          ? {
              ...donor,
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              city: formData.city,
              type: formData.type,
            }
          : donor
      );

      setDonors(updatedDonors);
    } else {
      const newDonor = {
        id: `DNR-${100 + donors.length + 1}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        type: formData.type,
      };

      setDonors([...donors, newDonor]);
    }

    setEditingId(null);
    resetForm();
    setShowModal(false);
  }

  function handleEditDonor(donor) {
    setFormData({
      name: donor.name,
      phone: donor.phone,
      email: donor.email,
      city: donor.city,
      type: donor.type,
    });

    setEditingId(donor.id);
    setShowModal(true);
  }

  function handleDeleteDonor(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this donor?"
    );

    if (isConfirmed) {
      setDonors(donors.filter((donor) => donor.id !== id));
    }
  }

  function handleCancel() {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  }

  const filteredDonors = donors.filter((donor) => {
    const nameMatches = donor.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const typeMatches =
      typeFilter === "All" || donor.type === typeFilter;

    return nameMatches && typeMatches;
  });

  return (
    <div className="p-3 p-md-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="mb-1">Donors</h1>
          <p className="text-secondary mb-0">
            Manage foundation donor details.
          </p>
        </div>

        <Button variant="primary" onClick={handleOpenAddModal}>
          <FaPlus className="me-2" />
          Add Donor
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
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Donor Types</option>
                <option value="Regular">Regular</option>
                <option value="One Time">One Time</option>
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
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredDonors.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-secondary py-4">
                    No donors found.
                  </td>
                </tr>
              ) : (
                filteredDonors.map((donor) => (
                  <tr key={donor.id}>
                    <td>{donor.id}</td>
                    <td>{donor.name}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.email}</td>
                    <td>{donor.city}</td>
                    <td>
                      <Badge
                        bg={
                          donor.type === "Regular" ? "success" : "info"
                        }
                      >
                        {donor.type}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditDonor(donor)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteDonor(donor.id)}
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
            {editingId ? "Edit Donor" : "Add New Donor"}
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter donor name"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city name"
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Donor Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select donor type</option>
                    <option value="Regular">Regular</option>
                    <option value="One Time">One Time</option>
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

          <Button variant="primary" onClick={handleSaveDonor}>
            {editingId ? "Update Donor" : "Save Donor"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Donors;