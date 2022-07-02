import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Utilitis/Loding';
import LoginModal from './LoginModal';


const RequreAuth = ({ children }) => {
      const [user , lodaing] = useAuthState(auth)
      const location = useLocation()

      if(lodaing){
            return <Loding/>
      }
    


      if(!user){
            return <Navigate to="/login" state={{ from: location }} replace />;
         
      }
 

      return children
};

export default RequreAuth;