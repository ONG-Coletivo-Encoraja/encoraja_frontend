import { API_URL } from './api';

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

  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();
  console.log('Resposta do servidor:', responseData);

  if (!res.ok) {
    throw new Error(`Failed to register: ${responseData.message || 'Unknown error'}`);
  }

  return responseData;
}
