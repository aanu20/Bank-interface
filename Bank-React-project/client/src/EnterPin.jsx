import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PinInput() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // only digits
    if (!value) return;

    const newPin = [...pin];
    newPin[index] = value[0]; // only take first digit
    setPin(newPin);

    // move focus to next box
    if (index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // move back on backspace
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // ✅ Navigate when all 4 digits are entered
  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      const fullPin = pin.join("");
      console.log("Entered PIN:", fullPin);
      // Navigate to payment page
      navigate("/make-payment");
    }
  }, [pin, navigate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4 text-black">Enter your PIN</h1>
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

export default PinInput;
