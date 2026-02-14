import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
