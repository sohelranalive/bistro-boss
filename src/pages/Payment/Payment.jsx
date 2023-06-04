// const Payment = () => {
//     return (
//         <div>
//             <h1>Welcome to payment area</h1>
//         </div>
//     );
// };

// export default Payment;


import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN)

const Payment = () => {
    const [, cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))


    return (
        <div className="border w-11/12 mx-auto">
            <h1 className="text-3xl text-center">Please continue with payment procedure</h1>
            <br />
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;