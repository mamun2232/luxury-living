import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { Suspense, useEffect, useState } from 'react';

const ChackoutFrom = ({myOrder}) => {
      const stripe = useStripe();
      const elements = useElements();
      const [cardError , setCardError] = useState('')
      const [clientSecrect , setClientSecrect] = useState('')
      const [success , setSuccess] = useState('')
      const [transactionId ,  setTransactionId] = useState('')

      const {_id,price , email , name , number} = myOrder
  

      useEffect(()=> {
        if(price){
          fetch('http://localhost:5000/create-payment-intent' , {
            method: "POST",
            headers: {
                  'content-type': 'application/json',
            },
            body: JSON.stringify({price})
      })
      .then(res => res.json())
      .then(data => {
            if(data?.clientSecret)
            setClientSecrect(data?.clientSecret)
            console.log(data);
      })

        }
           

      },[price])
  
      
    
      const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
      //  payment eplement 
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setCardError(error?.message)
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          setCardError('')
        }
        setSuccess('')
      //   confom card payment 
      if(email) {
        const {paymentIntent, Internterror} = await stripe.confirmCardPayment(
          clientSecrect,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: name,
                email: email,
                phone: number
              },
            },
          },
        );
        if(Internterror){
          setCardError(Internterror?.message)
        }
        else{
          setCardError('')
          setSuccess('Your Payment Successfull')
          console.log(paymentIntent);
          setTransactionId(paymentIntent?.id)

          const payment = {
            transactionId: transactionId,
            prodecutId: _id
          }

          fetch(`http://localhost:5000/order/${_id}` , {
            method: "PATCH",
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(payment)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })


        }

      }
      

         


      };


      return (
            <>
                 <form  onSubmit={handleSubmit}>
      <CardElement
      className='border py-4 rounded-xl shadow px-1'
        options={{
          style: {
            base: {
              fontSize: '16px',
             
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
              
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn mt-3 w-full' type="submit" disabled={!stripe || !clientSecrect}>
        Pay
      </button>

      {cardError && <p className='text-red-500'>{cardError}</p>}
    {success && <p className='text-green-500'>{success}</p>}
    {transactionId && <p>Your transactionId: {transactionId}</p>}
    </form>
    
            </>
       
      );
};

export default ChackoutFrom;