import React, { useEffect, useState } from 'react';

const Review = () => {
      const [Bookings, setBooking] = useState([])

      useEffect(() => {
            fetch('booking.json')
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, [])

      return (
            <div>
                  <p className='text-xl mt-1 text-center'>Please Review</p>
                  
                 <div className=' mt-5'>
                 <div class="card w-1/2 mx-auto border  bg-base-100 shadow-xl">
                        <div class="card-body">
                        <div className=''>
                        <form action="">
                              <div class="form-control w-full  ">
                                    <label class="label">
                                          <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">From</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                             
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Retings</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Picture</span>
                                    </label>
                                    <input type="file" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Comment</span>
                                    </label>
                                    <textarea  type="text" placeholder="Type here" class="input input-bordered h-28 " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                             
                            
                             
                              <div className='w-full  text-center mt-2'>
                                    <input className='btn px-8' type="submit" value="Review" />

                              </div>

                        </form>
                  </div>
                        </div>
                  </div>
                 </div>
            </div>
      );
};

export default Review;