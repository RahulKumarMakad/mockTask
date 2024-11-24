import React, { useState } from "react";
import axios from "../utils/api"; // Import the Axios instance

const Register = () => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", userDetails);
      console.log("Registration successful:", response.data);
      // Redirect to login or dashboard
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={userDetails.password} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
