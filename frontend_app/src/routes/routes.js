import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Home from "../components/Home";
import Login from "../components/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
