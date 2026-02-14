import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Contact Form</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default Contact;
