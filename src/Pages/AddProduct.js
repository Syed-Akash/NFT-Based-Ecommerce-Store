import Header from "../Components/Header"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddProduct.css'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";


const AddProduct=()=>{
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    
    const [cat, setCat] = useState("");
    const [file, setFile] = useState(null);

    const upload = async ()=>{
      try{
        const formData = new FormData();
        formData.append("file",file)
        const res = await axios.post("/upload",formData)
        return res.data

      }catch(err){
        console.log(err)
      }
    }
    const handleClick = async e=>{
      e.preventDefault()
      const imgUrl = await upload()

      try{
          await axios.post("/products/",{
            name,
            description:value,
            cat,
            img: file ? imgUrl : "",
            price,

          });
      }catch(err){
        console.log(err)
      }
    }
    return (
        <>
        <Header/>
        <h1 className="heading-add">Add Product</h1>
        <div className="addProduct">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          
          <Col xs={15}>
          <Form.Control type="text" placeholder="Enter Product Name" name="name" onChange={e=>setName(e.target.value)} />
          </Col>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          
          <Col xs={4}>
          <Form.Control  type="price" placeholder="price" name="price" onChange={e=>setPrice(e.target.value)}/>
          </Col>
        </Form.Group>
      </Row>
      <div className="description-container">
      <ReactQuill theme="snow" className="editor" placeholder="Enter Description" value={value} onChange={setValue} />
      </div>
      <Row className="mb-3">
       <input className="cat-choose" type="file" name="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>

        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Choose Category" name="cat" onChange={(e)=>setCat(e.target.value)}>
            <option>Choose Category</option>
            <option>Shoes</option>
            <option>Watches</option>
            <option>Gadgets</option>
            <option>Toys</option>
            <option>Glasses</option>
            <option>Electronics</option>
          </Form.Select>
        </Form.Group>

       
      </Row>


      
    
      
      <Button  className='ap-btn' variant="primary mx-2" type="submit" onClick={handleClick}>
        Add Product
      </Button>
    </Form>
    </div>
        </>
    )

}
export default AddProduct



