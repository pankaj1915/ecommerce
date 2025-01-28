import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar';
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { additem } from "../redux/action/Action";

const Product = () => {

    const {id} = useParams();
    const [ product,setProduct ] = useState([]);
    const [ similarProducts,setSimilarProducts ] = useState([]);
    const [ loading,setLoading ] = useState(true);

    const dispatch = useDispatch();
    
    const addProduct = (product) => {
      dispatch(additem(product));
    };
    
    
    useEffect(() => {
      async  function getProduct (){
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
        const data2 = await response2.json();
        setSimilarProducts(data2)
        setLoading(false);
        
        
      };
      getProduct();
      
    },[id])
    
    if (loading) {
        return <p>loading....</p>
        
    }
    const Showproduct = () => {
        return (
            <>
            <div>
              <img src={product.image} width={400} height={400}/>
              <h4>category: {product.category}</h4>
              <h4>title: {product.title}</h4>
              <p>{product.rating && product.rating.rate}{" "}</p>
              <p>price: {product.price}</p>
              <p>description: {product.description}</p>

              <button
              onClick={() => addProduct(product)}
              >Add to Cart
              </button>

              <Link to="/cart" >Go to Cart</Link>
            </div>

            </>
        )
    }

const ShowSimilarProduct = () => {
  return (
    <>
     <div className="py-4 my-4">
     <div className="d-flex">
      {similarProducts.map((item) => {
        return (
          <>
            <div>
              <img src={item.image} width={300} height={300}/>
              <h5>{item.title}</h5>
              <Link to={'/product/' + item.id}> Buy Now </Link>

              <button onClick={ () => addProduct(item)}>
                Add to cart
              </button>
            </div>
          </>
        )
      })}
      </div>
    </div>
    </>
  )
}

  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="row"><Showproduct />
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={100}
            >
               <ShowSimilarProduct />
            </Marquee>
          </div>
        </div>
      </div>
      </div>
   
    </>
  )
}

export default Product