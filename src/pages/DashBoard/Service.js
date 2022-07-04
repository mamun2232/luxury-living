import React, { useEffect, useState } from 'react';

const Service = () => {
      const [services, setService] = useState([])
      useEffect(() => {
            fetch('https://vast-beyond-68425.herokuapp.com/service')
                  .then(res => res.json())
                  .then(data => setService(data))
      }, [])
      return (
            <div className='max-w-7xl m-auto px-2'>
                <h1 className='text-2xl mt-10'>Our All Service Here</h1> 

                 <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 '>
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
            </div>
      );
};

export default Service;