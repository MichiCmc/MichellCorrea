import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {




  return (
    <nav className='relative items-center p-4'>


 
      <section className='flex '>
        <Link to="/About" > About </Link> 
        <Link to="/About" > About </Link> 
        <Link to="/About" > About </Link> 
        <Link to="/About" > About </Link>
      </section>
      <div className='absolute inset-0 flex justify-center '>
        <img src="https://i.ibb.co/h2X7ds9/IMG-20230314-210541-1-removebg-preview.png" alt="" />
      </div>

  


    </nav>
  )
}

export default Navbar