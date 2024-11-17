import API from '@/services/api';
import axios from 'axios';
import { EventData } from '@/interfaces/IEventData';

export async function registerEvent(data: EventData, token: string): Promise<any> { 
  try {
    const response = await API.post('/admin/event', data, {
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
