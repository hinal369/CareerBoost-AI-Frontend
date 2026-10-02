import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
})
export const register = (username, email, password) => {
  try {
    const response = api.post('/api/auth/register', {
      username, email, password
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
} 

export const login = (email, password) => {
  try {
    const response = axios.post('/api/auth/login', {
      email, password
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
} 

export const logout = () => {
  try {
    const response = axios.get('/api/auth/logout');

    return response.data;
  } catch (error) {
    console.log(error);
  }
} 

export const getMe = () => {
  try {
    const response = axios.get('/api/auth/get-me');

    return response.data;
  } catch (error) {
    console.log(error);
  }
} 