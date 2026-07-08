import { useState } from "react";
import { Card, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { FaSave, FaBuilding, FaUserShield, FaBell } from "react-icons/fa";

function Settings() {
  const [foundationData, setFoundationData] = useState({
    name: "Unity Foundation Trust",
    email: "unityfoundation@gmail.com",
    phone: "9876543210",
    address: "Hyderabad, Telangana, India",
  });

  const [adminData, setAdminData] = useState({
    name: "Admin User",
    email: "admin@unityfoundation.org",
    role: "Administrator",
  });

  const [notifications, setNotifications] = useState({
    donation: true,
    campaign: true,
    volunteer: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  function handleFoundationChange(e) {
    setFoundationData({
      ...foundationData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAdminChange(e) {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  }

  function handleNotificationChange(e) {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  }

  function handleSaveSettings() {
    if (
      !foundationData.name ||
      !foundationData.email ||
      !foundationData.phone ||
      !foundationData.address ||
      !adminData.name ||
      !adminData.email
    ) {
      alert("Please fill all required fields");
      return;
    }

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }

  return (
    <div className="p-3 p-md-4">
      <div className="mb-4">
        <h1 className="mb-1">Settings</h1>
        <p className="text-secondary mb-0">
          Manage foundation, admin, and notification settings.
        </p>
      </div>

      {showSuccess && (
        <Alert variant="success">
          Settings saved successfully.
        </Alert>
      )}

      <Row className="g-4">
        <Col xs={12} lg={6}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaBuilding className="me-2 text-primary" />
                Foundation Details
              </Card.Title>

              <Form.Group className="mb-3">
                <Form.Label>Foundation Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={foundationData.name}
                  onChange={handleFoundationChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={foundationData.email}
                  onChange={handleFoundationChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={foundationData.phone}
                  onChange={handleFoundationChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={foundationData.address}
                  onChange={handleFoundationChange}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaUserShield className="me-2 text-success" />
                Admin Profile
              </Card.Title>

              <Form.Group className="mb-3">
                <Form.Label>Admin Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={adminData.name}
                  onChange={handleAdminChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Admin Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={adminData.email}
                  onChange={handleAdminChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={adminData.role}
                  onChange={handleAdminChange}
                  disabled
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaBell className="me-2 text-warning" />
                Notifications
              </Card.Title>

              <Form.Check
                type="switch"
                id="donation-notification"
                name="donation"
                label="New donation notifications"
                checked={notifications.donation}
                onChange={handleNotificationChange}
                className="mb-3"
              />

              <Form.Check
                type="switch"
                id="campaign-notification"
                name="campaign"
                label="Campaign update notifications"
                checked={notifications.campaign}
                onChange={handleNotificationChange}
                className="mb-3"
              />

              <Form.Check
                type="switch"
                id="volunteer-notification"
                name="volunteer"
                label="New volunteer notifications"
                checked={notifications.volunteer}
                onChange={handleNotificationChange}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}>
          <Card bg="dark" text="white" className="border-secondary h-100">
            <Card.Body className="d-flex flex-column justify-content-center h-100">
              <h5>Save Changes</h5>

              <p className="text-secondary">
                Save all changes made to foundation details, admin profile,
                and notification preferences.
              </p>

              <Button
                variant="primary"
                className="w-100 w-lg-auto"
                onClick={handleSaveSettings}
              >
                <FaSave className="me-2" />
                Save Settings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Settings;