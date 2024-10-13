import API from '@/services/api';
import axios from 'axios';
import { UserData } from '../../interfaces/IUserData';
import { EventData } from '../../interfaces/IEventData';
import { getSession } from 'next-auth/react';

export async function getUserData(): Promise<UserData> {
  try {
    const session = await getSession();
    const token = session?.token as string;

    const response = await API.get('/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log("response: ", response);
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

export async function updateUserData(data: UserData): Promise<UserData> {
  try {
    const session = await getSession();
    const token = session?.token as string;

    const response = await API.put('/users/me', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log("response: ", response);
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


