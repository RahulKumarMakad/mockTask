import api, { setAuthToken } from "../utils/api";

// Login Action
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/auth/login", credentials);  // POST request to login
    dispatch({ type: "LOGIN_SUCCESS", payload: data.token });  // Dispatch success action
    localStorage.setItem("token", data.token);  // Store token in localStorage
    setAuthToken(data.token);  // Set token in API headers for future requests
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Register Action
export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/auth/register", userData);  // POST request to register
    dispatch({ type: "REGISTER_SUCCESS", payload: data.token });  // Dispatch success action
    localStorage.setItem("token", data.token);  // Store token in localStorage
    setAuthToken(data.token);  // Set token in API headers for future requests
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Logout Action
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token"); // Remove token from localStorage
  setAuthToken(null); // Remove token from headers
  dispatch({ type: "LOGOUT_SUCCESS" }); // Dispatch logout action
};
