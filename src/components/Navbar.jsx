import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link
          to={"/contact"}
          state={{
            name: "Sakthi",
            phone: 8056920663,
          }}
        >
          Contact
        </Link>
        <Link to={"/product"}>Product</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
