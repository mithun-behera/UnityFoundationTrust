import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors"
import Beneficaries from "./pages/Beneficiaries";
import Donations from "./pages/compaigns";
import Volunteers from "./pages/Volunteers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  function showPage(){
    if(activePage === "Dashboard") return <Dashboard/>;
    if(activePage === "Donors") return <Donors/>;
    if(activePage === "Compaingns") return <Campaigns/>;
    if(activePage === "Volunteers") return <Volunteers/>;
    if(activePage === "Reports") return <Reports />;
    if(activePage === "Settings") return <Settings/>;
  }
  return (
    <div className="d-flex min-vh-100 bg-dark text-white w-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
       <main className="flex-grow-1">
          <Navbar/>
          {showPage}
       </main>
    </div>
  );
}

export default App;