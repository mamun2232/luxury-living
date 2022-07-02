import React from 'react';
import { useNavigate } from 'react-router-dom';
const BookingRow = ({book , index }) => {
      const {_id , service , name , price , paid } = book 
      const navigate = useNavigate()
      return (
            <tr>
              <th>{index + 1}</th>
              <td>{service}</td>
              <td>{price}</td>
              <td>
              {(price && !paid) && <button onClick={()=> navigate(`/dashboard/payment/${_id}`)} class="btn btn-sm bg-blue-800 text-white border-0">Pay</button>}
            {(price && paid) && <span className='block'>Paid</span>}
        {paid === 'Shipped' && <span>Order Shipped</span>}

              </td>
              <td>delete</td>
            </tr>
      );
};

export default BookingRow;