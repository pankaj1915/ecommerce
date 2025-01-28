import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contact from './Components/Contact';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Product from './Components/Product';
import Checkout from './Components/Checkout';

function App() {

  const router = createBrowserRouter([
    { path: '/',
      element: <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>

    },
    { path: '/product',
      element: <div>
        <Navbar/>
        <Products/>
        <Footer/>
      </div>

    },
    { path: "/product/:id",
      element: <div>
       
        <Product/>
        <Footer/>
      </div>

    },
    { path: '/about',
      element: <div>
        <Navbar/>
        <About/>
        <Footer/>
      </div>

    },
    { path: '/contact',
      element: <div>
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>

    },
    { path: '/login',
      element: <div>
        <Navbar/>
        <Login/>
        <Footer/>
      </div>

    },
    { path: '/register',
      element: <div>
        <Navbar/>
        <Register/>
        <Footer/>
      </div>

    },
    { path: '/checkout',
      element: <div>
        <Navbar/>
        <Checkout/>
        <Footer/>
      </div>

    },
    { path: '/cart',
      element: <div>
        <Navbar/>
        <Cart/>
        
      </div>

    },
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
