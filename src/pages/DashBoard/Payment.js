import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChackoutFrom from './ChackoutFrom';

const stripePromise = loadStripe('pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy');

const Payment = () => {
      const { id } = useParams()
      const [myOrder , setMyorder] = useState([])
        useEffect(()=> {
            fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setMyorder(data))

        },[id])
        console.log(myOrder);
      return (
            <div className='mt-5'>
                  <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='w-96'>
                              <img src="/Assest/Image/payment.jpg" alt="" />
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl border-xl">
                              <div class="card-body">
                                    <h2 class="card-title">Order Infromation</h2>

                                    <h1>Service Name:{myOrder.service}</h1>
                                    <h1>Price: {myOrder.price} BDT</h1>
                                    <h1>Email: {myOrder.email}</h1>
                                    <h1>Phone: {myOrder.phone}</h1>
                                    <h1>Address: {myOrder.phone}</h1>

                                    <h2 className='card-title mt-5'>Please Pay</h2>
                                    <Elements stripe={stripePromise}>
                                                                  <ChackoutFrom
                                                                  myOrder={myOrder}
                                                                  
                                                                  />
                                                            </Elements>
                                    
                              </div>
                            
                        </div>
                  </div>
            </div>
      );
};

export default Payment;