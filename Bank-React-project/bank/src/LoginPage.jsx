import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Define the 'create' function outside handleSubmit
  const create = () => {
    navigate("/create-account");
  };

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
        localStorage.setItem("username", username); // Store the username in localStorage
        alert("Signup successful!");
        navigate("/SignUpQuestionPage"); // Navigate to the question page
      } else if (response.status === 409) {
        const errorData = await response.json();
        alert(errorData.message); // Display the error message to the user
      } else {
        console.error("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  };

  return (
    <div className="div_box">
      <form className="form" onSubmit={handleSubmit}>
        <h1>VaultHub</h1>
        <h3>Login</h3>
        <input
          className="text"
          type="text"
          placeholder="Username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </form>
      <p onClick={create} style={{ cursor: "pointer" }}>
        Create account
      </p>
    </div>
  );
}

export default LoginPage;
