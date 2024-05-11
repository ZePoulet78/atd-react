import React, { useState } from 'react';
import Axios from '@/_service/caller.service';

const DonationForm = () => {
    const [amount, setAmount] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await Axios.post('/donations', { amount });
            const result = await window.Stripe.redirectToCheckout({
                sessionId: data.sessionId,
            });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Montant du don (€)
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Faire un don</button>
        </form>
    );
};

export default DonationForm;