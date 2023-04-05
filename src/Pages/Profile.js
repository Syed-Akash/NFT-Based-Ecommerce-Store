import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import Header from "../Components/Header"
import { AuthContext } from "../Context/authContext"
import './Profile.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


const Profile=()=>{
    const {currentUser}= useContext(AuthContext)
    const sellerId=currentUser.idseller
    const [seller,setSeller]= useState({})
    useEffect(()=>{
      const fetchData = async ()=>{
          try{
            
              const res = await axios.get(`/sellers/${sellerId}`)
              setSeller(res.data)
          }catch(err){
              console.log(err)
          }
      };
      fetchData();
    },[sellerId])
    return(
        <>
            <Header/>
            
            <div className="details-container">
                <div className="p-det">
                <h4>User Details</h4>
                    <h5>Email : <span className="p-text"> {seller.email}</span></h5>
                    <h5>User Name : <span className="p-text">{seller.username}</span></h5>
                </div>
                <div className="p-det">
                <h4>Contact Details</h4>
                    <h5>Address : <span className="p-text">  {seller.address}</span></h5>
                    <h5>Contact No : <span className="p-text"> {seller.contact}</span></h5>
                </div>
                <div className="p-det">
                <h4>Shipping Details</h4>
                    <h5>Shipping Address : <span className="p-text"> {seller.address}</span></h5>
                    <h5>Contact No :<span className="p-text">  {seller.contact}</span></h5>
                </div>
            </div>
            <div className="b-hist">
                <h1>Buying History</h1>
                    <div className="b-hist-table">
                    <table id="p-table">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Glasses</td>
                        <td>1</td>
                        <td>200</td>
                        <td>01/01/2023</td>
                        <td>Pending</td>
                        
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Toys</td>
                        <td>4</td>
                        <td>2000</td>
                        <td>01/01/2023</td>
                        <td>Pending</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Watch</td>
                        <td>8</td>
                        <td>5000</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>9</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>10</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>1600</td>
                        <td>01/01/2023</td>
                        <td>Delivered</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="a-p">
                <Link to={'/AddProduct'} className="add-pro">
                <Button  className='atc-btn' variant="primary mx-2" >
       Add Product
      </Button>
      </Link> 
      </div>
        </>
    )
}
export default Profile