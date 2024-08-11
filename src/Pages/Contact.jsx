import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const { name, phone } = location.state;
  return (
    <div>
      Contact {name} by {phone}
    </div>
  );
}

export default Contact;
