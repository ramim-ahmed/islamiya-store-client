import React from 'react';
import { Card } from 'react-bootstrap';

const OrderItems = (props) => {
    const {user, product, price, quantity, weight, email} = props.item
    return (
        <>
                 <Card className = 'order-card' style = {{width : '100%'}} >
                     <Card.Body>
                         <div className="order-info-details">
                             <div className="user-details">
                                <p>Name : {user}</p>
                                <p>Email : {email} </p>
                             </div>
                                 <h6>Product</h6>
                             <div className="product-details">
                                <p>{product} - {weight}</p>
                                <p>${price}</p>
                                <p>{quantity}</p>
                             </div>
                         </div>
                     </Card.Body>
                 </Card>
        </>
    );
};

export default OrderItems;