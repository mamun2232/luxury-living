import React, { useEffect, useRef, useState } from 'react';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

import ChackoutFrom from './ChackoutFrom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const validate = Yup.object({
      name: Yup.string().required('Required'),

      service: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      address: Yup.string().required("Required")
})

const Book = () => {
      const [books, setBook] = useState([])
      const seletRef = useRef('')
      const [user] = useAuthState(auth)
      // const [price , setPrice] = useState(0)
      const priceRef = useRef(0)
      const navigate = useNavigate()


      useEffect(() => {

            fetch('https://vast-beyond-68425.herokuapp.com/service' , {
                  method: "GET",
                  headers: {
                        'Content-type': 'application/json',
                                    'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                      }

            })
                  .then(res => {
                        if(res.status == 401 || res.status === 403){
                              signOut(auth)
                              localStorage.removeItem('AccessToken')
                              navigate('/login')
                  
                        }
                  
                  
                            return res.json()
                  })
                  .then(data => setBook(data))
                
      }, [books])
    
    


      const formik = useFormik({
            initialValues: {
                  name: user?.displayName,
                  email: user?.email,
                  service: "",
                  number: "",
                  address: "",

            },
            validationSchema: validate,
            onSubmit: async (values, setFieldValue) => {
                  console.log(values);
                  const price = priceRef.current.value
                  console.log(price);
                  
                  //   setSelectedService(values.service)

                  //   filereader to use img url access 
                  /*   const reader = new FileReader()
                    reader.readAsDataURL(picture)
                    reader.onload = () => {
                        // console.log(reader.result);
                        setImg(reader.result); 
                    }*/

                  const order = {
                        coustomerName: values.name,
                        email: values.email,
                        service: values.service,
                        phone: values.number,
                        address: values.address,
                        price: price

                  }
                  console.log(order);

                  fetch('https://vast-beyond-68425.herokuapp.com/order', {
                        method: 'POST',
                        body: JSON.stringify(order),
                        headers: {
                              'Content-type': 'application/json; charset=UTF-8',
                              'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                        },
                  })
                        .then((res) => {
                              if(res.status === 401 || res.status === 403){
                                    signOut(auth)
                                    localStorage.removeItem('AccessToken')
                                    navigate('/login')
                        
                              }
                        }
                        )
                        .then((data) => {
                              console.log(data);
                              toast(data?.message)
                              
                        });





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
            formProps
      } = formik;

      return (
            <div className='px-4'>
                  <p className='text-center text-xl mt-1'>Book Now</p>
                  <div class="card mt-5 bg-white w-full lg:w-1/2 mx-auto border  shadow-xl">
                        <div class="card-body" >
                              <div className=''>
                                    <FormikProvider value={formik}>
                                          <Form autoComplete="off" onSubmit={handleSubmit}>
                                                <div class="form-control w-full  ">
                                                      <label class="label">
                                                            <span class="label-text">Name</span>
                                                      </label>
                                                      <input id='name'
                                                      value={user?.displayName}
                                                            {...formik.getFieldProps('name')}
                                                            type="text"
                                                            placeholder="Type here"
                                                            class="input input-bordered " />
                                                      <label class="label">
                                                            {formik.touched.name && formik.errors.name ? (
                                                                  <p className='text-red-500'>{formik.errors.name}</p>
                                                            ) : null}

                                                      </label>
                                                </div>
                                                <div class="form-control w-full ">
                                                      <label class="label">
                                                            <span class="label-text">Email</span>
                                                      </label>
                                                      <input
                                                            id='email'
                                                            value={user?.email}
                                                            {...formik.getFieldProps('email')}

                                                            type="email"
                                                            placeholder="Type here"
                                                            class="input input-bordered" />
                                                      {/* <label class="label">
                                                            {formik.touched.email && formik.errors.email ? (
                                                                  <p className='text-red-500'>{formik.errors.email}</p>
                                                            ) : null}

                                                      </label> */}
                                                </div>
                                                <div class="form-control w-full ">
                                                      <label class="label">
                                                            <span class="label-text">Service</span>
                                                      </label>
                                                      <select
                                                            id='service'

                                                            {...formik.getFieldProps('service')}
                                                            type="text"
                                                            ref={seletRef}
                                                            placeholder="Type here"
                                                            class="input input-bordered " >

                                                            {
                                                                  books.map(b => <option key={b._id} >{b.service}</option>)
                                                            }

                                                      </select>
                                                      <label class="label">
                                                            {formik.touched.service && formik.errors.service ? (
                                                                  <p className='text-red-500'>{formik.errors.service}</p>
                                                            ) : null}

                                                      </label>

                                                </div>


                                                <div class="form-control w-full">
                                                      <label class="label">
                                                            <span class="label-text">Number</span>
                                                      </label>
                                                      <input
                                                            id='number'
                                                            {...formik.getFieldProps('number')}
                                                            type="text"
                                                            placeholder="Type here"
                                                            class="input input-bordered " />
                                                      <label class="label">


                                                            {formik.touched.number && formik.errors.number ? (
                                                                  <p className='text-red-500'>{formik.errors.number}</p>
                                                            ) : null}

                                                      </label>

                                                </div>
                                                <div class="form-control w-full mt-4">
                                                      <label class="label">
                                                            <span class="label-text">Address</span>
                                                      </label>

                                                      <input
                                                            id='address'
                                                            {...formik.getFieldProps('address')}
                                                            type="text"
                                                            placeholder="Type here"
                                                            class="input input-bordered " />


                                                      <label class="label">
                                                            {formik.touched.address && formik.errors.address ? (
                                                                  <p className='text-red-500'>{formik.errors.address}</p>
                                                            ) : null}
                                                      </label>


                                                      <div className='flex justify-between'>


                                                            <p className=''>Your Service  charged will be
                                                            </p>
                                                                  {books.map(booking => booking.service == seletRef.current.value && <input
                                                                  type='text'
                                                                  
                                                                  ref={priceRef}
                                                                  value={booking?.price}
                                                                   className=' outline-none' />)}
                                                                   
                                                            


                                                      </div>
                                                </div>
                                                <div className=' text-center mt-4'>
                                                      <input className='my-btn px-8' type="submit" value="Order" />

                                                </div>

                                          </Form>

                                    </FormikProvider>

                                    

                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Book;