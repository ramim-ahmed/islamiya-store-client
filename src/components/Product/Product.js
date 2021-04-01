import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = (props) => {
    const { name, weight, price, imageURL, _id} = props.pd
    const history = useHistory()
    const handleBuyNow = (id) => {
        history.push(`/checkout/${id}`)
    }
    return (
        <>
           <Col >
                <Card  className = 'product-card mt-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {imageURL} />
                    <Card.Body>
                        <Card.Title><h5> {name} - {weight}</h5></Card.Title>
                       <div className = 'card-field' >
                            <h4> ${price} </h4>
                            <Button onClick = { () => handleBuyNow(_id)} className = 'buy-btn' variant="primary" size="md">Buy Now</Button>
                       </div>
                    </Card.Body>
                    </Card>
           </Col>
        </>
    );
};

export default Product;