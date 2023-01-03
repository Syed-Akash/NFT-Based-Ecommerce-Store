import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser}  from '@fortawesome/free-brands-svg-icons'
import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import { AuthContext} from '../Context/authContext';
import { useContext } from 'react';
function Header(){
    const{ currentUser, logout}= useContext(AuthContext);
    return(
        <>
        
            <img id='logo' src="/D_Images/logo.jpg" alt="Logo"></img>
            <div id='header_div'>
           
                     
                <FontAwesomeIcon id='wallet' icon={faWallet}/>
               
                <div className="dropdown">
                <button className="dropbtn">
                <FontAwesomeIcon id='profile' icon={faUser}/>
                </button>
                
                
                        
                        <div className="dropdown-content">
                           {currentUser ? (
                            <>
                            <Link to="/Profile" >Profile</Link>
                            <a href="#">Connect Wallet</a>
                            <Link to="/" onClick={logout}>Logout</Link>
                            
                            </>
                            )
                             :(<>
                                <Link to="/SignIn">SignIn</Link>
                                <Link to="/Register">Register</Link>
                                <a href="#">Connect Wallet</a></>
                            )}
                            
                            
                        </div>
                        </div>
                        <div className="dropdown">
                <button className="dropbtn-2">
                <Link to="/Categories" id='categories'>Categories</Link>
                </button>

                <div className="dropdown-content">
                            
                            <Link to="/?cat=shoes">Shoes</Link>
                            <Link to="/?cat=gadgets">Gadgets</Link>
                            <Link to="/?cat=glasses">Glasses</Link>
                            <Link to="/?cat=watches">Watches</Link>
                            <Link to="/?cat=toys">Toys</Link>
                            <Link to="/?cat=electronics">Electronics</Link>
                            
                            
                        </div>
                        </div>
                <div className='menu'>
                
                <Link to="/AboutUs">About Us</Link>
                
                <Link to="/">Home</Link>
                </div>
            </div>
            
        
        </>
    );
}
export default Header;