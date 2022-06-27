import React from 'react';

const SocailLogin = ({setLogin , login}) => {
      return (
            <div className='mt-2'>
                  <div class="flex flex-col w-full border-opacity-50">
                        {login ? 
                        <p className='text-center'>Are You new? <span onClick={()=> setLogin(false)} className='text-blue-400 cursor-pointer'>Please Register</span></p> 
                        :
                        <p className='text-center'>All ready Login? <span onClick={()=> setLogin(true)} className='text-blue-400 cursor-pointer'>Please Login</span></p> 
                  
                  }
                       
                        <div class="divider">OR</div>
                       <button className='btn btn-outline btn-secondary'>Google</button>
                  </div>
            </div>
      );
};

export default SocailLogin;