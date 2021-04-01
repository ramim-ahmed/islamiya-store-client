import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {

    const {id} = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [loggedInUser,] = useContext(userContext);
    const [successOrder, setSuccessOrder] = useState(false)
    
    useEffect( () => {
        fetch('https://pumpkin-tart-81106.herokuapp.com/checkout/'+ id)
        .then( res => res.json())
        .then( data => setSingleProduct(data))
       
    }, [id])
    const {name, price, weight} = singleProduct;


    const handlePlaceOrder = () => {

          const orderProduct = {
              product : name,
              price : price,
              quantity : 1,
              weight : weight
          }
        const userProductDetails = {...loggedInUser, ...orderProduct};

        fetch('https://pumpkin-tart-81106.herokuapp.com/order', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(userProductDetails)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            setSuccessOrder(true)
        })
    }


    return (
        <Row  className = 'mt-5'>
            <Col>
                <Card style = {{width : '100%'}}>
                    <Card.Title> <h4>Checkout</h4> </Card.Title>
                    <Card.Body>
                        <div className = 'title' >
                            <p><strong>Description</strong></p>
                            <p><strong>Quantity</strong></p>
                            <p><strong>Price</strong></p>
                        </div>
                        <hr/>
                        <div className="product-item title">
                          <p>{name} - {weight}</p>
                          <p>1</p>
                          <p>${price}</p>
                        </div>
                        <hr/>
                        <div className="total title">
                            <p><strong>Total</strong></p>
                            <p><strong>${price}</strong></p>
                        </div>
                        <div className="btn-container">
                            <Button  onClick = {handlePlaceOrder} className = 'checkout-btn' type = 'button' variant="primary" size="sm" >Order Placed</Button>
                        </div>
                        {
                            successOrder && <p style = {{color : 'green'}} > your order successfully placed ! </p>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CheckOut;