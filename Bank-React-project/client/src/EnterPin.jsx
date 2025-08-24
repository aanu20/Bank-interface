import { useState, useRef, useEffect } from "react";
import { SHA256 } from "crypto-js";
import { useNavigate, useLocation } from "react-router-dom";

function EnterPin() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { qrData } = location.state || {};

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const newPin = [...pin];
    newPin[index] = value[0];
    setPin(newPin);

    if (index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      const fullPin = pin.join("");
      const enteredHash = SHA256(fullPin).toString();
      const correctHash = SHA256("1234").toString();

      if (enteredHash === correctHash) {
        alert("✅ PIN Verified!");
        navigate("/transaction-success-pin", { state: { qrData } }); // go to success page
      } else {
        alert("❌ Wrong PIN");
        setPin(["", "", "", ""]);
        inputsRef.current[0].focus();
      }
    }
  }, [pin, navigate, qrData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4 text-black">Enter your UPI PIN</h1>
      <div className="flex space-x-4">
        {pin.map((digit, i) => (
          <input
            key={i}
            type="password"
            maxLength={1}
            value={digit}
            ref={(el) => (inputsRef.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-12 h-12 text-center text-xl border-2 border-dashed border-gray-400 rounded-md focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
}

export default EnterPin;
