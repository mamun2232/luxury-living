import React, { useEffect, useState } from 'react';
import {toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
const ManageOrder = () => {
      const [order, setOrder] = useState([])

      const orderShiftHundeler = (id) => {
        fetch(`https://vast-beyond-68425.herokuapp.com/shipped/${id}`,{
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          }

        })
        .then(res => res.json())
        .then(data => {
          toast('Thanks You , Product Delevery Shepped!')
        })

      }

      const orderDeleteHundeler = (id) => {
        fetch(`https://vast-beyond-68425.herokuapp.com/order/${id}`,{
          method: "DELETE",

        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount){
            toast('Thanks You , Order Deleted')

           }
        
        })

      }
     
     
    
      useEffect(() => {
        fetch(`https://vast-beyond-68425.herokuapp.com/order`)
          .then(res => res.json())
          .then(data => setOrder(data))
      },[order])
      return (
            <div className=''>
          <p className='text-center text-xl my-2'>All User List</p>
    
          <div class="overflow-x-auto px-4">
            <table class="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Service Name</th>
                  <th>Email</th>
                  <th>price</th>
                  <th>Payment Info</th>
                  <th>Delivery Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              
                {
                  order.map((order , index) =>  <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.service}</td>
                  <td>
                    {order.email}
                  </td>
                  <td>{order.price}</td>
                  <td>{order.paid ? <p className=''>{order.paid}</p> : <p className='text-red-500'>Unpaid</p>}</td>
                  <td>
                    <button disabled={!order.paid || order.paid == "Shipped" } onClick={()=>orderShiftHundeler(order._id)} className='btn btn-sm'>Shipped Now</button>
                    </td>
                  <td >
                    <span onClick={()=> orderDeleteHundeler(order._id)} className='text-2xl text-red-500'><RiDeleteBin6Line /></span>
                  </td>
                </tr>)
                }
              
              </tbody>
            </table>
          </div>

        </div>
      );
};

export default ManageOrder;