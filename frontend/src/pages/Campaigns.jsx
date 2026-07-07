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
  ProgressBar,
} from "react-bootstrap";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

function Campaigns() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [campaigns, setCampaigns] = useState([
    {
      id: "CMP-101",
      name: "Food for Children",
      category: "Food",
      target: 100000,
      raised: 65000,
      status: "Active",
    },
    {
      id: "CMP-102",
      name: "Education Support",
      category: "Education",
      target: 150000,
      raised: 120000,
      status: "Active",
    },
    {
      id: "CMP-103",
      name: "Medical Help Drive",
      category: "Medical",
      target: 80000,
      raised: 80000,
      status: "Completed",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    target: "",
    raised: "",
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
      category: "",
      target: "",
      raised: "",
      status: "Active",
    });
  }

  function handleOpenAddModal() {
    setEditingId(null);
    resetForm();
    setShowModal(true);
  }

  function handleSaveCampaign() {
    if (
      !formData.name ||
      !formData.category ||
      !formData.target ||
      !formData.raised
    ) {
      alert("Please fill all fields");
      return;
    }

    const targetAmount = Number(formData.target);
    const raisedAmount = Number(formData.raised);

    if (targetAmount <= 0 || raisedAmount < 0) {
      alert("Enter valid target and raised amount");
      return;
    }

    if (editingId) {
      const updatedCampaigns = campaigns.map((campaign) =>
        campaign.id === editingId
          ? {
              ...campaign,
              name: formData.name,
              category: formData.category,
              target: targetAmount,
              raised: raisedAmount,
              status: formData.status,
            }
          : campaign
      );

      setCampaigns(updatedCampaigns);
      setEditingId(null);
    } else {
      const newCampaign = {
        id: `CMP-${100 + campaigns.length + 1}`,
        name: formData.name,
        category: formData.category,
        target: targetAmount,
        raised: raisedAmount,
        status: formData.status,
      };

      setCampaigns([...campaigns, newCampaign]);
    }

    resetForm();
    setShowModal(false);
  }

  function handleEditCampaign(campaign) {
    setFormData({
      name: campaign.name,
      category: campaign.category,
      target: campaign.target,
      raised: campaign.raised,
      status: campaign.status,
    });

    setEditingId(campaign.id);
    setShowModal(true);
  }

  function handleDeleteCampaign(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this campaign?"
    );

    if (isConfirmed) {
      const updatedCampaigns = campaigns.filter(
        (campaign) => campaign.id !== id
      );

      setCampaigns(updatedCampaigns);
    }
  }

  function handleCancel() {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  }

  function getProgress(target, raised) {
    const progress = (raised / target) * 100;
    return Math.min(Math.round(progress), 100);
  }

  const filteredCampaigns = campaigns.filter((campaign) => {
    const nameMatches = campaign.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const statusMatches =
      statusFilter === "All" || campaign.status === statusFilter;

    return nameMatches && statusMatches;
  });

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="mb-1">Campaigns</h1>
          <p className="text-secondary mb-0">
            Manage foundation fundraising campaigns.
          </p>
        </div>

        <Button variant="primary" onClick={handleOpenAddModal}>
          <FaPlus className="me-2" />
          Add Campaign
        </Button>
      </div>

      <Card bg="dark" text="white" className="border-secondary">
        <Card.Body>
          <Row className="mb-4">
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Search campaign name..."
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
                <option value="Completed">Completed</option>
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
                <th>Campaign Name</th>
                <th>Category</th>
                <th>Target</th>
                <th>Raised</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCampaigns.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-secondary py-4">
                    No campaigns found.
                  </td>
                </tr>
              ) : (
                filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td>{campaign.id}</td>
                    <td>{campaign.name}</td>
                    <td>{campaign.category}</td>
                    <td>₹ {campaign.target.toLocaleString()}</td>
                    <td>₹ {campaign.raised.toLocaleString()}</td>
                    <td style={{ minWidth: "160px" }}>
                      <ProgressBar
                        now={getProgress(campaign.target, campaign.raised)}
                        label={`${getProgress(
                          campaign.target,
                          campaign.raised
                        )}%`}
                        variant={
                          campaign.status === "Completed"
                            ? "success"
                            : "primary"
                        }
                      />
                    </td>
                    <td>
                      <Badge
                        bg={
                          campaign.status === "Active"
                            ? "primary"
                            : "success"
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditCampaign(campaign)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteCampaign(campaign.id)}
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
            {editingId ? "Edit Campaign" : "Add New Campaign"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter campaign name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Education">Education</option>
                <option value="Medical">Medical</option>
                <option value="Clothes">Clothes</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Target Amount</Form.Label>
              <Form.Control
                type="number"
                name="target"
                value={formData.target}
                onChange={handleChange}
                placeholder="Enter target amount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Raised Amount</Form.Label>
              <Form.Control
                type="number"
                name="raised"
                value={formData.raised}
                onChange={handleChange}
                placeholder="Enter raised amount"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSaveCampaign}>
            {editingId ? "Update Campaign" : "Save Campaign"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Campaigns;