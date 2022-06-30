import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const validate = Yup.object({
      name: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      retings: Yup.string().min(5).required("Required"),
      img: Yup.string().required("Required"),
      comment: Yup.string().min(100).required("Required")
    
    })
    

const Review = () => {
      const [user] = useAuthState(auth)
      const [Bookings, setBooking] = useState([])
      const formik = useFormik({
            initialValues: {
              name: "",
              country: "",
              retings: "",
              img: "",
              comment: "",

        
        
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
           

     

      useEffect(() => {
            fetch('booking.json')
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, [])

      return (
            <div>
                  <p className='text-xl mt-1 text-center'>Please Review</p>
                  
                 <div className=' mt-5'>
                 <div class="card w-1/2 mx-auto border  bg-base-100 shadow-xl">
                        <div class="card-body">
                        <div className=''>
                              <FormikProvider value={formik}>
                              <Form autoComplete="off" onSubmit={handleSubmit}>

                              <div class="form-control w-full  ">
                                    <label class="label">
                                          <span class="label-text">Name</span>
                                    </label>
                                    <input {...formik.getFieldProps('name')}  type="text" id='name' placeholder="Type here" class="input input-bordered " />
                                    <label class="label">
              {formik.touched.name && formik.errors.name ? (
                <p className='text-red-500'>{formik.errors.name}</p>
              ) : null}

            </label>
                                           </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">From</span>
                                    </label>
                                    <input {...formik.getFieldProps('country')} type="text" id='country' placeholder="country" class="input input-bordered " />
                                    <label class="label">
              {formik.touched.country && formik.errors.country ? (
                <p className='text-red-500'>{formik.errors.country}</p>
              ) : null}

            </label>
                              </div>
                             
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Retings</span>
                                    </label>
                                    <input {...formik.getFieldProps('retings')} type="text" id='retings' placeholder="Retings" class="input input-bordered " />
                                    <label class="label">
              {formik.touched.retings && formik.errors.retings ? (
                <p className='text-red-500'>{formik.errors.retings}</p>
              ) : null}

            </label>
                              </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Picture</span>
                                    </label>
                                    <input {...formik.getFieldProps('img')} type="file" id='img' placeholder="Picture" class="input input-bordered " />
                                    <label class="label">
              {formik.touched.img && formik.errors.img ? (
                <p className='text-red-500'>{formik.errors.img}</p>
              ) : null}

            </label>  </div>
                              <div class="form-control w-full ">
                                    <label class="label">
                                          <span class="label-text">Comment</span>
                                    </label>
                                    <textarea {...formik.getFieldProps('comment')} id='comment'  type="text" placeholder="comment" class="input input-bordered h-28 " />
                                    <label class="label">
              {formik.touched.comment && formik.errors.comment ? (
                <p className='text-red-500'>{formik.errors.comment}</p>
              ) : null}

            </label>       </div>
                             
                            
                             
                              <div className='w-full  text-center mt-2'>
                                    <input className='btn px-8' type="submit" value="Review" />

                              </div>



                              </Form>
                              </FormikProvider>
                       
                  </div>
                        </div>
                  </div>
                 </div>
            </div>
      );
};

export default Review;