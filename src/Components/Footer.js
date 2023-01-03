import './Footer.css'
function Footer(){
    return(
        <div>
            <div className='footer'>
                <div className='table-1'>
            <img  className='footer-logo'src='/D_Images/logo.jpg'></img>
                <table className='footer-table'>
                    <tbody>
                    <tr>
                        <th>Categories</th>
                        <th>Pages</th>
                        <th>About Us</th>
                        </tr>
                        <tr>
                        <td>
                            <ul>
                           <li>Gadgets</li>
                           <li>Glasses</li>
                           <li>watches</li>
                           <li>Shoes</li>
                           <li>Toys</li>
                           <li>Electronics</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                           <li>Home</li>
                           <li>Categories</li>
                           <li>Profile</li>
                           <li>About Us</li>
                            </ul>
                        </td>
                        <td>
                            We are NFT-Based Ecommerce store Providing the <br/>
                            Safe and Efficient Online Shopping using Blockchain Technology<br/>
                            <b>+923145754520</b><br/>
                            <b>Comsats Wah, Pakistan</b>
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                </div>
                <p className='copyright'>Copyright@Syed-Akash</p>
            </div>
        </div>
    )
}
export default Footer