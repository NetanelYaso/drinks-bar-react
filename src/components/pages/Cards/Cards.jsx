import React from "react";
import "./Cards.css"

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="card  col-md-4 mb-5 w-25">
      <div className="card-body">
      <div className="card-img imegcards ">
        <img className="w-100 h-100 imegcards "  src={img} alt="" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}USD</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default Cards;

