import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'
import Login from './Login';

import SocailLogin from './SocailLogin';
import { TiDeleteOutline } from 'react-icons/ti';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init'

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const validate = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().required('Required'),
  password: Yup.string().min(8).required('Required'),

})


const Registation = ({closeModal}) => {
  
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    creatUser,
    loading,
    creatError,
  ] = useCreateUserWithEmailAndPassword(auth);

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
     await createUserWithEmailAndPassword(values.email , values.password)
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
   
  if(creatUser){
    navigate('/')
    closeModal(false)

  }

  let errorMassage ;
  if(creatError){
    errorMassage = <p className='text-red-500'>{creatError?.message}</p>
  }


  return (
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
  );
};

export default Registation;