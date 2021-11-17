import React,{useContext}from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

function Navbar() {
  const {cart} = useContext(productContext);

  return (
    
      <nav className="shadow-lg bg-gray-200 flex justify-center p-2 md:flex-1">
        
          <ul className="flex gap-5 md:flex-wrapp">
            <div className="flex gap-8">
           <li> <Link  to="/" className="rounded-full shadow-md border-1 p-2 w-auto h-auto text-font-bold">ShoppingCart</Link></li>
           <li><Link className="" to="/form">Add Product</Link></li> 
          <li><Link to="/home" className=""> Home</Link></li>   
          {/* <li> <Link to="/contact" className="">Contact Me</Link></li>   */}
          </div> 
          <div className="justify-between"> 
            <Link to="/cart" className="justify-end">Cart ({cart.length}) </Link>
            </div>
        </ul>
      
       
      </nav>
 
  );
}

export default Navbar;
