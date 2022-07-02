import React, { useEffect, useState } from 'react';

const UseToken = (user) => {

      // create token 
      const [token , setToken] = useState('')
      useEffect( ()=> {
            const email = user?.user?.email
            const carrentUser = {email: email}
            if(email){
                  console.log(email);
                  fetch(`http://localhost:5000/user/${email}` , {
                        method: "PUT",
                        headers:{
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(carrentUser)
                  })
                  .then(res => res.json())
                  .then(data => {
                       const accessToken = data.token
                       localStorage.setItem("AccessToken" , accessToken)
                       setToken(data)
                  })
            }

      },[user])
      return [token , setToken]
};

export default UseToken;