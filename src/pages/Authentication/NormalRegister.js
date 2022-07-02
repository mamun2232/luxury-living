import React from 'react';

import SocailLogin from './SocailLogin';
import { TiDeleteOutline } from 'react-icons/ti';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Hook/UseToken';


const validate = Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      password: Yup.string().min(8).required('Required'),

})

const NormalRegister = () => {


      const navigate = useNavigate()
      const [
            createUserWithEmailAndPassword,
            creatUser,
            loading,
            creatError,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gooleuser, Googleloading, googleerror] = useSignInWithGoogle(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile();
      const formik = useFormik({
            initialValues: {
                  email: "",
                  password: "",
                  name: ""


            },
            validationSchema: validate,
            onSubmit: async (values) => {
                  console.log(values);
                  await createUserWithEmailAndPassword(values.email, values.password)
                  await updateProfile({ displayName: values.name });
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


      const [token] = UseToken(creatUser || gooleuser)

      if (token) {
            navigate('/')

      }


      let errorMassage;
      if (creatError || googleerror) {
            errorMassage = <p className='text-red-500'>{creatError?.message || googleerror?.message}</p>
      }

      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                              <h2 class="text-center text-xl">Register</h2>
                              <div>
                                    <FormikProvider value={formik}>
                                          <Form autoComplete="off" onSubmit={handleSubmit}>
                                                <div class="form-control w-full max-w-xs">
                                                      <label class="label">
                                                            <span class="label-text">Name</span>

                                                      </label>
                                                      <input {...formik.getFieldProps('name')} id='name' type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {formik.touched.name && formik.errors.name ? (
                                                                  <p className='text-red-500'>{formik.errors.name}</p>
                                                            ) : null}

                                                      </label>
                                                </div>
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
                                                      <input type="password" {...formik.getFieldProps('password')} id='password' placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {formik.touched.password && formik.errors.password ? (
                                                                  <p className='text-red-500'>{formik.errors.password}</p>
                                                            ) : null}
                                                      </label>


                                                      <input className='btn' type="submit" value="Register" />
                                                      {errorMassage}

                                                </div>

                                          </Form>
                                    </FormikProvider>

                              </div>
                              <p className='text-center mt-2'>Are You new? <span onClick={() => navigate('/login')} className='text-blue-400 cursor-pointer'>Please Register</span></p>
                              <SocailLogin
                                    signInWithGoogle={signInWithGoogle}
                              >

                              </SocailLogin>

                        </div>


                  </div>

            </div>
      );
};

export default NormalRegister;