import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashborad = () => {
       
      return (
            <div className='max-w-7xl m-auto px-2 mt-5'>
                  <div class="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content rounded">
                              {/* <!-- Page content here --> */}
                              <h1 className='text-center text-2xl'>Welcome to Our DashBoard</h1>
                              <Outlet></Outlet>
                              <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open d</label>

                        </div>
                        <div class="drawer-side">
                              <label for="my-drawer-2" class="drawer-overlay"></label>
                              <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                    <li><NavLink to='book'>Book</NavLink></li>
                                    <li><NavLink to='bookingList'>BookList</NavLink></li>
                                    <li><NavLink to='review'>Review</NavLink></li>
                                    
                              </ul>

                        </div>
                  </div>
            </div>
      );
};

export default Dashborad;