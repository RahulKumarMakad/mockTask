import axios from "axios";

// Create an Axios instance with the base URL of your backend API
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this points to your backend API
});

// Function to set or remove the Authorization token
export const setAuthToken = (token) => {
  if (token) {
    // Set the Authorization header globally
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token); // Save the token in localStorage
  } else {
    // Remove the Authorization header globally
    delete instance.defaults.headers.common["Authorization"];
    localStorage.removeItem("token"); // Remove the token from localStorage
  }
};

// Add Authorization header if the token exists in localStorage
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Reject the request in case of an error
  }
);

export default instance;
