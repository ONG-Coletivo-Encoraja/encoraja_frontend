import API from '@/services/api';
import axios from 'axios';
import { IRequestVolunteer } from '@/interfaces/IRequestVolunteer';

export async function requestVolunteer(data: IRequestVolunteer, token: string): Promise<any> { 
  try {
    const response = await API.post('/beneficiary/requestsVolunteer', data, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
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
