import React, { useState } from "react";
import isValidLuhn from "../utils/isValidLuhn";
import isStringLengthValid from "../utils/isStringLengthValid";

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [message, setMessage] = useState<string>("Press Submit to verify");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardHolderName":
        setCardHolderName(value);
        break;
      case "expirationDate":
        setExpirationDate(value);
        break;
      case "cvc":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidLuhn(cardNumber) && isStringLengthValid(cardNumber)) {
      setMessage(`Your Card is valid ${cardHolderName}`);
    } else {
      setMessage(`Your Card is invalid ${cardHolderName}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-t border-gray-200 pt-10">
          <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
            <div className="col-span-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  autoComplete="cc-number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleInputChange}
                  value={cardNumber}
                  placeholder="Enter credit card number"
                  required
                />
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="name-on-card"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name-on-card"
                  name="cardHolderName"
                  autoComplete="cc-name"
                  onChange={handleInputChange}
                  value={cardHolderName}
                  placeholder="Enter name on card"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="expirationDate"
                  id="expiration-date"
                  autoComplete="cc-exp"
                  onChange={handleInputChange}
                  value={expirationDate}
                  placeholder="Enter expiration date"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  onChange={handleInputChange}
                  value={cvv}
                  placeholder="Enter cvc"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 sm:flex sm:items-center sm:justify-between">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
            >
              Submit
            </button>
            <p
              id="validationMessage"
              className="mt-4 text-center text-lg text-gray-800 sm:mt-0 sm:text-left"
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreditCardForm;
