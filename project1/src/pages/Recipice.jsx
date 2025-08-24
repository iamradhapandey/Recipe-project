import React from 'react'
import { useContext } from 'react';
import { recipeContext } from '../Context/RecipeContext'; // ✅ Import recipeContext
import RecipeCard from '../components/RecipeCard';

const Recipice = () => {
  const {data} = useContext(recipeContext ); // ✅ Use recipeContext to access data
  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className='flex flex-wrap'>{ data.length > 0 ?renderrecipes : "NO recipe found!"}</div>
  )
}

export default Recipice ;