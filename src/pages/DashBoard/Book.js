import React, { useEffect, useRef, useState } from 'react';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validate = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      service: Yup.string().required("Required"),
      payment: Yup.string().required("Required"),
      code: Yup.string().required("Required")
    })

const Book = () => {
      const [books , setBook] = useState([])
      const seletRef = useRef('')
      useEffect(()=>{
            fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setBook(data))
      },[books])
     

      const formik = useFormik({
            initialValues: {
              name: "",
              email: "",
              service: "",
              payment: "",
              code: "",

            },
            validationSchema: validate,
            onSubmit: async (values , setFieldValue) => {
              console.log(values );
            //   setSelectedService(values.service)
            
            //   filereader to use img url access 
            /*   const reader = new FileReader()
              reader.readAsDataURL(picture)
              reader.onload = () => {
                  // console.log(reader.result);
                  setImg(reader.result); 
              }
 */
             
             
             
                 

            },})



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
                  <div class="card mt-5  w-1/2 mx-auto border  shadow-xl">
                        <div class="card-body" >
                        <div className=''>
                              <FormikProvider value={formik}>
                              <Form autoComplete="off" onSubmit={handleSubmit}>
                              <div class="form-control w-full  ">
                                    <label class="label">
                                          <span class="label-text">Name</span>
                                    </label>
                                    <input id='name'
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
                                    {...formik.getFieldProps('email')}  
                                    type="email" 
                                    placeholder="Type here" 
                                    class="input input-bordered" />
                                  <label class="label">
              {formik.touched.email && formik.errors.email ? (
                <p className='text-red-500'>{formik.errors.email}</p>
              ) : null}

            </label>
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
                                                books.map(b => <option  key={b._id} >{b.service}</option> )
                                          }
                                          
                                   </select>
                                   <label class="label">
              {formik.touched.service && formik.errors.service ? (
                <p className='text-red-500'>{formik.errors.service}</p>
              ) : null}

            </label>
    
                              </div>

                              <p className='mt-3'>Pay With</p>
                              <div class="form-control w-full">
                                    <input 
                                    id='payment' 
                                    {...formik.getFieldProps('payment')} 
                                    type="text" 
                                    placeholder="Type here" 
                                    class="input input-bordered " />
                                  <label class="label">
              {formik.touched.payment && formik.errors.payment ? (
                <p className='text-red-500'>{formik.errors.payment}</p>
              ) : null}

            </label>
                              </div>
                              <div class="form-control w-full mt-4">

                                    <input 
                                    id='code' 
                                    {...formik.getFieldProps('code')} 
                                    type="text" 
                                    placeholder="Type here" 
                                    class="input input-bordered " />
                                    <label class="label">
              {formik.touched.code && formik.errors.code ? (
                <p className='text-red-500'>{formik.errors.code}</p>
              ) : null}

            </label>


                                     <div className='flex justify-between'>

                                          {/* {
                                                books.map(booking => booking.service == seletRef.current.value  <p className='my-3'>Your Service  charged will be $1000</p>: "")
                                          } */}
                                          <p>Your Service  charged will be 
                                                {books.map(booking => booking.service == seletRef.current.value && <span className='mx-2'>${booking.price}</span> )}
                                          </p>
                                         

                                    </div>
                              </div>
                              <div className=' text-center mt-4'>
                                    <input className='btn px-8' type="submit" value="Pay" />

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