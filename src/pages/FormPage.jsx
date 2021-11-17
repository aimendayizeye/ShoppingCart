import React from "react";
import { productContext } from "../contexts/ProductContext";
import { useContext } from "react";
// import Product from "../components/Product";
function FormPage() {
  const { handleButton } = useContext(productContext);
  return (
    <div>
      <button className="p-2 bg-blue-400 rounded-md shadow-md" onClick={handleButton}>Add Products</button>
    </div>
  );
}
export default FormPage;
