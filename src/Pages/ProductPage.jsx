import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();

  const params = useParams();

  return (
    <div>
      ProductPage
      <div
        style={{
          border: "1px solid white",
        }}
      >
        You visited {params.id}
        {/* <h3>Redmi Note 10</h3>
        <p>Price : $500</p>
        <button
          onClick={() => {
            navigate("/order", {
              state: phoneId,
            });
          }}
        >
          Checkout
        </button> */}
      </div>
    </div>
  );
}

export default ProductPage;
