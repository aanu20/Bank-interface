import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function TransactionSuccess() {
  const location = useLocation();
  const { qrData } = location.state || {};

  const [amount, setAmount] = useState(qrData?.amount || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the latest payment amount from Flask
    fetch("http://localhost:5000/moneydata/last")
      .then((res) => res.json())
      .then((data) => {
        if (data?.amount) {
          setAmount(data.amount); // update amount from backend
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching amount:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="animate-pulse">Fetching payment details...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-green-700 text-white p-8 rounded-2xl shadow-lg w-[350px] text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Payment Successful!</h2>
        {amount ? (
          <p className="text-lg">
            <span className="font-semibold">₹{amount}</span> has been paid
            successfully.
          </p>
        ) : (
          <p className="text-lg">No payment information found.</p>
        )}
      </div>
    </div>
  );
}

export default TransactionSuccess;
