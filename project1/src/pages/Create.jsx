import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for navigation

const Create = () => {
  const navigate = useNavigate(); // ✅ Import useNavigate for navigation
  const { data, setData } = useContext(recipeContext); // ✅ recipe data from context
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (recipe) => {
    // ✅ Add id to new recipe
    const newRecipe = { ...recipe, id: nanoid() };

    // ✅ Spread existing data (array), then add newRecipe
    const copyData = [...data, newRecipe];

    // ✅ Update context state
    setData(copyData);

    toast.success("Recipe created successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    

    

    // ✅ Reset form
    reset();
   navigate("/recipice"); // ✅ Navigate to the recipe list page
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image URL"
      />

      <input
        className="block border-b outline-0 p-2 mt-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      <input
        className="block border-b outline-0 p-2 mt-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />

      <textarea
        className="block border-b outline-0 p-2 mt-2"
        {...register("description")}
        placeholder="// Start writing your recipe here"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2 mt-2"
        {...register("ingredients")}
        placeholder="// Write ingredients separated by commas"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2 mt-2"
        {...register("instructions")}
        placeholder="// Write instructions separated by commas"
      ></textarea>

      <select
        className="block border-b outline-0 p-2 mt-2"
        {...register("category")}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Supper">Supper</option>
      </select>

      <button
        type="submit"
        className="block mt-5 bg-blue-500 text-white px-4 py-1 rounded"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
