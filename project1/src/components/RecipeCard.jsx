import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null; // ✅ prevent crash if recipe is missing

  const { id, image, title, chef, description} = recipe;

  return (
    <Link to={`/recipice/details/${id}`} className="duration-150 hover:scale-105 mr-3 mb-03 block border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={image || "https://via.placeholder.com/300x200"} // ✅ fallback image
        alt={title || "No title"}
        className="w-full h-40 object-cover rounded"
      />

      <h1 className="text-lg font-bold mt-2">{title}</h1>

      <small className="text-gray-500">👨‍🍳 {chef}</small>

      <p className="text-gray-700 text-sm mt-2">
        {(description || "").slice(0, 100)}...
        <small className="text-blue-400"> Read more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
