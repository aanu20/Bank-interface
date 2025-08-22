import { useLocation } from "react-router-dom";

function TransactionSuccess() {
  const location = useLocation();
  const { amount } = location.state || {}; // Get the amount passed from previous page

  return (
    <div className="text-white">
      <h2>Payment Successful!</h2>
      {amount ? (
        <p>₹{amount} has been paid successfully.</p>
      ) : (
        <p>No payment information found.</p>
      )}
    </div>
  );
}

export default TransactionSuccess;
