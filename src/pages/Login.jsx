import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box shadow-lg">
        <h2 className="mb-3">Login 🔑</h2>
        <p className="text-muted">Access your account & start ordering</p>

        <form>
          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="login-links mt-3">
          <p>
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;