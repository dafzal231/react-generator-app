import DropDown from "./components/reusable/dropDown";
import Nav from "./components/Nav.jsx";
import Generator from "./components/Generator.jsx";
import Login from "./components/Login.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;