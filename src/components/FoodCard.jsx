import React from "react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <button className="order-btn" onClick={() => addToCart(food)}>
        Order Now
      </button>
    </div>
  );
};

export default FoodCard;