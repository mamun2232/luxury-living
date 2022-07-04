import React from 'react';

const SocailLogin = ({setLogin , login , signInWithGoogle}) => {
      return (
            <div className=''>
                  <div class="flex flex-col w-full border-opacity-50">
                       
                       
                        <div class="divider">OR</div>
                       <div onClick={() => signInWithGoogle()} className='border rounded-xl py-3 flex gap-5 justify-center cursor-pointer'>
                        <span className='inline'>  <img className='w-6' src="/Assest/Icon/Group 573.png" alt="" /></span>
                        <span className='text-xl'>Google</span>
                       
                        </div>
                  </div>
            </div>
      );
};

export default SocailLogin;