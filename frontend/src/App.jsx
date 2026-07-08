import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors";
import Beneficiaries from "./pages/Beneficiaries";
import Donations from "./pages/Donations";
import Campaigns from "./pages/Campaigns";
import Volunteers from "./pages/Volunteers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import PublicNavbar from "./public-components/PublicNavbar";

import Home from "./public-pages/Home";
import About from "./public-pages/About";
import OurWork from "./public-pages/OurWork";
import PublicCampaigns from "./public-pages/PublicCampaigns";
import User from "./public-pages/User";
import Contact from "./public-pages/Contact";
import Login from "./public-pages/Login";

function App() {
  const [websiteMode, setWebsiteMode] = useState("public");
  const [publicPage, setPublicPage] = useState("Home");
  const [activePage, setActivePage] = useState("Dashboard");

  function showPublicPage() {
    if (publicPage === "Home") {
      return <Home setPublicPage={setPublicPage} />;
    }

    if (publicPage === "About") {
      return <About />;
    }

    if (publicPage === "OurWork") {
      return <OurWork setPublicPage={setPublicPage} />;
    }

    if (publicPage === "Campaigns") {
      return <PublicCampaigns setPublicPage={setPublicPage} />;
    }

    if (publicPage === "User") {
      return <User />;
    }

    if (publicPage === "Contact") {
      return <Contact />;
    }

    if (publicPage === "Login") {
      return (
        <Login
          openAdminDashboard={() => setWebsiteMode("admin")}
          goToMemberPage={() => setPublicPage("User")}
        />
      );
    }

    return <Home setPublicPage={setPublicPage} />;
  }

  function showAdminPage() {
    if (activePage === "Dashboard") {
      return <Dashboard setActivePage={setActivePage} />;
    }

    if (activePage === "Donors") return <Donors />;
    if (activePage === "Beneficiaries") return <Beneficiaries />;
    if (activePage === "Donations") return <Donations />;
    if (activePage === "Campaigns") return <Campaigns />;
    if (activePage === "Volunteers") return <Volunteers />;
    if (activePage === "Reports") return <Reports />;
    if (activePage === "Settings") return <Settings />;

    return <Dashboard setActivePage={setActivePage} />;
  }

  if (websiteMode === "admin") {
    return (
      <div className="d-flex min-vh-100 bg-dark text-white w-100">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="flex-grow-1">
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
          />

          {showAdminPage()}
        </main>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      <PublicNavbar setPublicPage={setPublicPage} />

      {showPublicPage()}
    </div>
  );
}

export default App;