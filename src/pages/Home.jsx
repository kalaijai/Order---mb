import React from "react";
import dataItems from "../data/foodItems";  
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section with background */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to FoodieHub 🍴</h1>
          <p>Fresh meals delivered to your doorstep 🚀</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for your favorite food..."
          className="search-bar"
        />
      </div>

      {/* Menu Section */}
      <div className="menu-container">
        <h2>Our Menu</h2>
        <div className="row">
          {dataItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-success">₹{item.price}</p>
                  <button className="btn btn-warning">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;