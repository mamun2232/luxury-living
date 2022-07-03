import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';
import Loding from '../Utilitis/Loding';

const RequreAdmin = ({children}) => {
      const [user , lodaing] = useAuthState(auth)
      const [admin, adminLoding] = useAdmin(user)
      const location = useLocation()

      if(lodaing || adminLoding){
            return <Loding/>
      }
    


      if(!user || !admin){
            signOut(auth)
            localStorage.removeItem('AccessToken')
            return <Navigate to="/login" state={{ from: location }} replace />;
         
      }
 

      return children
};

export default RequreAdmin;