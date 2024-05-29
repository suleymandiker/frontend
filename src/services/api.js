import axios from 'axios';

const api = axios.create({
  baseURL: 'https://enigmatic-peak-31224-722646e93474.herokuapp.com/api'
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
