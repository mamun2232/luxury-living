import React from 'react';

const Registation = () => {
      return (
            <div>
                  <div class="form-control w-full max-w-xs">
                              <label class="label">
                                <span class="label-text">Name</span>

                              </label>
                              <input type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                              <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}

                              </label>
                            </div>
                  <div class="form-control w-full max-w-xs">
                              <label class="label">
                                <span class="label-text">Email</span>

                              </label>
                              <input type="Email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                              <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}

                              </label>
                            </div>
                            <div class="form-control w-full max-w-xs ">
                              <label class="label">
                                <span class="label-text">Password</span>

                              </label>
                              <input type="password" placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                              <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}
                              </label>

                              <input className='btn' type="submit" value="Register" />
                               
                            </div>
            </div>
      );
};

export default Registation;