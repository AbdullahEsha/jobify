import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Login, Register } from "./pages/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
