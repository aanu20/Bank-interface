import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.css';


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
    <div className={styles.container}>
  <div className={styles.card}>
    <form onSubmit={handleSubmit}>
      <h1 className={styles.heading}>VaultHub</h1>
      <h3 className={styles.subheading}>Login</h3>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Username or email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={logined}
        type="submit"
        className={styles.loginButton}
      >
        Login
      </button>
    </form>
    <p onClick={forgotpassword} className={styles.linkText}>Forgot password?</p>
    <p onClick={create} className={styles.smallLink}>Create account</p>
  </div>
</div>
  );
}

export default LoginPage;
