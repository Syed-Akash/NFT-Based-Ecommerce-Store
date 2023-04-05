import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css'
import { Link } from 'react-router-dom';
import  {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/authContext';
const SignIn=() =>{
  const[inputs, setInputs] = useState({
    email:"",
    password:"",
  })
  const[err,setError]=useState(null)
  const navigate = useNavigate()

  const {login}=useContext(AuthContext);
  

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }
  const handleSubmit= async e=>{
    e.preventDefault();
    try{
    await login(inputs)
    navigate("/Profile")
    }catch(err){
      setError(err.response.data)
      
        
    }
}
    return(
        <>
        <h1 className='heading-signin'>Sign In</h1>
         <Form className='signin'>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required onChange={handleChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChange}/>
      </Form.Group>
      
      <Button onClick={handleSubmit} className='login-btn' variant="primary mx-2" type="submit">
        Login
      </Button>
      {err && <p>{err}</p>}
      <span> If Not Registered <Link to='/Register'>Register Here</Link></span>
      
    </Form>
        </>
    )
}
export default SignIn


