import { useEffect, useState } from "react";

const BookingList = () => {
  const [Bookings , setBooking] = useState([])

  useEffect(()=>{
    fetch('booking.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
    
      
     
     
      return (
            <div className=''>
                  <p className=''>Your Booking List</p>

                  {/* <div>
                 {
                  services?.map(book =>  <div key={book.id} class="card w-96 bg-base-200 shadow-lg">
                  <div class="card-body">
                    <div className='flex justify-between'>
                    <div class="w-24 rounded-xl">
                    <img src={book.img} />
                  </div>
                
                  <button className='btn'>Done</button>
                    </div>
                    <div>
                        <h1 className='text-xl'>{book.service} </h1>
                        <p className='text-xl'>{book.dtls} </p>
                
                    </div>
                  </div>
                </div>)
                 }
                  </div> */}
                  
                 
            </div>
      );
};

export default BookingList;