import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    const [manageProduct, setManageProduct] = useState(true);
    const [addProduct, setAddProduct]  = useState(false);
    const [photo, setPhoto] = useState('');
    const [manageProductList, setManageProductList] = useState([]);
    const [successAddProduct, setSuccessAddProduct] = useState(false)
    const [productValue, setProductValue] = useState({
        name : '',
        weight : '',
        price : ''
    })

    useEffect( () => {
        fetch('https://pumpkin-tart-81106.herokuapp.com/product')
        .then( res => res.json())
        .then(data => setManageProductList(data))
    }, [])
    
    const handleManageProduct = () => {
        setAddProduct(false)
        setManageProduct(true);
        
    }

    const handleAddProduct = () => {
         setManageProduct(false)
         setAddProduct(true);
        
    }
    
    const handleImage = (e) => {
     const imgData = new FormData();
     imgData.set('key', '86468308d03edb3ab26827479053b75a');
     imgData.append('image', e.target.files[0]);

     axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setPhoto(response.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const handlechange = (e) => {
      const product = {...productValue};
      product[e.target.name] = e.target.value;
      setProductValue(product)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const storeProduct = {...productValue, imageURL : photo};
        fetch('https://pumpkin-tart-81106.herokuapp.com/addProduct', {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json'},
            body : JSON.stringify(storeProduct)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            setSuccessAddProduct(true)
        })
    }
    return (
        <>
          <Row>
              <Col md = {3} >
                  <div className ="admin-left-side" id = 'admin-left-flex'>
                        <h3>Islamiya Store</h3>
                        <div className = 'mt-3'>
                            <Button onClick = {handleManageProduct} className = 'btn' variant="secondary" size="sm" type = 'button' > Manage Product </Button>
                        </div>
                        <div  className = 'mt-3'>
                            <Button onClick = {handleAddProduct} className = 'btn' variant="secondary" size="sm" type = 'button' > Add Product </Button>
                        </div>
                        <div  className = 'mt-3'>
                            <Button className = 'btn' variant="secondary" size="sm" type = 'button' > Edit Product </Button>
                        </div>
                  </div>
              </Col>
              {
                  manageProduct && <Col md = {9} className = 'mt-5' >

                      <Table striped bordered hover>
                      <thead>
                            <tr>
                            <th>Product Name</th>
                            <th>weight</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                            manageProductList.map(product => <ManageProduct product = {product}/> )
                            }
                        </tbody>
                      </Table>

                   
                  </Col>
              }
              {
                  addProduct && <Col md = {9} className = 'mt-5' >
                       <Card className = 'card'>
                           <Card.Title>Add Product</Card.Title>
                           <Card.Body>
                               <Form onSubmit = {handleSubmit} >
                                   <Form.Group>
                                       <Form.Label>Product Name</Form.Label>
                                       <Form.Control name = 'name' onChange = {handlechange} type = 'text' placeholder = 'Enter Name'/>
                                   </Form.Group>
                                   <Form.Group>
                                       <Form.Label>Weight</Form.Label>
                                       <Form.Control  name = 'weight' onChange = {handlechange}  type = 'text' placeholder = 'Enter Weight'/>
                                   </Form.Group>
                                   <Form.Group>
                                       <Form.Label>Price</Form.Label>
                                       <Form.Control  name = 'price' onChange = {handlechange}  type = 'text' placeholder = 'Enter Price'/>
                                   </Form.Group>
                                   <Form.Group>
                                       <Form.Label>Add Photo</Form.Label>
                                       <Form.Control name = 'photo' onChange = {handleImage}  type = 'file'/>
                                   </Form.Group>

                                   <Button variant="primary" size="sm" className = 'save-btn' type = 'submit' >save</Button>
                                   {
                                         successAddProduct && <p style = {{color : 'green'}} > Product Added Saved Successfully ! </p>
                                    }
                               </Form>
                           </Card.Body>
                       </Card>
                  </Col>
              }
          </Row>
        </>
    );
};

export default Admin;