import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
      const [admin , setAdmin] = useState(false)
      const [adminLoding , setAdminLoding] = useState(true)

      useEffect(() => {
            const email = user?.email
            if(email){
                  fetch(`https://vast-beyond-68425.herokuapp.com/user/${email}`)
                  .then(res => res.json())
                  .then(data => {
                        setAdmin(data.admin)
                        setAdminLoding(false)
                  })
            }
        
      }, [user])
      

      return [admin , adminLoding]
};

export default useAdmin;