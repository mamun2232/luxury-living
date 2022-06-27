import React, { useEffect, useState } from 'react';

const Service = () => {
      const [services, setService] = useState([])
      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setService(data))
      }, [])
      return (
            <div className='max-w-7xl m-auto px-2 mt-40'>
                  <div className="text-center ">
                        <h3 className='text-2xl '>Service</h3>
                        <p className='text-2xl font-bold mt-2'>We're an agency tailored to all
                              clients' needs that always delivers</p>
                  </div>

                  <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                              services.map(service => <div key={service.id} class="card w-96 bg-base-100 rounded-lg shadow-xl">
                                    <figure><img className='w-28' src={service.img} alt="service" /></figure>
                                    <div class="card-body text-center">
                                          <h2 class="text-xl">
                                                {service.service}

                                          </h2>
                                          <h2 className='text-2xl font-bold'>{service.price} $
                                          </h2>
                                          <p>{service.dtls}</p>

                                    </div>
                              </div>)
                        }

                        



                  </div>
                  <div className="text-right mt-5">
                  <button className='btn'>Explore more</button>
                  </div>
            </div>
      );
};

export default Service;