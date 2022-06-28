import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'
import Login from './Login';

import SocailLogin from './SocailLogin';
import { TiDeleteOutline } from 'react-icons/ti';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";


const validate = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().required('Required'),
  password: Yup.string().min(8).required('Required'),

})


const Registation = () => {


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: ""


    },
    validationSchema: validate,
    onSubmit: async (values) => {
      console.log(values);
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

          </div>

        </Form>
      </FormikProvider>

    </div>
  );
};

export default Registation;