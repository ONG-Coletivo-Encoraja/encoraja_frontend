import API from '@/services/api';
import axios from 'axios';
import { UserData } from '@/interfaces/IUserData';
import { getSession } from 'next-auth/react';

export async function getUserData(): Promise<UserData[]> { // Altere o tipo para UserData[]
  try {
    const session = await getSession();
    const token = session?.token as string;

    const response = await API.get('/admin/users?page=1&permission=volunteer', { // Corrigido para usar & em vez de ?
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log("response: ", response);
    return response.data; // Supondo que response.data seja um array de usuários
  
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    throw error;
  }
}
