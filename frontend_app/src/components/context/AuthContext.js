import React, { createContext, useCallback, useState } from "react";
import api from "../services/api.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const authentication = useCallback(({ username, password }) => {
    api
      .post("/session", { username, password })
      .then((response) => {
        // Verifique o formato da resposta da API e como os dados estão estruturados
        setAuth(response.data); // Assumindo que response.data contém o usuário autenticado com o nome
        localStorage.setItem("@token:totalzero", response.data.token);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ authentication, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
