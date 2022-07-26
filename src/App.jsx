import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
