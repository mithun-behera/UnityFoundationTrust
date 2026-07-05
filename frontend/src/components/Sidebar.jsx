import {
  FaHome,
  FaUsers,
  FaHandHoldingHeart,
  FaDonate,
  FaBullhorn,
  FaUserFriends,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaHeart,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside
      className="bg-dark text-white p-3 d-flex flex-column vh-100"
      style={{ width: "260px" }}
    >
      <div className="d-flex align-items-start gap-2 mb-4">
        <FaHeart className="text-primary fs-3 mt-1" />

        <div>
          <h5 className="mb-1">Unity Foundation Trust</h5>
          <small className="text-secondary">
            Serving Humanity Through Unity
          </small>
        </div>
      </div>

      <div className="nav flex-column gap-2">
        <button className="btn btn-primary text-start">
          <FaHome className="me-2" />
          Dashboard
        </button>

        <button className="btn btn-dark text-start">
          <FaUsers className="me-2" />
          Donors
        </button>

        <button className="btn btn-dark text-start">
          <FaHandHoldingHeart className="me-2" />
          Beneficiaries
        </button>

        <button className="btn btn-dark text-start">
          <FaDonate className="me-2" />
          Donations
        </button>

        <button className="btn btn-dark text-start">
          <FaBullhorn className="me-2" />
          Campaigns
        </button>

        <button className="btn btn-dark text-start">
          <FaUserFriends className="me-2" />
          Volunteers
        </button>

        <button className="btn btn-dark text-start">
          <FaChartBar className="me-2" />
          Reports
        </button>

        <button className="btn btn-dark text-start">
          <FaCog className="me-2" />
          Settings
        </button>
      </div>

      <button className="btn btn-outline-danger text-start mt-auto">
        <FaSignOutAlt className="me-2" />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;