import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { Fragment, useState } from 'react'
import Login from './Login';
import Registation from './Registation';
import SocailLogin from './SocailLogin';
import { TiDeleteOutline } from 'react-icons/ti';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const validate = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8).required('Required'),

})

const LoginModal = ({ closeModal, openModal, isOpen }) => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",


    },
    validationSchema: validate,
    onSubmit: async (values) => {
      console.log(values);
      signInWithEmailAndPassword(values.email , values.password)
    },
  })
  const {
    errors,
    setFieldValue,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;
  
  if(user){
    navigate('/')
    closeModal(false)
  }
  let errorMassage ;
  if(error){
    errorMassage = <p className='text-red-500'>{error?.message}</p>
  }


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
                  > <span onClick={() => closeModal()} className=' absolute right-0 top-0 cursor-pointer'><TiDeleteOutline /></span>



                  </Dialog.Title>
                  <div className="mt-2">
                    <p className='text-xl text-center mt-5'>{login ? "Login" : "Registation"}</p>

                    {
                      login ? <div>
                        <div className=' lg:px-14 px-5'>

                          <FormikProvider value={formik}>
                            <Form autoComplete="off" onSubmit={handleSubmit}>
                              <div className=''>
                                <div>
                                  <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                      <span class="label-text">Email</span>

                                    </label>
                                    <input type="email" id='email' {...formik.getFieldProps('email')} placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                      {formik.touched.email && formik.errors.email ? (
                                        <p className='text-red-500'>{formik.errors.email}</p>
                                      ) : null}

                                    </label>
                                  </div>
                                  <div class="form-control w-full max-w-xs ">
                                    <label class="label">
                                      <span class="label-text">Password</span>

                                    </label>
                                    <input type="password" id='password' {...formik.getFieldProps('password')} placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                      {formik.touched.password && formik.errors.password ? (
                                        <p className='text-red-500'>{formik.errors.password}</p>
                                      ) : null}
                                    </label>

                                    <input className='btn' type="submit" value="Login" />
                                    { errorMassage}
                                    <p className='text-right text-blue-500 mt-1'>Forgate Password</p>

                                  </div>
                                </div>
                              </div>

                            </Form>
                          </FormikProvider>


                          <SocailLogin
                            login={login}
                            setLogin={setLogin}
                          ></SocailLogin>
                        </div>
                      </div>


                        : <div>
                          <div className="lg:mx-14 px-5">

                            <div>
                              <Registation
                                closeModal={closeModal}
                              ></Registation>
                            </div>
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