import React, { useContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "../Context/RecipeContext";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Supper"];

const HomePage = () => {
  const { data } = useContext(recipeContext);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  // Toggle favorite for recipe
  const toggleFavorite = (recipe) => {
    const isFav = favorites.some((f) => f.id === recipe.id);
    let updatedFavs;
    if (isFav) {
      updatedFavs = favorites.filter((f) => f.id !== recipe.id);
    } else {
      updatedFavs = [...favorites, recipe];
    }
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  // Filter by category and search
  const filteredRecipes = useMemo(() => {
    let filtered = data;
    if (activeCategory !== "All") {
      filtered = filtered.filter((r) => r.category === activeCategory);
    }
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.chef.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [activeCategory, searchTerm, data]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Recipe Master</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or chef..."
          className="border rounded p-2 w-full max-w-md outline-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset page on search
          }}
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="mb-6 flex justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded font-semibold shadow ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1); // reset page on filter
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedRecipes.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No recipes found matching your criteria.
          </p>
        )}

        {paginatedRecipes.map((recipe) => {
          const isFav = favorites.some((f) => f.id === recipe.id);
          return (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <Link to={`/recipe/${recipe.id}`} className="block">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
                  <button
                    onClick={() => toggleFavorite(recipe)}
                    className="text-red-500 text-2xl focus:outline-none"
                    title={isFav ? "Remove from favorites" : "Add to favorites"}
                    aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                  >
                    {isFav ? "♥" : "♡"}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-1">Chef: {recipe.chef}</p>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {recipe.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
