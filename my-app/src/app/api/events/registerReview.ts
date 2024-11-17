import API from '@/services/api';
import axios from 'axios';
import { Review } from '@/interfaces/IReview';

export async function registerReview(data: Review, token: string): Promise<any> { 
  try {
    const response = await API.post('/reviews', data, {
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
