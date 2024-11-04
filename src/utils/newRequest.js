import axios from "axios";

// Creating an Axios instance with a custom configuration
const newRequest = axios.create({
    baseURL:"http://localhost:8800/api/", // Setting the base URL for API requests
    withCredentials: true,  // Enabling the inclusion of credentials (like cookies) in cross-site requests
});

export default newRequest;