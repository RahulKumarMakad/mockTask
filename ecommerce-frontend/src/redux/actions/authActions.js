import axios from "../../utils/api";
import { setAuthToken } from "../../utils/auth";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

// Login User
export const loginUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/login", userData);
    localStorage.setItem("token", data.token); // Store JWT in localStorage
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    navigate("/"); // Redirect to home page after successful login
  } catch (error) {
    console.error("Login Error:", error.response.data);
  }
};

// Register User
export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/register", userData);
    localStorage.setItem("token", data.token); // Store JWT in localStorage
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    navigate("/"); // Redirect to home page after successful registration
  } catch (error) {
    console.error("Registration Error:", error.response.data);
  }
};
