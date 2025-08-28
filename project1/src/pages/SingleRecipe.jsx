import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipeContext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const params = useParams();

  // Find the recipe by id from context data
  const recipe = data.find((r) => r.id.toString() === params.id);

  // Manage favorites state and sync with localStorage
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Update the local favorites state if recipes data changes (to keep in sync)
  useEffect(() => {
    // Remove favorites that no longer exist in data
    const validFavorites = favorites.filter((fav) =>
      data.some((r) => r.id === fav.id)
    );
    if (validFavorites.length !== favorites.length) {
      setFavorites(validFavorites);
      localStorage.setItem("favorites", JSON.stringify(validFavorites));
    }
  }, [data]);

  // React Hook Form setup with recipe data as default values
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe?.image || "",
      title: recipe?.title || "",
      chef: recipe?.chef || "",
      description: recipe?.description || "",
      ingredients: recipe?.ingredients || "",
      instructions: recipe?.instructions || "",
      category: recipe?.category || "Breakfast",
    },
  });

  // Whenever recipe changes (e.g. after data updates), reset form defaults
  useEffect(() => {
    reset({
      image: recipe?.image || "",
      title: recipe?.title || "",
      chef: recipe?.chef || "",
      description: recipe?.description || "",
      ingredients: recipe?.ingredients || "",
      instructions: recipe?.instructions || "",
      category: recipe?.category || "Breakfast",
    });
  }, [recipe, reset]);

  // Handle recipe update
  const onSubmit = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id.toString() === params.id);
    if (index === -1) {
      toast.error("Recipe not found.");
      return;
    }
    const newData = [...data];
    newData[index] = { ...newData[index], ...updatedRecipe };
    setData(newData);
    localStorage.setItem("recipes", JSON.stringify(newData));
    toast.success("Recipe updated successfully!");
  };

  // Handle recipe delete with confirmation
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const filteredData = data.filter((r) => r.id.toString() !== params.id);
      setData(filteredData);
      localStorage.setItem("recipes", JSON.stringify(filteredData));
      toast.success("Recipe deleted successfully!");
      // Also remove from favorites if present
      const filteredFavorites = favorites.filter((f) => f.id.toString() !== params.id);
      setFavorites(filteredFavorites);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      navigate("/recipes"); // corrected route path assumes your recipe list is here
    }
  };

  // Add to favorites
  const addFavorite = () => {
    if (!favorites.some((f) => f.id === recipe.id)) {
      const newFavorites = [...favorites, recipe];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      toast.success("Added to favorites!");
    }
  };

  // Remove from favorites
  const removeFavorite = () => {
    const newFavorites = favorites.filter((f) => f.id !== recipe.id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    toast.info("Removed from favorites.");
  };

  // Show loading or recipe not found message
  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="text-3xl font-bold">Recipe Not Found!</h1>
      </div>
    );
  }

  // Render component
  return (
    <div className="w-full flex flex-wrap p-5 gap-12">

      {/* Recipe Image and Favorite Toggle */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
        <div className="self-end">
          {favorites.some((f) => f.id === recipe.id) ? (
            <i
              onClick={removeFavorite}
              className="ri-heart-fill text-4xl text-red-600 cursor-pointer"
              title="Remove from favorites"
            ></i>
          ) : (
            <i
              onClick={addFavorite}
              className="ri-heart-line text-4xl cursor-pointer"
              title="Add to favorites"
            ></i>
          )}
        </div>

        <h1 className="text-5xl font-black">{recipe.title}</h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-md object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Recipe Edit Form */}
      <form className="w-full md:w-1/2 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="block w-full border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image URL"
          required
        />

        <input
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          required
        />

        <input
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          required
        />

        <textarea
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("description")}
          placeholder="Start writing your recipe here"
          rows={3}
          required
        />

        <textarea
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("ingredients")}
          placeholder="Write ingredients separated by commas"
          rows={2}
          required
        />

        <textarea
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("instructions")}
          placeholder="Write instructions separated by commas"
          rows={3}
          required
        />

        <select
          className="block w-full border-b outline-0 p-2 mt-4"
          {...register("category")}
          required
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Supper">Supper</option>
        </select>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded py-2 transition"
          >
            Update Recipe
          </button>

          <button
            onClick={deleteHandler}
            type="button"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded py-2 transition"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;

//  import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { asyncgetrecipies } from "../store/actions/recipeActions";

// const SingleRecipe = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const params = useParams();
//     const { recipes } = useSelector((state) => state.recipeReducer);
//     const recipe = recipes && recipes.find((r) => r.id == params.id);

//     const [image, setimage] = useState(recipe.image);
//     const [title, settitle] = useState(recipe.title);
//     const [description, setdescription] = useState(recipe.description);
//     const [ingredients, setingredients] = useState(recipe.ingredients);
//     const [instructions, setinstructions] = useState(recipe.instructions);

//     const UpdateHandler = (e) => {
//         e.preventDefault();
//         const updatedRecipe = {
//             id: recipe.id,
//             title,
//             image,
//             description,
//             ingredients,
//             instructions,
//         };
//         const copyRecipe = [...recipes];
//         const recipeIndex = recipes.findIndex((r) => r.id == params.id);
//         copyRecipe[recipeIndex] = updatedRecipe;

//         localStorage.setItem("recipes", JSON.stringify(copyRecipe));
//         dispatch(asyncgetrecipies());

//         toast.success("Recipe Updated Successfully!");
//         navigate("/recipes");
//     };

//     return recipe ? (
//         <form onSubmit={UpdateHandler} className="w-[70%] m-auto  ">
//             <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
//                 Update <br /> Existing Recipe
//             </h1>
//             <input
//                 onChange={(e) => setimage(e.target.value)}
//                 value={image}
//                 type="url"
//                 className="w-full border rounded-md px-6 py-3 text-lg mb-5"
//                 placeholder="Recipe Image URL"
//             />
//             <input
//                 onChange={(e) => settitle(e.target.value)}
//                 value={title}
//                 type="text"
//                 className="w-full border rounded-md px-6 py-3 text-lg mb-5"
//                 placeholder="Recipe Name"
//             />
//             <textarea
//                 onChange={(e) => setdescription(e.target.value)}
//                 value={description}
//                 className="w-full border rounded-md px-6 py-3 text-lg mb-5"
//                 placeholder="recipe description..."
//             ></textarea>
//             <textarea
//                 onChange={(e) => setingredients(e.target.value)}
//                 value={ingredients}
//                 className="w-full border rounded-md px-6 py-3 text-lg mb-5"
//                 placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
//             ></textarea>
//             <textarea
//                 onChange={(e) => setinstructions(e.target.value)}
//                 value={instructions}
//                 className="w-full border rounded-md px-6 py-3 text-lg mb-5"
//                 placeholder="recipe instructions -> 'use comma to seperate instructions'..."
//             ></textarea>
//             <div className="w-full text-right">
//                 <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
//                     Re-Publish Recipe &nbsp; &#8594;
//                 </button>
//             </div>
//         </form>
//     ) : (
//         <h1 className="w-full text-center text-4xl text-green-600 mt-10">
//             Loading Recipe...
//         </h1>
//     );
// };

// export default  SingleRecipe;
