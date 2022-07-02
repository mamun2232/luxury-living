import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { Suspense, useEffect, useState } from 'react';

const ChackoutFrom = () => {
      const stripe = useStripe();
      const elements = useElements();
      const [cardError , setCardError] = useState('')
      const [clientSecrect , setClientSecrect] = useState('')
      const [success , setSuccess] = useState('')
      const price = 500

      useEffect(()=> {
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
      //   confom card payment 
      const {paymentIntent, Internterror} = await stripe.confirmCardPayment(
            '{PAYMENT_INTENT_CLIENT_SECRET}',
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'Md Mamun',
                },
              },
            },
          );

          if(Internterror){
            setCardError(Internterror?.message)
          }
          else{
            setCardError('')
            setSuccess('Your payment confrom')
            console.log(paymentIntent);
          }


      };


      return (
            <>
                 <form onSubmit={handleSubmit}>
      <CardElement
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
      <button className='btn' type="submit" disabled={!stripe || !clientSecrect}>
        Pay
      </button>
      
    </form>
    {cardError && <p>{cardError}</p>}
    {success && <p>{success}</p>}
            </>
       
      );
};

export default ChackoutFrom;