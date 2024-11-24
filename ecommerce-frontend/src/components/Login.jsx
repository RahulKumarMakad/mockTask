import React, { useState } from "react";
import { setAuthToken } from "../utils/api"; // Import the setAuthToken function

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", credentials);
      const token = response.data.token; // Assuming the backend returns the token
      setAuthToken(token); // Set the token for future requests
      // Redirect the user after login (use history or navigate)
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
