import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../Context/RecipeContext";
import { FavoritesContext } from "../context/FavoritesContext";

// Ratings bar data (static example)
const ratingsData = {
  average: 4.5,
  reviews: 120,
  breakdown: [
    { stars: 5, percent: 40 },
    { stars: 4, percent: 30 },
    { stars: 3, percent: 15 },
    { stars: 2, percent: 10 },
    { stars: 1, percent: 5 },
  ],
};

const RecipeDetails = () => {
  const { id } = useParams();
  const { data = [] } = useContext(recipeContext);
  const { favorites = [], addFavorite = () => {}, removeFavorite = () => {} } = useContext(FavoritesContext);

  const recipe = data.find((r) => String(r.id) === id);
  if (!recipe) return null;
  const isFav = favorites.some((fav) => fav.id === recipe.id);

  return (
    <main className="bg-[#161a17] min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Image Card */}
        <div className="md:w-1/2 bg-[#232823] rounded-xl shadow-lg p-2 flex items-center">
          <img
            src={recipe.image || "https://via.placeholder.com/800x400"}
            alt={recipe.title}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
        {/* Info Panel */}
        <div className="md:w-1/2 flex flex-col justify-start gap-6">
          <h1 className="text-3xl font-extrabold text-white mt-2 mb-2">{recipe.title}</h1>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">{ratingsData.average}</span>
              <div className="flex items-center ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}
                    className={`text-xl ${i < Math.floor(ratingsData.average) ? "text-green-400" : "text-gray-600"}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-base text-gray-300">{ratingsData.reviews} reviews</span>
            </div>
            <div className="mt-1 mb-5 space-y-2 w-[80%]">
              {ratingsData.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="w-4 text-white text-xs">{item.stars}</span>
                  <div className="flex-1 bg-gray-800 rounded h-2 mx-2 overflow-hidden">
                    <div
                      className="bg-green-700 h-2"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-gray-400 text-xs">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className="mb-2 text-gray-300">{recipe.description}</p>
          {/* Ingredients & Instructions */}
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Ingredients</h2>
            <p className="mb-2 text-white font-normal">{recipe.ingredients}</p>
            <h2 className="text-lg font-bold text-white mb-1">Instructions</h2>
            <p className="mb-3 text-white font-normal">{recipe.instructions}</p>
          </div>
          {/* Wide Save Button */}
          <button
            onClick={() => (isFav ? removeFavorite(recipe.id) : addFavorite(recipe))}
            className={`mt-6 w-full px-6 py-3 rounded-full font-bold text-[18px] transition-shadow shadow focus:outline-none ${
              isFav
                ? "bg-green-700 text-white flex items-center justify-center gap-2"
                : "bg-blue-700 text-white flex items-center justify-center gap-2"
            }`}
          >
            {isFav ? "❤️ Saved" : "🤍 Save"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetails;
