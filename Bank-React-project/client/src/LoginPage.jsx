import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logined=()=>{
    navigate('/')
  }
  // Define the 'create' function outside handleSubmit
  const create = () => {
    navigate("/create-account");
  };

  const forgotpassword=()=>{
    navigate("/forgotPassword")
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const userData = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      // Read response JSON only once
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("username", username); // Store the username in localStorage
        alert("Login successful!");
        navigate("/"); // Navigate to the home page
      } else if (response.status === 409) {
        alert(data.message); // Display the error message from the response
      } else {
        console.error("Login failed with status:", response.status);
        alert("Login failed: " + data.message); // Show generic failure message
      }
  
      console.log(data);
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen ">
  <div className="bg-white rounded-xl shadow-xl p-10 w-96 text-center">
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-extrabold font-mono text-blue-600 mb-2">VaultHub</h1>
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Login</h3>
      <input
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Username or email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={logined}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:cursor-pointer hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
    <p onClick={forgotpassword} className="text-sm mt-4 text-blue-600 hover:underline cursor-pointer">Forgot password?</p>
    <p onClick={create} className="text-sm mt-2 text-blue-600 hover:underline cursor-pointer">Create account</p>
  </div>
</div>

  );
}

export default LoginPage;
