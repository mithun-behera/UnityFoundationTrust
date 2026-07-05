import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center bg-dark border-bottom border-secondary px-4 py-3">
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <span className="input-group-text bg-dark text-secondary border-secondary">
          <FaSearch />
        </span>

        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Search..."
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <FaBell className="fs-5 text-secondary" />

        <div className="d-flex align-items-center gap-2">
          <FaUserCircle className="fs-2 text-primary" />

          <div>
            <div className="fw-bold text-white">Admin</div>
            <small className="text-secondary">Administrator</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;