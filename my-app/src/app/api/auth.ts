import API from '@/services/api';
import axios from 'axios';

export async function register(data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  date_birthday: string;
  race: string;
  gender: string;
  image_term: boolean;
  data_term: boolean;
  street: string;
  number: string;
  neighbourhood: string;
  city: string;
  zip_code: string;
  phone: string;
}) {
  console.log('Enviando dados para o registro:', data);

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
