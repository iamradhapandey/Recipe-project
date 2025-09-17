import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";   // 👈 important!
import RecipeContext from "./Context/RecipeContext.jsx";
import { FavoritesProvider } from "./Context/FavoritesContext.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RecipeContext>
    <FavoritesProvider>
        <App />
        </FavoritesProvider>
    </RecipeContext>
  </BrowserRouter>
);
