import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import LoginModal from '../Authentication/LoginModal';
import RequreAuth from '../Authentication/RequreAuth';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
   
  }

  function openModal() {
    setIsOpen(true)
  }
  const [user ] = useAuthState(auth)
  console.log(user);
      const menu = <>
     
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/service'>Service</NavLink></li>
      {
        user &&  <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      }
      
      <li><NavLink to="/project">Project</NavLink></li>
      </>
      return (
           <div className='nav-background'>
             <div class="navbar max-w-7xl m-auto px-2">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <Link to='/'></Link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
       {menu}
      
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
      <Link to='/'>
      <img  className='h-12 w-28' src='/Assest/Group 33069.png' alt="" />
      </Link>
      
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
          {
            user ? <img src={user?.photoURL} alt="" /> : <img src="/Assest/Image/profilePic.png" alt="" />
          }
          
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          {
            !user ?  <p onClick={()=>openModal()}> Profile</p>  : <Link to='/myProfile' class="justify-between">
            Profile
            <span class="badge">New</span>
          </Link>
          }
          
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={ () => signOut(auth)}>Logout</button></li>
      </ul>
    </div>
    <button
          type="button"
          onClick={openModal}
          disabled={user}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-pointer"
        >
          {
            user ? <span>Hello, {user?.displayName || "User"}</span> : <span> Get Start</span>
          }
         
        </button>
        {/* <Link to='/login' className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>Login</Link> */}
       
        <label for="my-drawer-2" class=" px-2 drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
      
      </svg></label>
        
        
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