import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="brand">FoodieHub</span> 🍴  
          We deliver fresh and tasty food right at your doorstep.  
          Our mission is to make food ordering <b>simple</b>, <b>fast</b>, and <b>enjoyable</b>.
        </p>
        <div className="about-stats">
          <div className="stat-card">🍔 500+ Dishes</div>
          <div className="stat-card">🚚 1000+ Deliveries Daily</div>
          <div className="stat-card">⭐ 4.9/5 Rating</div>
        </div>
      </div>
    </div>
  );
};

export default About;