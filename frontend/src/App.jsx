import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <Sidebar />

      <main className="flex-grow-1">
        <Navbar />

        <div className="p-4">
          <h1>Dashboard</h1>
          <p className="text-secondary">
            Welcome to Unity Foundation Trust.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;