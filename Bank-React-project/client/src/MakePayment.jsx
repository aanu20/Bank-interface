import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MakePayment() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { qrData } = location.state || {}; // Get data passed from QRScanner

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const paymentData = {
      ...qrData,
      amount: amount,
      txnId: Date.now().toString(),
    };

    // Send to Flask backend
    fetch("http://localhost:5000/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentData),
    })
    .then((res) => res.json())
    .then((data) => {
        // Navigate with qrData including confirmed amount from server
        navigate("/confirm-payment", { state: { qrData: data } });
    })
    .catch((err) => console.error(err));

  };

  return (
    <div className="bg-white w-[400px] mx-auto mt-20 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold mb-4">Enter Amount</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to pay"
          className="border px-3 py-2 mb-4 w-full text-center"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}

export default MakePayment;
