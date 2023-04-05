import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser}  from '@fortawesome/free-brands-svg-icons'
import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import { AuthContext} from '../Context/authContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

function Header(){
    const{ currentUser, logout}= useContext(AuthContext);
    const [account, setAccount] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isAuthorizing, setIsAuthorizing] = useState(false);
    
    useEffect(() => {
      async function connect() {
        const provider = await detectEthereumProvider();
        if (provider) {
          setIsAuthorizing(true);
          const accounts = await provider.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          } else {
            try {
              await provider.request({ method: 'eth_requestAccounts' });
              setIsConnected(true);
            } catch (error) {
              console.error(error);
            }
          }
          setIsAuthorizing(false);
        }
      }
      connect();
    }, []);
    const handleDisconnect = async () => {
      try {
        await window.ethereum.send({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        }, (error, response) => {
          if (error) {
            console.error(error);
          } else {
            setIsConnected(false);
            setAccount('');
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    

    return(
        <>
        <img id='logo' src="/D_Images/logo.jpg" alt="Logo"></img>
        <div id='header_div'>
        {isConnected ? (
        <div>
          <button className='disconnectWallet' onClick={handleDisconnect}>Disconnect Wallet</button>
          <span className='walletConnected'>{`${account.slice(0, 1)}...${account.slice(-2)}`}<img src="/D_Images/logo.jpg"  alt="Logo" className='walletConnectedImg'></img></span>
        </div>
      ) : isAuthorizing ? (
        <span className='walletConnected'>Authorizing...</span>
      ) : (
            <FontAwesomeIcon onClick={async () => {
            try {
              await window.ethereum.request({ method: 'eth_requestAccounts' });
              const accounts = await window.ethereum.request({ method: 'eth_accounts' });
              setAccount(accounts[0]);
              setIsConnected(true);
            } catch (error) {
              console.error(error);
            }
          }} id='wallet' icon={faWallet}/>)}

                 
               
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