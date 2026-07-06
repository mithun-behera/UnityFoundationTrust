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

function Sidebar({activePage, setActivePage}) {
       const menuItems = [
        {name: "Dashboard",icon: <FaHome/>},
        {name:"Donors",icon:<FaUsers/>},
        {name:"Beneficiaries",icon:<FaHandHoldingHeart/>},
        {name:"Donations",icon:<FaDonate/>},
        {name: "Campaigns",icon:<FaBullhorn/>},
        {name: "Volunteers", icon:<FaUserFriends/>},
        {name:"Reports",icon:<FaChartBar/>},
        {name:"Settings",icon:<FaCog/>},
       ];
  return (
    <aside
      className="bg-dark text-white p-3 d-flex flex-column vh-100 border-end border-secondary"
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
           {menuItems.map((item) =>(
            <button key={item.name} onClick={() => setActivePage(item.name)} className={activePage === item.name? "btn btn-primary text-start" : "btn btn-dark txt-start"}>
              <span className="me-2">{item.icon}</span> 
              {item.name}
            </button>
           ))}
      </div>

      <button className="btn btn-outline-danger text-start mt-auto">
        <FaSignOutAlt className="me-2" />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;