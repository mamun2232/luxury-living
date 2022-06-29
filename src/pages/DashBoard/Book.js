import React from 'react';

const Book = () => {
      return (
            <div className='px-4'>
                  <p className='text-center text-xl mt-1'>Book Now</p>
                  <div class="card mt-5  w-1/2 mx-auto border  shadow-xl">
                        <div class="card-body" >
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
                                          <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered" />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Service</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>

                              <p className='mt-3'>Pay With</p>
                              <div class="form-control w-full">
                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}
                              </div>
                              <div class="form-control w-full mt-4">

                                    <input type="text" placeholder="Type here" class="input input-bordered " />
                                    {/* <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label> */}  <div className='flex justify-between'>
                                          <p className='my-3'>Your Service  charged will be $1000</p>

                                    </div>
                              </div>
                              <div className=' text-center'>
                                    <input className='btn px-8' type="submit" value="Pay" />

                              </div>

                        </form>
                  </div>
                        </div>
                  </div>

            </div>
      );
};

export default Book;