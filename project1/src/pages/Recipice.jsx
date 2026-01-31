// import React from 'react'
// import { useContext } from 'react';
// import { recipeContext } from '../Context/RecipeContext'; // ✅ Import recipeContext
// import RecipeCard from '../components/RecipeCard';

// const Recipice = () => {
//   const {data} = useContext(recipeContext ); // ✅ Use recipeContext to access data
//   const renderrecipes = data.map((recipe) => (
//     <RecipeCard key={recipe.id} recipe={recipe} />
//   ));
//   return (
//     <div className='flex flex-wrap'>{ data.length > 0 ?renderrecipes : "NO recipe found!"}</div>
//   )
// }

// export default Recipice ;


import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Recipice = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(storedRecipes);
  }, []);

  if (!recipes || recipes.length === 0) {
    return <p className="text-gray-500 text-lg p-4">No recipes found!</p>;
  }

  return (
    <div   className="flex flex-wrap gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );


};

export default Recipice;
