import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import '../CheckoutForm/CheckoutForm.css'

const CheckoutForm = ({ cart, price }) => {

    const [cardError, setCardError] = useState('')

    const stripe = useStripe()
    const element = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const { user } = useAuth()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);

        if (card == null) {
            return;
        }
        console.log('Card', card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
            console.log('Error', error);
        }
        else {
            setCardError('')
            console.log('Payment Method', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }



        if (paymentIntent.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            setProcessing(false)
            //save payment info to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data) {
                        //alert
                    }
                })
        }

    }


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
                <button className="btn btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-600 font-bold">{cardError}</p>}
            {transactionId && <p className="text-green-600 font-bold">Transaction successful with id:{transactionId}</p>}
        </>
    );
};

export default CheckoutForm;