import React from "react";
import "./global.css";

import Header from "./components/Header";

import AppRoutes from "./routes/routes.js";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./components/context/AuthContext.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
