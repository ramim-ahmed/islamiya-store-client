import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ManageProduct = (props) => {
    const {name, weight, price, _id} = props.product;

    const handleDeleteProduct = (id) => {
        fetch(`https://pumpkin-tart-81106.herokuapp.com/delete/${id}`)
        .then( res => res.json())
        .then( data => {
            if(data){
               const container =  document.getElementById('container');
               container.style.display = 'none'
            }
        })
    }
    
    return (
        <>
                            <tr id='container' className = 'product-row' >
                                <td> {name} </td>
                                <td> {weight} </td>
                                <td> ${price} </td>
                                <td> 
                                    <ButtonGroup>
                                    <Button className='action-btn ' size = 'sm' type = 'button' onClick = { () => handleDeleteProduct(_id)} > 
                                        Delete
                                     </Button>
                                     <Button  className='action-btn' type = 'button' size = 'sm'>
                                        Edit
                                    </Button> 
                                    </ButtonGroup>
                                </td>
                            </tr> 
        </>
    );
};

export default ManageProduct;