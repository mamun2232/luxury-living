import React, { useEffect, useState } from 'react';

const Project = () => {
 
      const [projects, setProject] = useState([])
      useEffect(() => {
            fetch('https://vast-beyond-68425.herokuapp.com/project')
                  .then(res => res.json())
                  .then(data => setProject(data))
      }, [projects])
      const project = projects.slice(0 , 3)
      
    
      return (
            <div className=' max-w-7xl m-auto px-2 mt-40'>
                  <div className='text-center'>
                        <h3 className='text-2xl '>Projects</h3>
                        <p className='text-2xl mt-2 font-bold'>Discover the latest Interior Design
                              available today</p>
                  </div>

                  <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                              project.map((project , i) =>  <div key={i} class="card card-compact w-96  bg-blue-50">
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