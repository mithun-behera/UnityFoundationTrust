import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <Sidebar />

      <main className="flex-grow-1">
        <Navbar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;