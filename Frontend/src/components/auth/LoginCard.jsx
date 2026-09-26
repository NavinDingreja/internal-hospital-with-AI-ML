import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your backend login will go here
  };

  return (
    <div className="login-section">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your hospital management account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="input-group">
            <label htmlFor="employeeId">Employee ID</label>

            <input
              id="employeeId"
              type="text"
              name="employeeId"
              value={credentials.employeeId}
              onChange={handleChange}
              placeholder="Enter Employee ID"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="secure-text">
          🔒 Your information is securely protected
        </p>

      </div>
    </div>
  );
}

export default LoginCard;