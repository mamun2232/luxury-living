import React, { useState } from 'react';
import LoginModal from '../Authentication/LoginModal';

const Navber = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
      const menu = <>
      <li><a>About Us </a></li>
      <li><a>Project</a></li>
      <li><a>Contact</a></li>
      <li><a>Blog</a></li>
      </>
      return (
           <div className=''>
             <div class="navbar max-w-7xl m-auto px-2">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
       {menu}
      
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
      <img  className='h-12 w-28' src='/Assest/Group 33069.png' alt="" />
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
  
  <div class="navbar-end">
  <div class="dropdown dropdown-end mr-4">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Get Start
        </button>
  </div>
</div>


          {/* login modal  */}
          {isOpen && <LoginModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          >
            </LoginModal>}
           </div>
      );
};

export default Navber;