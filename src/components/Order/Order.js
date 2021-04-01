import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderItems from '../../OrderItems/OrderItems';

const Order = () => {

    const [loggedInUser, ] = useContext(userContext);
    const [userOrderList, setUserOrderList] = useState([])

    useEffect( () => {

        fetch('https://pumpkin-tart-81106.herokuapp.com/orders?email='+loggedInUser.email)
        .then( res => res.json())
        .then(data => {
            setUserOrderList(data)
        })

    }, [loggedInUser])

    return (
        <>
              
              {
                  userOrderList.map( item => <OrderItems key = {item._id} item = {item} />)
              }
        </>
    );
};

export default Order;