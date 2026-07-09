import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

function PublicNavbar({ setPublicPage }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold"
          onClick={(e) => {
            e.preventDefault();
            setPublicPage("Home");
          }}
        >
          <FaHeart className="text-danger me-2" />
          Unity Foundation Trust
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="public-navbar-nav" />

        <Navbar.Collapse id="public-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            <Nav.Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setPublicPage("Home");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setPublicPage("About");
              }}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              href="#our-work"
              onClick={(e) => {
                e.preventDefault();
                setPublicPage("OurWork");
              }}
            >
              Our Work
            </Nav.Link>

            <Nav.Link
              href="#campaigns"
              onClick={(e) => {
                e.preventDefault();
                setPublicPage("Campaigns");
              }}
            >
              Campaigns
            </Nav.Link>

            <Nav.Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setPublicPage("Contact");
              }}
            >
              Contact
            </Nav.Link>

            <Button
              variant="outline-light"
              size="sm"
              className="ms-lg-2 mt-2 mt-lg-0"
              onClick={() => setPublicPage("Login")}
            >
              Admin Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="ms-lg-2 mt-2 mt-lg-0"
              onClick={() => setPublicPage("User")}
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