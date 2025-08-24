import React, { useState } from "react";
import "./Home.css";
import foodItems from "../data/foodItems";

const Home = ({ onOrder }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredItems = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to FoodieHub 🍴</h1>
          <p>Fresh meals delivered to your doorstep</p>
        </div>
      </div>

      {/* Search Bar + Filters */}
      <div className="search-bar-container">
        <div className="search-wrapper">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search for your favorite food..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>

      {/* Menu Items */}
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((food) => (
            <div className="food-card" key={food.id}>
              <img src={food.image} alt={food.name} className="food-img" />
              <h4>{food.name}</h4>
              <p className="price">₹{food.price}</p>
              <button className="order-btn" onClick={() => onOrder(food)}>
                Order Now
              </button>
            </div>
          ))
        ) : (
          <p className="no-items">No items found</p>
        )}
      </div>
    </div>
  );
};

export default Home;