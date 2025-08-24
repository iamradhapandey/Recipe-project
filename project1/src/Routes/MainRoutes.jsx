import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Recipice from "../pages/Recipice";   // 👈 yeh import zaroori hai
import SingleRecipe from "../pages/SingleRecipe"; // 👈 yeh import zaroori hai

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />       {/* default route */}
      <Route path="/about" element={<About />} />
      <Route path="/recipice" element={<Recipice/>} />
      <Route path="/recipice/details/:id" element={<SingleRecipe/>} />
      <Route path="/create-recipice" element={<Create />} />
    </Routes>
  );
};

export default MainRoutes;
