 import React from 'react'
 import { useContext } from 'react';
    import { useParams } from 'react-router-dom';
    import { recipeContext } from '../Context/RecipeContext'; // ✅ Import recipeContext
    import { set, useForm } from 'react-hook-form';
    import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate for navigation
import { toast } from 'react-toastify';
 
 const SingleRecipe = () => {

    const navigate = useNavigate(); // ✅ Import useNavigate for navigation
    const { data, setData } = useContext(recipeContext); // ✅ recipe data from context
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            image: "",
            title: "",
            chef: "",
            description: "",
            ingredients: "",
            instructions: "",
            category: "Breakfast"
        }
    });
  
    const onSubmit = (recipe) => {
        const index = data.findIndex((r) => r.id.toString() === params.id);
        const copyData = [...data];
        copyData[index] = { ...copyData[index], ...recipe };
        // console.log(index);
        setData(copyData);
        toast.success("Recipe updated successfully!")
    };
    const DeleteHandler = () => {
        const filteredData = data.filter((recipe) => recipe.id.toString() !== params.id);
        setData(filteredData);
        toast.success("Recipe deleted successfully!");
        navigate("/recipice"); // ✅ Navigate to the recipe list page after deletion
    }

    
    const params = useParams();
    console.log("params.id:", params.id);
    const recipe = data.find((recipe) => recipe.id.toString() === params.id);
    console.log(recipe);
   return  recipe ? (
     <div className='w-full flex'>
        <div className='left w-1/2 p-2'>
        <h1 className='text-5xl font-black'>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className='w-1/2 h-1/2 object-cover' />

        </div>
        


        <form className = " w-1/2 p-2"onSubmit={handleSubmit(onSubmit)}>
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
        update Recipe
      </button>
      <button onClick={DeleteHandler}
        type="submit"
        className="block mt-5 bg-red-500 text-white px-4 py-1 rounded"
      >
        Delete Recipe
      </button>
    </form>

     </div>
   ) :(
        <div className='w-full flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold'>Recipe Not Found!</h1>
        </div>
   )
   
 }
 
 export default SingleRecipe