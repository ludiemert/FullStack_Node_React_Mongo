import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import api from "../services/api.js";
import "./styles.css";

/**
 * 
 *name: String,
  email: String,
  username: String,
  password: String,
  phone: String,
 */

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function handleChange(e) {
    //e.target.name
    //e.target.value
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(user);
    api.post('/users', user).then(() => {
     //console.log(response);
     navigate("/");
    });
  }

  function handleLogin() {
    navigate("/login");
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>User Register</h2>
        <div className="row">
          <span>Name</span>
          <input type="text" name="name" onChange={handleChange} />
        </div>

        <div className="row">
          <span>E-mail</span>
          <input type="text" name="email" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Phone</span>
          <input type="text" name="phone" onChange={handleChange} />
        </div>

        <div className="row">
          <button>Register</button>
        </div>

        <div className="row buttons">
          <button type="button" onClick={handleLogin}>Return = Log-in 😉</button>
        </div>

      </form>
    </div>
  );
}

export default Register;
