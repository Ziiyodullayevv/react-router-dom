import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const prams = useParams();
  console.log(prams, "params");
  const navigate = useNavigate();
  function handlerNavigate() {
    navigate(-1);
  }
  return (
    <div>
      <p>
        <button onClick={handlerNavigate}>orqaga qaytish</button>
      </p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
      <h4>{prams.productId}</h4>
      <h2>Product Details</h2>
    </div>
  );
};

export default ProductDetail;
