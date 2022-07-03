import React, { useEffect, useState } from 'react';

const Project = () => {
      const [projects, setProject] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/project')
                  .then(res => res.json())
                  .then(data => setProject(data))
      }, [projects])
      return (
            <div className='max-w-7xl m-auto px-2 mt-10'>
                  <h1 className='text-2xl'>Our Project is here</h1>

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