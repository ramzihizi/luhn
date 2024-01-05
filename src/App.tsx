import "./App.css";
import CreditCardForm from "./components/CreditCardForm";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <h1 className="self-center text-3xl font-bold">
        Credit Card Luhn Algorithm
      </h1>
      <CreditCardForm />
    </div>
  );
}

export default App;
