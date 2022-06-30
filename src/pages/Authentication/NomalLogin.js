import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import SocailLogin from './SocailLogin';


const validate = Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8).required('Required'),

})

const NomalLogin = () => {
      const navigate = useNavigate()
      const [signInWithGoogle, gooleuser, Googleloading, googleerror] = useSignInWithGoogle(auth);
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
                  signInWithEmailAndPassword(values.email, values.password)
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

      let errorMassage;
      if (error || googleerror) {
            errorMassage = <p className='text-red-500'>{error?.message || googleerror.message}</p>
      }

      if (user || gooleuser) {
            navigate('/')

      }

      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                              <h2 class=" text-center">Card title!</h2>

                              <div>
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
                                                                  {errorMassage}
                                                                  <p className='text-right text-blue-500 mt-1'>Forgate Password</p>

                                                            </div>
                                                      </div>
                                                </div>

                                          </Form>
                                    </FormikProvider>
                              </div>
                              <p className='text-center mt-2'>Are You new? <span onClick={() => navigate('/register')} className='text-blue-400 cursor-pointer'>Please Register</span></p>

                              <SocailLogin
                                    signInWithGoogle={signInWithGoogle}
                              ></SocailLogin>

                        </div>
                  </div>

            </div>
      );
};

export default NomalLogin;