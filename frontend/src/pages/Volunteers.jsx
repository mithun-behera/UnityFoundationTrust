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

function Volunteers() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [volunteers, setVolunteers] = useState([
    {
      id: "VOL-101",
      name: "Kiran Sharma",
      phone: "9876543221",
      email: "kiran@gmail.com",
      city: "Hyderabad",
      role: "Food Distribution",
      status: "Active",
    },
    {
      id: "VOL-102",
      name: "Priya Das",
      phone: "9876543222",
      email: "priya@gmail.com",
      city: "Bengaluru",
      role: "Teaching",
      status: "Active",
    },
    {
      id: "VOL-103",
      name: "Arjun Patel",
      phone: "9876543223",
      email: "arjun@gmail.com",
      city: "Mumbai",
      role: "Medical Camp",
      status: "Inactive",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    role: "",
    status: "Active",
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
      name: "",
      phone: "",
      email: "",
      city: "",
      role: "",
      status: "Active",
    });
  }

  function handleOpenAddModal() {
    setEditingId(null);
    resetForm();
    setShowModal(true);
  }

  function handleSaveVolunteer() {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.city ||
      !formData.role
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updatedVolunteers = volunteers.map((volunteer) =>
        volunteer.id === editingId
          ? {
              ...volunteer,
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              city: formData.city,
              role: formData.role,
              status: formData.status,
            }
          : volunteer
      );

      setVolunteers(updatedVolunteers);
      setEditingId(null);
    } else {
      const newVolunteer = {
        id: `VOL-${100 + volunteers.length + 1}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        role: formData.role,
        status: formData.status,
      };

      setVolunteers([...volunteers, newVolunteer]);
    }

    resetForm();
    setShowModal(false);
  }

  function handleEditVolunteer(volunteer) {
    setFormData({
      name: volunteer.name,
      phone: volunteer.phone,
      email: volunteer.email,
      city: volunteer.city,
      role: volunteer.role,
      status: volunteer.status,
    });

    setEditingId(volunteer.id);
    setShowModal(true);
  }

  function handleDeleteVolunteer(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this volunteer?"
    );

    if (isConfirmed) {
      const updatedVolunteers = volunteers.filter(
        (volunteer) => volunteer.id !== id
      );

      setVolunteers(updatedVolunteers);
    }
  }

  function handleCancel() {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  }

  const filteredVolunteers = volunteers.filter((volunteer) => {
    const nameMatches = volunteer.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const statusMatches =
      statusFilter === "All" || volunteer.status === statusFilter;

    return nameMatches && statusMatches;
  });

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="mb-1">Volunteers</h1>
          <p className="text-secondary mb-0">
            Manage foundation volunteer details.
          </p>
        </div>

        <Button variant="primary" onClick={handleOpenAddModal}>
          <FaPlus className="me-2" />
          Add Volunteer
        </Button>
      </div>

      <Card bg="dark" text="white" className="border-secondary">
        <Card.Body>
          <Row className="mb-4">
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Search volunteer name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>

            <Col md={3} className="mt-2 mt-md-0">
              <Form.Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Col>

            <Col md={2} className="mt-2 mt-md-0">
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
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredVolunteers.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-secondary py-4">
                    No volunteers found.
                  </td>
                </tr>
              ) : (
                filteredVolunteers.map((volunteer) => (
                  <tr key={volunteer.id}>
                    <td>{volunteer.id}</td>
                    <td>{volunteer.name}</td>
                    <td>{volunteer.phone}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.city}</td>
                    <td>{volunteer.role}</td>
                    <td>
                      <Badge
                        bg={
                          volunteer.status === "Active"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {volunteer.status}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditVolunteer(volunteer)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteVolunteer(volunteer.id)}
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

      <Modal show={showModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingId ? "Edit Volunteer" : "Add New Volunteer"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Volunteer Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select volunteer role</option>
                <option value="Food Distribution">Food Distribution</option>
                <option value="Teaching">Teaching</option>
                <option value="Medical Camp">Medical Camp</option>
                <option value="Fundraising">Fundraising</option>
                <option value="Event Support">Event Support</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSaveVolunteer}>
            {editingId ? "Update Volunteer" : "Save Volunteer"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Volunteers;