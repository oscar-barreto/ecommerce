'use client'

import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import Heading from "../components/Heading";
import Button from "../components/Button";
import toast from "react-hot-toast";
import {
    PaymentElement,
    useStripe,
    useElements,
    AddressElement,
  } from "@stripe/react-stripe-js";
import { formatPrice } from "../utils/formatPrice";

interface CheckoutFormProps{
    clientSecret: string,
    handleSetPaymentSuccess:(value: boolean) => void;
    
}


const CheckoutForm:React.FC<CheckoutFormProps> = ({clientSecret, handleSetPaymentSuccess}) => {

    const {cartTotalAmount,handleClearCart, handleSetPaymentIntent} = useCart()
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading]= useState(false);
    const formattedPrice = formatPrice(cartTotalAmount);

    useEffect(()=>{
        if(!stripe){
            return 
        }
        if(!clientSecret){
            return
        }
        handleSetPaymentSuccess(false);
        },[stripe]);
    const handleSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return 
        }
        setIsLoading(true)
        stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        }).then(result =>{
            if(!result.error){
                toast.success('Check Out')
                handleClearCart();
                handleSetPaymentSuccess(true);
                handleSetPaymentIntent(null);

            }
        })
    }
  return (
    <form onSubmit={handleSubmit} id="payment-form">
    <div className="mb-6">
      <Heading title="Enter your details to complete checkout" center />
    </div>
    <h2 className="font-semibold mb-2">Address Information</h2>
    <AddressElement
      options={{
        mode: "shipping",
        allowedCountries: ["US", "BR", "CA", "FR"],
      }}
    />
    <h2 className="font-semibold mt-4 mb-2">Payment Information</h2>
    <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
    <div className="py-4 text-center text-slate-700 text-xl font-bold">
      Total: {formattedPrice}
    </div>
    <Button
      label={isLoading ? `Processing` : "Pay now"}
      disabled={isLoading || !stripe || !elements}
      onClick={() => {}}
    ></Button>
  </form>
  )
}

export default CheckoutForm


// "use client";

// import { useState, useEffect } from "react";
// import {
//   PaymentElement,
//   useStripe,
//   useElements,
//   AddressElement,
// } from "@stripe/react-stripe-js";
// import { useCart } from "@/hooks/useCart";
// import Button from "../components/Button";
// import Heading from "../components/Heading";
// import { toast } from "react-hot-toast";
// import { formatPrice } from "@/utils/formatPrice";

// interface CheckoutProps {
//   clientSecret: string;
//   handleSetPaymentSuccess: (value: boolean) => void;
// }

// const CheckoutForm: React.FC<CheckoutProps> = ({
//   clientSecret,
//   handleSetPaymentSuccess,
// }) => {
//   const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
//     useCart();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isLoading, setIsLoading] = useState(false);

//   const formattedPrice = formatPrice(cartTotalAmount);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }
//     if (!clientSecret) {
//       return;
//     }
//     handleSetPaymentSuccess(false);
//   }, [stripe]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     console.log("payment elements", elements);
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     setIsLoading(true);

//     stripe
//       .confirmPayment({
//         elements,
//         redirect: "if_required",
//       })
//       .then((result) => {
//         console.log("payment result", result);
//         if (!result.error) {
//           toast.success("Checkout Success!");

//           handleClearCart();
//           handleSetPaymentSuccess(true);
//           handleSetPaymentIntent(null);
//         }
//         setIsLoading(false);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} id="payment-form">
//       <div className="mb-6">
//         <Heading title="Enter your details to complete checkout" center />
//       </div>
//       <h2 className="font-semibold mb-2">Address Information</h2>
//       <AddressElement
//         options={{
//           mode: "shipping",
//           allowedCountries: ["US", "KE"],
//         }}
//       />
//       <h2 className="font-semibold mt-4 mb-2">Payment Information</h2>
//       <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
//       <div className="py-4 text-center text-slate-700 text-xl font-bold">
//         Total: {formattedPrice}
//       </div>
//       <Button
//         label={isLoading ? `Processing` : "Pay now"}
//         disabled={isLoading || !stripe || !elements}
//         onClick={() => {}}
//       ></Button>
//     </form>
//   );
// };

// export default CheckoutForm;
