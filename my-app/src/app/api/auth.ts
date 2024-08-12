import API from '@/services/api';
import axios from 'axios';
import { UserData } from '../../interfaces/IUserData';
import { UserLogin } from '../../interfaces/IUserLogin';

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export async function getUserData(): Promise<UserData> {
  try {
    const token = getAuthToken();
    const response = await API.get('/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
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

export async function login(data: UserLogin) {
  try {
    const response = await API.post('/auth/login', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    const { token } = response.data;
    
    // Armazena o token no localStorage
    localStorage.setItem('authToken', token);

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

export async function logout() {
  try {
    const token = getAuthToken();
    await API.post('/auth/logout', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    // Remove o token do localStorage
    localStorage.removeItem('authToken');
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    throw error;
  }
}

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