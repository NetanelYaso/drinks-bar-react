import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <Button onClick={() => handleChange(item, 1)}>+</Button>
            <Button>{item.amount}</Button>
            <Button onClick={() => handleChange(item, -1)}>-</Button>
          </div>
          <div>
            <span>{item.price}</span>
            <Button onClick={() => handleRemove(item.id)}>Remove</Button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price :</span>
        <span> {price}$ (USD)</span>
      </div>
    </article>
  );
};

export default Cart;
