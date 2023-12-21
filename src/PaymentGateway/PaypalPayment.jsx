import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useDispatch } from 'react-redux';
import { resetCart } from '../Cart/Redux/CartSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import React, { useEffect, useState } from 'react'

function PaypalPayment({ cartData, totalAmount }) {
    const navigate = useNavigate();

    const initialOptions = {
        "client-id": "AfhUckdRdJ3UaTY8RUIbJ0nlkmpVCz-wrvCyS3fh0xzCQChJMUDGhFjVn_5apILu2-P3aLc89_haqJeC",
    };
    const [orderID, setOrderID] = useState('');
    console.log(orderID)
    const dispatch = useDispatch();

    const storeCourseData = (cartData) => {
        const userData = localStorage.getItem("userID");
        axios.post("https://udemyclone-backend.onrender.com/api/coursesbought",
        { cartData, userData })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    const createOrder = (data, actions) => {
        try {
            console.log(data)
            return actions.order
                .create({
                    purchase_units: [
                        {
                            description: "Sunflower",
                            amount: {
                                currency_code: "USD",
                                value: totalAmount,
                            },
                        },
                    ],
                }).then((orderID) => {
                    setOrderID(orderID);
                    return orderID;
                });
        } catch (error) {
            console.error(error);
        }
    };

    const onApprove = async (data, actions) => {
        try {
            return actions.order.capture().then(function (details) {
                console.log(details)
                storeCourseData(cartData);
                alert("Order Placed Successfully!\nAmount paid completed!")
                dispatch(resetCart());
                navigate("/mylearn");
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                    layout: "vertical",
                    color: 'silver',
                    shape: 'pill',
                }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>


    )
}

export default PaypalPayment