import API from '@/services/api';
import axios from 'axios';
import { IReportAdmin } from '@/interfaces/IReportAdmin';

export async function registerReportAdmin(data: IReportAdmin, token: string): Promise<any> { 
  try {
    const response = await API.post('/volunteer/report', data, {
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
