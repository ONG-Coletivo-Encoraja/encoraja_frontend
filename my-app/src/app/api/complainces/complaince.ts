import API from '@/services/api';
import axios from 'axios';
import { IComplaince } from '@/interfaces/IComplaince';

export async function registerComplaince(data: IComplaince): Promise<any> { 
  try {
    const response = await API.post('/complainces', data, {
      headers: { 
        'Content-Type': 'application/json' 
      },
    });
    console.log(response)
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
