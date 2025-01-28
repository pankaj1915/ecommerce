import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Navbar.css'
import {useSelector} from 'react-redux'


const Navbar = () => {
  const state = useSelector(state => state.HandleReducer)
  const { isAuthenticated ,user} = useSelector((state) => state.HandleReducer2);
  return (
    <>
    <div className='header'>
      <div className='logo'> React E-commerce</div>
      <div className='navbar'> 
        <ul>

          <li>
              <NavLink to="/" className={ ({isActive}) => isActive ? "active-link" : ""} >Home</NavLink>
          </li>
          <li>
              <NavLink to="/about" className={ ({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
          </li>
          <li>
              <NavLink to="/product" className={ ({isActive}) => isActive ? "active-link" : ""}>Products</NavLink>
          </li>
          <li>
              <NavLink to="/contact" className={ ({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
          </li>

        </ul>
        
      </div>

      <div className='Carts'>

        <ul>

        <li>
              <NavLink to="/login" className={ ({isActive}) => isActive ? "active-link" : ""}>Login</NavLink>
        </li>
        <li>
              <NavLink to="/register" className={ ({isActive}) => isActive ? "active-link" : ""}>Register</NavLink>
        </li>
        <li>
              <NavLink to="/cart" className={ ({isActive}) => isActive ? "active-link" : ""}>Cart ({state.length})</NavLink>
        </li>
        </ul>
        <div>
   
    </div>

      </div>
      <div>
        {isAuthenticated ? (
          <h2>welcome, {user}</h2>

        ): (
          <h2>please login</h2>
        )}
      </div>

    </div>
       


    </>
  )
}

export default Navbar