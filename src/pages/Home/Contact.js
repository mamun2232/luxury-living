import React from 'react';

const Contact = () => {
      return (
            <div className=''>
                  <div className='max-w-7xl m-auto px-2 mt-20 py-10'>
                        <div className=' text-center'>
                              <h3 className='text-2xl'>Contact</h3>
                              <p className='text-2xl font-bold'>Let us handle your
                                    project, professionally</p>
                        </div>

                        <div className=' grid lg:grid-cols-2 grid-cols-1'>
                        <div>
                              <img src="/Assest/Image/contact.jpg" alt="" />
                        </div>
                        <div className=' flex items-center justify-center'>
                              <form>
                                    <div class="card sm-96 lg:w-full  bg-blue-50 py-10  rounded-lg">
                                          <div class="card-body">

                                                <div className='flex gap-5 '>
                                                      <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
                                                      <input type="text" placeholder="Last Name" class="input input-bordered w-full max-w-xs" />
                                                </div>
                                                <div className='flex gap-5 mt-5'>
                                                      <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                                                      <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                                                </div>
                                                <div className='w-full mt-2'>
                                                      <textarea class="textarea input-bordered  w-full" placeholder="Enter Message Text"></textarea>
                                                </div>
                                          </div>
                                          <div className='text-center'>
                                                <input className='my-btn' type="submit" value="Send Message" />
                                          </div>
                                    </div>


                              </form>
                        </div>

                        </div>
                       

                        

                  </div>
            </div>

      );
};

export default Contact;