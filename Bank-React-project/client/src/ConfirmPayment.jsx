import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { qrData } = location.state || {};

  const [amount, setAmount] = useState(null); // will store amount from Flask
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!qrData) return;

    // Fetch the latest payment amount from Flask
    fetch("http://localhost:5000/moneydata/last")
      .then((res) => res.json())
      .then((data) => {
        setAmount(data.amount || qrData.amount); // fallback to qrData.amount
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setAmount(qrData.amount); // fallback
        setLoading(false);
      });
  }, [qrData]);

  if (!qrData) {
    return <p className="text-red-500 p-4">No payment data found.</p>;
  }

  if (loading) {
    return <p className="text-gray-500 p-4">Loading payment details...</p>;
  }

  const handleProceed = () => {
    navigate("/enter-pin", { state: { qrData} }); // pass amount forward
  };

  return (
    <div className="bg-white w-[400px] mx-auto mt-20 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold mb-4">Confirm Payment</h1>

      <div className="text-left mb-6">
        <p>
          <span className="font-semibold">Pay To:</span> {qrData.name}
        </p>
        <p>
          <span className="font-semibold">VPA:</span> {qrData.vpa}
        </p>
        <p>
          <span className="font-semibold">Amount:</span> ₹{qrData.amount}
        </p>
        
      </div>

      <div className="flex justify-around">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handleProceed}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default ConfirmPayment;
