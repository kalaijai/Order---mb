import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box shadow-lg">
        <h2 className="text-center mb-4">📩 Contact Us</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn contact-btn w-100">
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;