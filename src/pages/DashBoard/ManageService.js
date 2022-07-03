import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ManageService = () => {
      const [service , setService] = useState([])
      useEffect(() => {
            fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setService(data))
       
      }, [service])

      const serviceDeleteHundeler = (id) => {
            fetch(`http://localhost:5000/service/${id}` , {
                  method: "DELETE",
            
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount){
                              toast("Service Delete Successful")

                        }
                       
                  })

      }
      
      return (
            <div className=''>
            <p className='text-center text-xl my-2'>All Service List</p>
      
            <div class="overflow-x-auto px-4">
              <table class="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Picture</th>
                    <th>Service name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                
                  {
                    service.map((ser , index) =>  
                    <tr key={ser._id}>
                   
                    <th>{index + 1}</th>
                    <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={ser.img} />
              </div>
            </div>
          </div>
        </td>
                    <td>{ser.service}</td>
                    <td>
                      {ser.price} BDT
                    </td>
                   <td>
                      <span onClick={()=> serviceDeleteHundeler(ser._id)} className='text-2xl text-red-500'><RiDeleteBin6Line /></span>
                    </td>
                  </tr>)
                  }
                
                </tbody>
              </table>
            </div>

            
  
          </div>
      );
};

export default ManageService;