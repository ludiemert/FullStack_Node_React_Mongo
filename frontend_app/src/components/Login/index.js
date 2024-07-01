import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { AuthContext } from "../context/AuthContext.js";


function Login() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    authentication(user);
    navigate("/")
  };

  function handleRegister() {
    navigate("/register");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>User Login</h2>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="row buttons">
          <button type="submit">Log-in</button>

          <button type="button" onClick={handleRegister}>
            Register 💻
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
