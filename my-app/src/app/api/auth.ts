import API from '@/services/api';
import axios from 'axios';
import { UserData } from '../../interfaces/IUserData';

export async function register(data: UserData) {
  try {
    const response = await API.post('/users', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    throw error;
  }
}