import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

export default function Cart() {
  const { cart, setCart } = useContext(productContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      const amount = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(amount);
    };
    getTotal();
  }, [cart]);

  const decrease = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return <h2 className="text-xl font-bold mt-20">NO ITEMS IN THE CART</h2>;

  return (
    <>
      {cart.map((product) => (
        <div className="mt-10 lg:flex md:flex sm:flex-wrap" key={product.id}>
          <div className="max-w-sm bg-grey-200 shadow-lg mx-auto my-8 lg:w-full">
            <h2 className="text-xl font-bold" title={product.name}>
              {product.name}
            </h2>
            <h3 className="font-bold">{product.price} Rwf</h3>

            <div className="amount">
              <button
                className="text-red-400 font-bold text-xl"
                onClick={() => decrease(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button
                className="text-blue-500 font-bold text-xl"
                onClick={() => increase(product.id)}>+</button>
            </div>

            <div
              className="text-red-800 font-bold text-xl"
              onClick={() => removeProduct(product.id)}
            >
              X
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-sm bg-grey-200 shadow-lg mx-auto my-8 ">
        <Link to="/payment">Total Payment</Link>
        <h3>Total: {total} Rwf</h3>
      </div>
    </>
  );
}
