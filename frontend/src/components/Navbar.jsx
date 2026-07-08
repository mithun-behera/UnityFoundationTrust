import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaBars,
  FaHome,
  FaUsers,
  FaHandHoldingHeart,
  FaDonate,
  FaBullhorn,
  FaUserFriends,
  FaChartBar,
  FaCog,
  FaHeart,
} from "react-icons/fa";

function Navbar({ activePage, setActivePage }) {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Donors", icon: <FaUsers /> },
    { name: "Beneficiaries", icon: <FaHandHoldingHeart /> },
    { name: "Donations", icon: <FaDonate /> },
    { name: "Campaigns", icon: <FaBullhorn /> },
    { name: "Volunteers", icon: <FaUserFriends /> },
    { name: "Reports", icon: <FaChartBar /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  function handleMenuClick(pageName) {
    setActivePage(pageName);
    setShowMenu(false);
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-dark border-bottom border-secondary px-3 px-md-4 py-3">
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <Button
            variant="outline-secondary"
            className="d-lg-none"
            onClick={() => setShowMenu(true)}
          >
            <FaBars />
          </Button>

          <div
            className="input-group d-none d-md-flex"
            style={{ maxWidth: "300px" }}
          >
            <span className="input-group-text bg-dark text-secondary border-secondary">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 gap-md-3">
          <FaBell className="fs-5 text-secondary" />

          <div className="d-flex align-items-center gap-2">
            <FaUserCircle className="fs-2 text-primary" />

            <div className="d-none d-sm-block">
              <div className="fw-bold text-white">Admin</div>
              <small className="text-secondary">Administrator</small>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <FaHeart className="text-primary me-2" />
            Unity Foundation Trust
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="nav flex-column gap-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={
                  activePage === item.name
                    ? "btn btn-primary text-start"
                    : "btn btn-dark text-start"
                }
              >
                <span className="me-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;