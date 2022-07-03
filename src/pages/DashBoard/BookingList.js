import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import BookingRow from "./BookingRow";


const BookingList = () => {
  const [Bookings, setBooking] = useState([])
  const [user] = useAuthState(auth)
 

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user?.email}`)
      .then(res => res.json())
      .then(data => setBooking(data))
  }, [user , Bookings])




  return (
    <div className=''>
      <p className='text-center text-xl my-2'>Your Booking List</p>

      <div class="overflow-x-auto px-4">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Oder No</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            {Bookings.map((book ,index) => <BookingRow
            book={book}
            key={book._id}
            index={index}
            
            >

            </BookingRow>)}
           
           
          
          </tbody>
        </table>
      </div>




    </div>
  );
};

export default BookingList;