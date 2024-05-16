import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const stripePromise = loadStripe('pk_test_51PH82aRtdv0UJx3HFYug1NzpfsccCCPjCRsX1XqqZJJwAze1Any8dRegzuxbCJ0ENkiKI9UaRaiIk2HrNJdDhJmS00qRDgcO1V');

const CheckoutForm = () => {
    const [loading, setLoading] = useState(false);
    const [donationAmount, setDonationAmount] = useState(0);
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email: email,
            },
        });

        if (error) {
            console.log(error);
            setLoading(false);
            return;
        }

        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: donationAmount, email: email }),
        });

        const data = await response.json();

        if (data.error) {
            alert(data.error);
            setLoading(false);
            return;
        }

        const { client_secret } = data;

        const confirmResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardElement,
            },
        });

        if (confirmResult.error) {
            console.log(confirmResult.error.message);
            setLoading(false);
        } else {
            if (confirmResult.paymentIntent.status === 'succeeded') {
                // Soumettre le paiement réussi backend
                const paymentResponse = await fetch('/api/payment-success', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ payment_intent_id: confirmResult.paymentIntent.id }),
                });

                const paymentData = await paymentResponse.json();

                if (paymentData.message) {
                    alert(paymentData.message);
                } else {
                    alert('Une erreur est survenue lors du traitement du paiement.');
                }
            } else {
                alert('Une erreur est survenue lors du paiement.');
            }
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-group">
                <label htmlFor="amount">Montant du don (en euros)</label>
                <input
                    type="number"
                    id="amount"
                    className="form-control"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value * 100)} // Convertir centimes
                    min="1"
                    step="0.01"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <CardElement className="card-element form-control" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={!stripe || loading}>
                {loading ? 'Chargement...' : 'Faire un don'}
            </button>
        </form>
    );
};

export default function App() {
    return (
        <div className="App container my-5">
            <h1 className="text-center mb-4">Faire un don</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
}