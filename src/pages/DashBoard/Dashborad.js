import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';
import { FaUserCog } from 'react-icons/fa';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { MdOutlineBorderColor } from 'react-icons/md';
const Dashborad = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmin(user)

      return (
            <div className='max-w-7xl m-auto px-2'>
                  <div class="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content rounded  py-5">
                              {/* <!-- Page content here --> */}
                              <h1 className='text-center text-2xl'>Welcome to Our DashBoard</h1>
                              <Outlet></Outlet>
                              

                        </div>
                        <div class="drawer-side bg">
                              <label for="my-drawer-2" class="drawer-overlay"></label>
                              <ul class="menu p-4 overflow-y-auto w-80 background text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                    <li><NavLink to='book'>
                                          <img width={24} height={24} src="/Assest/Icon/Group.png" alt="" />
                                          
                                          Book</NavLink></li>
                                    <li><NavLink to='bookingList'>
                                    <img width={24} height={24} src="/Assest/Icon/Group 1360.png" alt="" />
                                          
                                          BookList</NavLink></li>
                                    <li><NavLink to='review'>
                                    <img width={24} height={24} src="/Assest/Icon/Group 1368.png" alt="" />
                                          
                                          Review</NavLink></li>

                                    {
                                          admin && <>
                                                <li><NavLink to='user'>
                                                      <span className=''>< FaUserCog className='w-6' /></span>
                                                      All User</NavLink></li>
                                                <li><NavLink to='manageOrder'>
                                                      <span><TbShoppingCartPlus
                                                      className='w-6' /></span>
                                                      Manage Order</NavLink></li>
                                                <li><NavLink to='manageService'>
                                                      <span><MdOutlineBorderColor className='w-6' /></span>
                                                      Manage Service</NavLink></li>
                                          </>
                                    }


                              </ul>

                        </div>
                  </div>
            </div>
      );
};

export default Dashborad;