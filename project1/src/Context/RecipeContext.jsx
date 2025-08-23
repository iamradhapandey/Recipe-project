import React, { useState, createContext } from 'react';

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data); // ✅ yaha galat object ko hata diya

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
