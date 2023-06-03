const Payment = () => {
    return (
        <div>
            <h1>Welcome to payment area</h1>
        </div>
    );
};

export default Payment;


// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
// import { loadStripe } from "@stripe/stripe-js";

// // const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN)

// const Payment = () => {
//     return (
//         <div className="border w-11/12 mx-auto">
//             <h1 className="text-3xl text-center">Please continue with payment procedure</h1>
//             <br />
//             <div className="border">
//                 {/* <Elements stripe={stripePromise}>
//                     <CheckoutForm />
//                 </Elements> */}
//             </div>
//         </div>
//     );
// };

// export default Payment;