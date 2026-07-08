import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

function PublicNavbar({ setPublicPage }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold"
          onClick={() => setPublicPage("Home")}
        >
          <FaHeart className="text-danger me-2" />
          Unity Foundation Trust
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="public-navbar-nav" />

        <Navbar.Collapse id="public-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link onClick={() => setPublicPage("Home")}>
              Home
            </Nav.Link>

            <Nav.Link onClick={() => setPublicPage("About")}>
              About Us
            </Nav.Link>

            <Nav.Link onClick={() => setPublicPage("OurWork")}>
              Our Work
            </Nav.Link>

            <Nav.Link onClick={() => setPublicPage("Campaigns")}>
              Campaigns
            </Nav.Link>

            <Nav.Link onClick={() => setPublicPage("Contact")}>
              Contact
            </Nav.Link>

            <Button
              variant="outline-light"
              size="sm"
              className="ms-lg-3 mt-2 mt-lg-0"
              onClick={() => setPublicPage("Login")}
            >
              Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="ms-lg-2 mt-2 mt-lg-0"
              onClick={() => setPublicPage("BecomeMember")}
            >
              Become a Member
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PublicNavbar;