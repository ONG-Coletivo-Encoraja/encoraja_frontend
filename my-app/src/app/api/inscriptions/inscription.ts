import API from '@/services/api';
import axios from 'axios';
import { InscriptionsResponse } from '@/interfaces/IInscription';
import { Inscription } from '@/interfaces/IInscription';

export async function getMyInscriptions(token: string): Promise<InscriptionsResponse> { 
  try {
    const response = await API.get('/myInscriptions', {
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

export async function deleteInscription(token: string, id: string): Promise<Inscription> { 
    try {
      const response = await API.delete(`/inscription/${id}`, {
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

  export async function createInscription(event_id: number, token: string): Promise<any> {
    try {
      const response = await API.post(
        '/inscription',
        { event_id },  
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
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
  
