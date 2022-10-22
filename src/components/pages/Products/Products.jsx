import "./Products.css";
import React, { useState } from "react";
import Amazon from "../Amazon/Amazon";
import Navbar from "../../featurs/Navbar/Navbar";
import Cart from "../Cart/Cart"
function Products() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />

      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}


    </React.Fragment>
  );
};

export default Products;
