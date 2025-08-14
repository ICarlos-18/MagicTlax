import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Explorar from "./Explorar";
import Admin from "./Admin";
import Login from "./Login";
import Register from "./Register";
import DetallePueblo from "./DetallePueblo";
import Sidebar from "./Sidebar";
import "./app.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-view">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pueblo/:id" element={<DetallePueblo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
