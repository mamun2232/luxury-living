import React from 'react';
import {toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
const UserRow = ({user , index}) => {
      const {_id, name , email , role} = user
      const AdminHendeler = () => {
            fetch(`http://localhost:5000/user/admin/${email}` , {
                  method: "PUT",
                  headers: {
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                  }})
                  .then(res => {
                        if (res.status === 403) {
                              toast.error("Make An Feild Admin")
                        }


                        return res.json()
                  }
                       
                  )
                  .then(data => {
                        if (data.modifiedCount > 0) {

                              toast("Make Admin Successfull!")

                        }
                  })
      }

      const userDeleteHundeler = (id) =>{
            fetch(`http://localhost:5000/user/${id}` , {
                  method: "DELETE",
            
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount){
                              toast("User Delete Successful")

                        }
                       
                  })

      }
      

      return (
            <tr>
              <th>{index + 1}</th>
              <td>{email}</td>
              <td>
                  {
                   role !== 'admin' ? <button onClick={AdminHendeler} className='my-btn'>Make Admin</button> :
                   <p>Allready Admin</p>
                  }
                 
              </td>
              <td><span onClick={()=>userDeleteHundeler(_id)} className='text-2xl text-red-500  cursor-pointer'>< RiDeleteBin6Line/></span></td>
            </tr>
      );
};

export default UserRow;