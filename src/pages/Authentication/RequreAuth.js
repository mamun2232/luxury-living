import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoginModal from './LoginModal';


const RequreAuth = ({ children }) => {
      const [user , lodaing] = useAuthState(auth)
      const location = useLocation()
      let [isOpen, setIsOpen] = useState(false)

      function closeModal() {
        setIsOpen(false)
       
      }
    
      function openModal() {
        setIsOpen(true)
      }

      // if(lodaing){
      //       return <Loading></Loading>
      // }

      if(!user){
            // return <Navigate to="/login" state={{ from: location }} replace />;
            return <LoginModal
            closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
            
            ></LoginModal>
      }
 

      return children
};

export default RequreAuth;