import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const User = () => {
      const [user, setUser] = useState([])
      const navigate = useNavigate()
      
     
     
    
      useEffect(() => {
        fetch(`http://localhost:5000/user` , {
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
    }
         
    )
          .then(data => setUser(data))
      },[user])

    
    
    
    
      return (
        <div className=''>
          <p className=' text-center text-xl my-2'>All User List</p>
    
          <div class="overflow-x-auto px-4">
            <table class="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              
                {user.map((user ,index) => <UserRow
                user={user}
                key={user._id}
                index={index}
                
                >
    
                </UserRow>)}
               
               
              
              </tbody>
            </table>
          </div>

        </div>
         );
};

export default User;