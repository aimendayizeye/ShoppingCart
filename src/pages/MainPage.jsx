import React from "react";
import Product from "../components/Product";
function MainPage() {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Available Products</h1>
      <ul>
        <Product />
      </ul>
    </div>
  );
}

export default MainPage;
