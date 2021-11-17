import { createContext, useState } from "react";
import uuid from 'react-uuid'
export const productContext = createContext();

function ProductContextProvider(props) {

  const [products, setProducts] = useState([]);
  const newProducts = {
    id: uuid(),
    name: "Product1",
    price: 200,
    quantity: 1,
  };
  function handleButton() {
    const allProducts = [...products, newProducts];
    setProducts(allProducts);
    //console.log(products);
  }

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product is already in the cart.");
    }
  };
  const value = {
    addCart,
    handleButton,
    products,
    cart,
    setCart,
  };
  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
}
export default ProductContextProvider;
