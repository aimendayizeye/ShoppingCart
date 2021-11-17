import React, { useContext } from "react";
import { productContext } from "../contexts/ProductContext";

function Product() {
  const { products ,addCart} = useContext(productContext);
  return (
    <div className="mt-10 lg:flex-none md:flex sm:flex-wrap">
    {products.map((product) => (
        <div class="max-w-sm bg-grey-200 shadow-lg mx-auto my-8 ">
          <img class="w-md " src="https://picsum.photos/200" alt="" />
          <div class="px-6 py-4">
            <h2 class="font-bold text-center" key={product.id}>{product.name}</h2>
            <p key={product.id}>{product.price}</p>
          </div>
          <button
            onClick={() => addCart(product.id)}
            className="rounded-full text-white font-bold p-2 mb-5 bg-green-400"
          >
            Add to Cart
          </button>
        </div>
    ))}
  </div>
)  
}
export default Product;
