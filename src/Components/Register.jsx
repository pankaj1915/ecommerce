import React from 'react'
import './Main.css'
import {NavLink} from 'react-router-dom'
const Register = () => {
  return (
    <>
     <h1 className='h1'>Register</h1>
    <form>
       
        <label>Full Name</label> <br></br>
        <input 
        type='text'
        placeholder='Enter name'/> <br></br>
        <label>Email adress</label> <br></br>
        <input 
        type='text'
        placeholder='name@example.com'/> <br></br>
        <label>Pasword</label> <br></br>
        <input 
        type='text'
        placeholder='Password'/> <br></br>
        <p>Already has an account ? <NavLink to='/login'>Login</NavLink></p>
        <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                  register
                </button>

    </form>

    </>
  )
}

export default Register