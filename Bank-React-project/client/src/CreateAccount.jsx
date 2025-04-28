import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const created=()=>{
    navigate("/login")
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
    };
    
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("username", username);
        alert("Signup successful!");
        navigate("/SignUpQuestionPage");
      } else if (response.status === 409) {
        const errorData = await response.json();
        alert(errorData.message);
      } else {
        console.error("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-3/4">

        {/* FORM SIDE */}
        <div className="w-1/2 p-10 text-center h-100">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 ">Create Account</h1>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
            onClick={created}
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
            className="h-full w-full object-cover  "
          />
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;
