import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TextFieldPage from "./components/TextField";
import SelectPage from "./components/Select";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="space-app">

        <div className="header">
          <span className="astronaut">🚀</span>
          <h1>Implement Routing in SPA</h1>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/textfield">TextField</Link>
          <Link to="/select">Select</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/textfield" element={<TextFieldPage />} />
          <Route path="/select" element={<SelectPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
