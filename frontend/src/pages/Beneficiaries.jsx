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

function Beneficiaries() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: "BEN-101",
      name: "Anita Das",
      phone: "9876543211",
      city: "Hyderabad",
      supportType: "Food",
      status: "Active",
    },
    {
      id: "BEN-102",
      name: "Rahul Singh",
      phone: "9876543212",
      city: "Bengaluru",
      supportType: "Education",
      status: "Active",
    },
    {
      id: "BEN-103",
      name: "Suman Patel",
      phone: "9876543213",
      city: "Mumbai",
      supportType: "Medical",
      status: "Inactive",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    supportType: "",
    status: "Active",
  });

  const [searchText, setSearchText] = useState("");
  const [supportFilter, setSupportFilter] = useState("All");
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
      city: "",
      supportType: "",
      status: "Active",
    });
  }

  function handleOpenAddModal() {
    setEditingId(null);
    resetForm();
    setShowModal(true);
  }

  function handleSaveBeneficiary() {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.city ||
      !formData.supportType
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updatedBeneficiaries = beneficiaries.map((beneficiary) =>
        beneficiary.id === editingId
          ? {
              ...beneficiary,
              name: formData.name,
              phone: formData.phone,
              city: formData.city,
              supportType: formData.supportType,
              status: formData.status,
            }
          : beneficiary
      );

      setBeneficiaries(updatedBeneficiaries);
      setEditingId(null);
    } else {
      const newBeneficiary = {
        id: `BEN-${100 + beneficiaries.length + 1}`,
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        supportType: formData.supportType,
        status: formData.status,
      };

      setBeneficiaries([...beneficiaries, newBeneficiary]);
    }

    resetForm();
    setShowModal(false);
  }

  function handleEditBeneficiary(beneficiary) {
    setFormData({
      name: beneficiary.name,
      phone: beneficiary.phone,
      city: beneficiary.city,
      supportType: beneficiary.supportType,
      status: beneficiary.status,
    });

    setEditingId(beneficiary.id);
    setShowModal(true);
  }

  function handleDeleteBeneficiary(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this beneficiary?"
    );

    if (isConfirmed) {
      const updatedBeneficiaries = beneficiaries.filter(
        (beneficiary) => beneficiary.id !== id
      );

      setBeneficiaries(updatedBeneficiaries);
    }
  }

  function handleCancel() {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  }

  const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
    const nameMatches = beneficiary.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const supportMatches =
      supportFilter === "All" ||
      beneficiary.supportType === supportFilter;

    const statusMatches =
      statusFilter === "All" ||
      beneficiary.status === statusFilter;

    return nameMatches && supportMatches && statusMatches;
  });

  return (
    <div className="p-3 p-md-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="mb-1">Beneficiaries</h1>
          <p className="text-secondary mb-0">
            Manage people receiving foundation support.
          </p>
        </div>

        <Button variant="primary" onClick={handleOpenAddModal}>
          <FaPlus className="me-2" />
          Add Beneficiary
        </Button>
      </div>

      <Card bg="dark" text="white" className="border-secondary">
        <Card.Body>
          <Row className="g-2 mb-4">
            <Col xs={12} md={4}>
              <Form.Control
                type="text"
                placeholder="Search beneficiary name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>

            <Col xs={12} md={3}>
              <Form.Select
                value={supportFilter}
                onChange={(e) => setSupportFilter(e.target.value)}
              >
                <option value="All">All Support Types</option>
                <option value="Food">Food</option>
                <option value="Education">Education</option>
                <option value="Medical">Medical</option>
                <option value="Clothes">Clothes</option>
              </Form.Select>
            </Col>

            <Col xs={12} md={3}>
              <Form.Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
                <th>Support Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBeneficiaries.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-secondary py-4">
                    No beneficiaries found.
                  </td>
                </tr>
              ) : (
                filteredBeneficiaries.map((beneficiary) => (
                  <tr key={beneficiary.id}>
                    <td>{beneficiary.id}</td>
                    <td>{beneficiary.name}</td>
                    <td>{beneficiary.phone}</td>
                    <td>{beneficiary.city}</td>
                    <td>{beneficiary.supportType}</td>
                    <td>
                      <Badge
                        bg={
                          beneficiary.status === "Active"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {beneficiary.status}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditBeneficiary(beneficiary)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() =>
                          handleDeleteBeneficiary(beneficiary.id)
                        }
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

      <Modal
        show={showModal}
        onHide={handleCancel}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editingId ? "Edit Beneficiary" : "Add New Beneficiary"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
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

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Support Type</Form.Label>
                  <Form.Select
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                  >
                    <option value="">Select support type</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="Medical">Medical</option>
                    <option value="Clothes">Clothes</option>
                  </Form.Select>
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
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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

          <Button variant="primary" onClick={handleSaveBeneficiary}>
            {editingId ? "Update Beneficiary" : "Save Beneficiary"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Beneficiaries;