import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const array = [1, 2, 3, 4, 5];
  return (
    <div>
      Home
      {array.map((id) => {
        return (
          <div key={id}>
            <Link to={`/product/${id}`}>Go to Product {id}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
