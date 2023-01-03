import Header from "../Components/Header"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Profile.css'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddProduct=()=>{
    const [value, setValue] = useState('');
    return (
        <>
        <Header/>
        <h1 className="heading-add">Add Product</h1>
        <div className="addProduct">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          
          <Col xs={15}>
          <Form.Control type="email" placeholder="Enter Product Name" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          
          <Col xs={4}>
          <Form.Control  type="Enter Price" placeholder="price" />
          </Col>
        </Form.Group>
      </Row>
      <div className="description-container">
      <ReactQuill theme="snow" className="editor" placeholder="Enter Description" value={value} onChange={setValue} />
      </div>
      <Row className="mb-3">
       <input className="cat-choose" type="file" name="" id="" />

        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Choose Category">
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


      
    
      
      <Button  className='ap-btn' variant="primary mx-2" type="submit" >
        Add Product
      </Button>
    </Form>
    </div>
        </>
    )

}
export default AddProduct



