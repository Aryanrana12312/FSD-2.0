import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const { dark } = useContext(ThemeContext);

  const style = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div className={`app-container ${dark ? "dark-mode" : ""}`}>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
