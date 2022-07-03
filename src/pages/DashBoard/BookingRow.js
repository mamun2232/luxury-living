import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
const BookingRow = ({book , index }) => {
      const {_id , service , name , price , paid } = book 
      const navigate = useNavigate()

      const deletHundeler = (id) => {
            
            console.log(id);
            fetch(`http://localhost:5000/order/${id}` , {
                  method: "DELETE",
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount){
                              toast('Product delete successFull')
                        }
                        console.log(data);})
            }

   
      return (
            <tr>
              <th>{index + 1}</th>
              <td>{service}</td>
              <td>{price}</td>
              <td>
              {(price && !paid) && <button onClick={()=> navigate(`/dashboard/payment/${_id}`)} class="btn btn-sm bg-blue-800 text-white border-0">Pay</button>}
            {(price && paid) && <span className='block'>{paid}</span>}
        

              </td>
              <td > <button disabled={paid} onClick={()=> deletHundeler(_id)} className={`${paid && ' text-slate-700'} text-2xl text-red-500 cursor-pointer`}>
                  <RiDeleteBin6Line/>
                  
                  </button></td>
            </tr>
      );
};

export default BookingRow;