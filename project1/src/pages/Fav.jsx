import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  // Load favorites from localStorage on component mount
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Remove recipe from favorites
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Render
  if (favorites.length === 0) {
    return <h2>No favorites added yet.</h2>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {favorites.map((recipe) => (
        <div key={recipe.id} className="w-72">
          <RecipeCard recipe={recipe} />
          <button
            className="mt-2 bg-red-600 text-white rounded px-4 py-1"
            onClick={() => removeFromFavorites(recipe.id)}
          >
            Remove Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Fav;


