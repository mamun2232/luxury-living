import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { Fragment, useState } from 'react'
import Login from './Login';
import Registation from './Registation';
import SocailLogin from './SocailLogin';
import { TiDeleteOutline } from 'react-icons/ti';

const LoginModal = ({ closeModal, openModal, isOpen }) => {
  const [login, setLogin] = useState(true)

  return (

    <div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-800"
            enterTo="opacity-100"
            leave="ease-in duration-600"
            leaveFrom="opacity-200"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  lg:w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-center text-gray-900 relative"
                  > <span onClick={()=> closeModal()} className=' absolute right-0 top-0 cursor-pointer'><TiDeleteOutline/></span>
                    
                    
                    
                  </Dialog.Title>
                  <div className="mt-2">
                  <p  className='text-xl text-center mt-5'>{login ? "Login" : "Registation"}</p>
                    
                    {
                      login ? <div>
                        {/* Login
                              <p>Are Youw new?</p> <button onClick={()=> setLogin(false)}>Plese Singin</button> */}
                        <div className=' lg:px-14 px-5'>
                          
                          <form >
                          <div className=''>
                            <Login></Login>
                            </div>
                            
                          </form>
                          <SocailLogin
                              login={login}
                              setLogin={setLogin}
                          ></SocailLogin>
                        </div>
                      </div>






                        : <div>
                          <div className="lg:mx-14 px-5">
                          <form >
                            <div>
                            <Registation></Registation>
                            </div>
                            
                          </form>
                          <SocailLogin
                              setLogin={setLogin}
                          ></SocailLogin>
                          </div>
                         


                        </div>
                    }
                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default LoginModal;