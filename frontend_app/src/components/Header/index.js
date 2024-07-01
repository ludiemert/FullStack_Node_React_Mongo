import React, { useContext, useEffect } from "react";
import "./styles.css";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth); // Verifica se auth está sendo atualizado corretamente
  }, [auth]);

  return (
    <header>
      <nav>
        <a href="/login">Login</a>
        <a href="/">Home</a>
        <a href="/register">Register</a>
      </nav>

      {auth.user && <strong>Welcome 🥰😍 {auth.user.name}</strong>}
    </header>
  );
}

export default Header;
