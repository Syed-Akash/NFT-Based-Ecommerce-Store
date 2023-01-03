import './Products.css'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Products=() =>{
    const [product,setProduct]= useState({});

    const location = useLocation()

    const productId = location.pathname.split("/")[2]
    
    useEffect(()=>{
      const fetchData = async ()=>{
          try{
              const res = await axios.get(`/products/${productId}`)
              setProduct(res.data)
          }catch(err){
              console.log(err)
          }
      };
      fetchData();
    },[productId])
    return(
        <>
        <Header/>
        <div className='product-page'>
        
        
        <div className='product' key={product.idproducts}>
        <div className='small'>
        <img className="small-img" src={product.img} alt='product-1'/>
        <img className="small-img" src={product.img} alt='product-1'/> 
        <img className="small-img" src={product.img} alt='product-1'/>
         <img className="small-img" src={product.img} alt='product-1'/>
        </div>
        <div className='big'>
            <img className='big-img' src={product.img} alt='product-1'/>
        </div>
        <div className='details'>
            <h2>About Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            <h2>Product details</h2>
            <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
            </ul>

        </div>
        <div className='btn-s'>
        <Button  className='atc-btn' variant="primary mx-2" >
        Add to Cart
      </Button>
      <Button  className='bn-btn' variant="primary mx-2" >
        Buy Now
      </Button>
        </div>
        </div>
         
        </div> 
        </>
    )
}
export default Products