
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductsSlider.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function ProductsSlider(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1020 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1030, min: 900 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 650 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1
    }
  }
  
  const [products,setProducts]= useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get("/products")
            setProducts(res.data)
        }catch(err){
            console.log(err)
        }
    };
    fetchData();
  },[])
    return(
        <div>
                  {/* react-multi-carousel-dot-list  */}
                  <h1 id='slogan'>Explore, Sell, and Buy Products</h1>
                  <Carousel className='carousel' responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  //renderDotsOutside={renderButtonGroupOutside}
                  infinite={true}
                  ssr={true}
                  autoPlay={true}
                  autoPlaySpeed={2500}
                 >
                    {products.map((product)=>(
                        <div className='product' key={product.idproducts}>
                            
                    <div>
                   
                      <div className="box">
                      
                      <Link to={`/Product/${product.idproducts}`}>
                        
                          <div className="slide-img">
                            
                              <img src={product.img} alt="1"></img>
                              <div className='overlay'>
                                  <span className='buy-btn'>Buy Now</span>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <span>{product.name}</span>
                                  <span>New Arrival</span>
                              </div>
                              <span  className="price">{product.price}</span>
                                
                          </div>
                          </Link>
                  </div>
                  
                    {/* </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/2.jpg" alt="2"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/3.jpg" alt="3"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/4.jpg" alt="4"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/5.jpg" alt="5"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/6.jpg" alt="6"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box">
                          <div className="slide-img">
                              <img src="/D_Images/7.jpg" alt="7"></img>
                              <div className='overlay'>
                                  <a href='#' className='buy-btn'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box">
                              <div className="type">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price">$23</a>
                                  
                          </div>
                    </div> */}
                    </div> 
                    </div>
                  ))} 
                  </Carousel>
                  
                 
                
                  
        </div> 
        
    )
}
export default ProductsSlider;