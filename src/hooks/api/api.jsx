import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post('/register', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Failed to register');
  }
};

export const profile = async () => {
  try {
    const response = await axios.get('/profile');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
};
