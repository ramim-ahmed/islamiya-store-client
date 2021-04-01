import React from 'react';
import { Table } from 'react-bootstrap';

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
                     <Table id = 'container' striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Product Name</th>
                            <th>weight</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className = 'product-row' >
                                <td> {name} </td>
                                <td> {weight} </td>
                                <td> ${price} </td>
                                <td> <button> edit</button> </td>
                                <td> <button type = 'button' onClick = { () => handleDeleteProduct(_id)} > X </button> </td>
                            </tr> 
                        </tbody>
                    </Table>
        </>
    );
};

export default ManageProduct;