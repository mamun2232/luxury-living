import React from 'react';

const SocailLogin = ({setLogin , login , signInWithGoogle}) => {
      return (
            <div className='mt-2'>
                  <div class="flex flex-col w-full border-opacity-50">
                       
                       
                        <div class="divider">OR</div>
                       <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-secondary'>Google</button>
                  </div>
            </div>
      );
};

export default SocailLogin;