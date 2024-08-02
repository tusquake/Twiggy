import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';


const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handlePayment = () => {
        // Implement payment processing logic here
    };

    return (
        <div className="payment-page">
            <div className="payment-page-left">
                <div className="title">Payment Details</div>
                <form onSubmit={handlePayment}>
                    <label>
                        Card Number:
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </label>
                    <label>
                        Expiry Date:
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </label>
                    <label>
                        CVV:
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </label>
                    <label>
                        Name on Card:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button type="submit">Pay Now</button>
                </form>
            </div>
            <div className="payment-page-right">
                <div className="cart-total">
                    {/* Cart total and payment button */}
                </div>
            </div>
            <button onClick={() => navigate('/cart')} > Back to Cart</button>
        </div>
    );
}

export default Payment
