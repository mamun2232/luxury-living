import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
      const {id} = useParams()
      console.log(id);
      return (
            <div>
                  <p>{id}</p>
            </div>
      );
};

export default Payment;