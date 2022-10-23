import React from "react";
import { Button } from "react-bootstrap";
import "./Cards.css"

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="card ">
      <div className="card-body">
      <div className="card-img imegcards ">
        <img className="w-100 h-100 imegcards "  src={img} alt="" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}$ USD</p>
        <Button onClick={() => handleClick(item)}>Add to Cart</Button>
      </div>
      </div>
    </div>
  );
};

export default Cards;

