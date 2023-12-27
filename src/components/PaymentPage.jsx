import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment submitted!');
    // You can implement your payment processing logic here
    // For example, sending the card details to a backend service for processing
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handlePayment} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        
        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter card number"
            required
          />
        </div>

        {/* Card Name */}
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter cardholder name"
            required
          />
        </div>

        {/* Expiry and CVV */}
        <div className="flex justify-between">
          {/* Expiry */}
          <div className="w-1/2 mr-2">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry
            </label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="MM/YY"
              required
            />
          </div>

          {/* CVV */}
          <div className="w-1/2 ml-2">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="CVV"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;