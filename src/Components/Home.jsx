import React from 'react'
import './Main.css'
import Products from './Products'


const Home = () => {
  return (
    <>

  <div  className='image'>
   
  <div  className='text'>
      <h1>New Season Arrivals</h1>

      <p>This is a wider card with supporting text below 
        as a natural lead-in to additional content. This content is a little bit longer.
      </p>

    </div>
    
  </div>
  <Products/>

    </>
  )
}

export default Home