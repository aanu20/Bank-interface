import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const created = () => {
    navigate("/login");
  };

  const handlePinChange = (e) => {
    // Only allow numbers and max 4 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPin(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation: PIN must be 4 digits
    if (pin.length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }

    const userData = {
      username: username,
      pin: pin,
      phone: phone,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (!data.error) {
        created(); // Navigate to login after successful creation
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
      setError("Server error, try again later");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-3/4">

        {/* FORM SIDE */}
        <div className="w-1/2 p-10 text-center h-100">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter 4-digit PIN"
              value={pin}
              onChange={handlePinChange}
            />
            <input
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* IMAGE SIDE */}
        <div className="w-2/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBcj0ruRX-TjhhLldYIBApegbhC67WttA_g&s"
            alt="VaultHub Illustration"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;
