import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PaymentEnterPin() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/transaction-success-pin", { state: { amount } });
    }
  };

  return (
    <div className="text-white">
      <h2>Enter the amount</h2>
      <input
        type="text"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for Enter
      />
    </div>
  );
}

export default PaymentEnterPin;
