import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='  text-black flex justify-center gap-15 p-5'>
      
        <NavLink className={(e)=>(e.isActive ? "text-pink-300" : "")} to="/home">Home</NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-pink-300" : "")} to="/recipice">Recipice</NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-pink-300" : "")} to="/about">About</NavLink>
     
       <NavLink className={(e)=>(e.isActive ? "text-pink-300" : "")} to="/create-Recipice">Create Recipice</NavLink>
       {/* <NavLink className={(e)=>(e.isActive ? "text-pink-300" : "")} to="/recipice">Recipice</NavLink> */}
       
      
    </div>
  )
}

export default Nav
