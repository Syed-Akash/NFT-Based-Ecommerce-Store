import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import Header from "../Components/Header"
import { AuthContext } from "../Context/authContext"



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
                    <h5>Email : {seller.email}</h5>
                    <h5>User Name : {seller.username}</h5>
                </div>
                <div className="p-det">
                <h4>Contact Details</h4>
                    <h5>Address : {seller.address}</h5>
                    <h5>Contact No : {seller.contact}</h5>
                </div>
                <div className="p-det">
                <h4>Shipping Details</h4>
                    <h5>Shipping Address : {seller.address}</h5>
                    <h5>Contact No : {seller.username}</h5>
                </div>
            </div>
            
        </>
    )
}
export default Profile