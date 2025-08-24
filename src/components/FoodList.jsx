import React, { useState } from "react";
import foodItems from "../data/foodItems";
import { useCart } from "../context/CartContext";
import "./FoodList.css";   // ✅ import CSS

const FoodList = () => {
  const { addToCart } = useCart();
  const [clickedButton, setClickedButton] = useState(null);

  const handleOrder = (food, id) => {
    addToCart(food);

    // trigger animation
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 400); // reset after animation
  };

  return (
    <div className="food-list">
      {foodItems.map((food) => (
        <div className="food-card" key={food.id}>
          <img src={food.image} alt={food.name} />
          <h3>{food.name}</h3>
          <p>₹{food.price}</p>
          <button
            className={clickedButton === food.id ? "animate" : ""}
            onClick={() => handleOrder(food, food.id)}
          >
            Order Now
            
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;