import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { additem } from "../redux/action/Action";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Products = () => {
  const [data,setData] = useState([])
  const [filter,setFilter] = useState(data)
  const [loading,setLoading] = useState(true)


   const dispatch = useDispatch();
      
   const addProduct = (product) => {
    dispatch(additem(product));
  };


  
  useEffect(() => {
  async function getProducts (){
      const response = await fetch ('https://fakestoreapi.com/products/');
        setData(await response.clone().json());
        setFilter(await response.json())
        setLoading(false)
    }
    getProducts();
  },[])
  
  if (loading) {
    return <h1 className='text-center'>Loading...</h1>
    
  }

function FilterProducts(cat){
  const updatedList = data.filter((item) =>item.category === cat )
  setFilter(updatedList)
}

  function ShowProducts (){
    return(
      <>
      <div className='text-center'>
        <button onClick={() => setFilter(data)}> All </button>
        <button onClick={() => FilterProducts("men's clothing")}> Men's clothing </button>
        <button onClick={() => FilterProducts("women's clothing")}> Women's clothing </button>
        <button onClick={() => FilterProducts("jewelery")}> Jewwllery </button>
        <button onClick={() => FilterProducts("electronics")}> Electronics </button>
        </div>

        <div className='main1'>
        {filter.map((product) => {
          return(
            <>
          
              <div className='card1'>
               
                  <img className='img1' src={product.image} alt='image' />
                
                <div className='card-body1'>
                  <p> title:{product.title}</p>
                  <p> price: {product.price}$</p>
                </div>
                <div className='card-link1'>
                <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
          

            </>
          )

        })}
        
          </div>
      </>
    )
  }

  return (
    <div>
        <h1 className='text-center'>Products</h1>
        <ShowProducts/>
    </div>
  )
}

export default Products