import React from 'react';

const Login = () => {
      return (
            <div>
                  <div class="form-control w-full max-w-xs">
                              <label class="label">
                                <span class="label-text">Email</span>

                              </label>
                              <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
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

                              <input className='btn' type="submit" value="Login" />
                                 <p className='text-right text-blue-500 mt-1'>Forgate Password</p>

                            </div>
            </div>
      );
};

export default Login;