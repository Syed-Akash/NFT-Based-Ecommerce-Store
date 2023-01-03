import './Top_Products.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function Top_Products(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1020 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1030, min: 1000 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1000, min: 800 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
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
            <h2 className='heading'>Top Products</h2>
            <Carousel className='carousel-2' responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                 >
                    {products.map((product)=>(
                        <div className='=product' key={product.idproducts}>
                    <div>
                      <div className="box-2">
                        <Link to={`/Product/${product.idproducts}`}>
                          <div className="slide-img-2">
                            
                              <img src={product.img} alt="1"></img>
                              <div className='overlay-2'>
                                  <span className='buy-btn-2'>Buy Now</span>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <span>{product.name}</span>
                                  <span>New Arrival</span>
                              </div>
                              <span className="price-2">{product.price}</span>
                                 
                          </div>
                          </Link>
                  </div>
                  </div>
                    </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/2.jpg" alt="2"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/3.jpg" alt="3"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/4.jpg" alt="4"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/5.jpg" alt="5"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/6.jpg" alt="6"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                //     <div>
                //       <div className="box-2">
                //           <div className="slide-img-2">
                //               <img src="/D_Images/7.jpg" alt="7"></img>
                //               <div className='overlay-2'>
                //                   <a href='#' className='buy-btn-2'>Buy Now</a>
                //               </div>
                //           </div>
                //           <div className="detail-box-2">
                //               <div className="type-2">
                //                   <a href='#'>Yellow Headphones</a>
                //                   <span>New Arrival</span>
                //               </div>
                //               <a href='#' className="price-2">$23</a>
                                  
                //           </div>
                //   </div>
                //     </div>
                ))} 
                  </Carousel>
                  <h2 className='heading'>Suggested Products</h2>
            <Carousel className='carousel-2' responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                 >
                    {products.map((product)=>(
                        <div className='=product' key={product.idproducts}>
                    <div>
                    
                      <div className="box-2">
                      <Link to={`/Product/${product.idproducts}`}>
                          <div className="slide-img-2">
                              <img src={product.img} alt="1"></img>
                              <div className='overlay-2'>
                                  <span className='buy-btn-2'>Buy Now</span>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <span>{product.name}</span>
                                  <span>New Arrival</span>
                              </div>
                              <span className="price-2">{product.price}</span>
                                  
                          </div>
                          </Link>
                          
                  </div>
                  
                    </div>
                    {/* <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/2.jpg" alt="2"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/3.jpg" alt="3"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/4.jpg" alt="4"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/5.jpg" alt="5"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/6.jpg" alt="6"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    <div>
                      <div className="box-2">
                          <div className="slide-img-2">
                              <img src="/D_Images/7.jpg" alt="7"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-2'>Buy Now</a>
                              </div>
                          </div>
                          <div className="detail-box-2">
                              <div className="type-2">
                                  <a href='#'>Yellow Headphones</a>
                                  <span>New Arrival</span>
                              </div>
                              <a href='#' className="price-2">$23</a>
                                  
                          </div>
                  </div>
                    </div>
                    */}
                  
                          </div>
                          ))} 
                          </Carousel>
                          <h2 className='heading'>Browse Categories</h2>
                  <div className='categories-section'>
                  
                  <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/1.jpg" alt="1"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Gadgets</a>
                              </div>
                          </div>
                          </div>
                          <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/2.jpg" alt="2"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Glasses</a>
                              </div>
                          </div>
                          </div>
                          <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/3.jpg" alt="3"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Watches</a>
                              </div>
                          </div>
                          </div>
                          
                          
                          </div>
                          <div className='categories-section'>
                  
                  <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/10.jpg" alt="4"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Shoes</a>
                              </div>
                          </div>
                          </div>
                          <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/5.jpg" alt="5"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Toys</a>
                              </div>
                          </div>
                          </div>
                          <div className="box-3">
                          <div className="slide-img-3">
                              <img src="/D_Images/11.jpg" alt="6"></img>
                              <div className='overlay-2'>
                                  <a href='#' className='buy-btn-3'>Electronics</a>
                              </div>
                          </div>
                          </div>
                          
                          
                          </div> 

        </div>
    )
}
export default Top_Products