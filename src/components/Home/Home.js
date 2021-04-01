import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {

    const [product, setProduct] = useState([]);
    const [spinner, setSpinner] = useState(true)

    useEffect( () => {
        fetch('https://pumpkin-tart-81106.herokuapp.com/product')
        .then( res => res.json())
        .then(data => {
            setProduct(data);
            setSpinner(false)
        })
    }, [])
    return (
        <>
           {
               spinner ? <div className="spinner"><Spinner animation="border" variant="primary" /></div> : <Row className = 'mt-5' >
               {
                    product.map(pd => <Product key = {pd._id} pd = {pd}/>)
               }
               </Row>
           }
        </>
    );
};

export default Home;