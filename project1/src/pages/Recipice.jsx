import React from 'react'
import { useContext } from 'react';
import { recipeContext } from '../Context/RecipeContext'; // ✅ Import recipeContext

const Recipice = () => {
  const {data} = useContext(recipeContext ); // ✅ Use recipeContext to access data
  const renderrecipes = data.map((recipe) => (
    <div key={recipe.id} className="recipe-card">
      <h1>{recipe.title}</h1>
      </div>
  ));
  return (
    <div>{renderrecipes}</div>
  )
}

export default Recipice ;