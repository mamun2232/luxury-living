import React from 'react';

const Project = () => {
      const projects = [
            { 
                  id: 1,
                  img: "https://i.ibb.co/rkWCgTp/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png",
                  name: "Villa on Washington Avenue",
                  country: "Dhaka, Bangladesh"

            },
            { 
                  id: 2,
                  img: "https://i.ibb.co/CJMqzMJ/Mask-Group.png",
                  name: "Luxury villa in Rego Park",
                  country: "Chittagong, Bangladesh"

            },
            { 
                  id: 3,
                  img: "https://i.ibb.co/rmG9WPk/Mask-Group-1.png",
                  name: "Gorgeous house",
                  country: "Cox's Bazar , Bangladesh"

            },
      ]

      return (
            <div className=' max-w-7xl m-auto px-2 mt-40'>
                  <div className='text-center'>
                        <h3 className='text-2xl '>Projects</h3>
                        <p className='text-2xl mt-2 font-bold'>Discover the latest Interior Design
                              available today</p>
                  </div>

                  <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                              projects.map((project , i) =>  <div key={i} class="card card-compact w-96  bg-red-200 ">
                              <figure><img className='h-80 w-full' src={project.img} alt="hotel" /></figure>
                              <div class="card-body text-center">
                                    <h2 class="text-xl">{project.name}</h2>
                                    <p>{project.country}</p>

                              </div>
                        </div>)
                        }
                        
                  </div>
            </div>
      );
};

export default Project;