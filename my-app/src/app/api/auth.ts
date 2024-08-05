// auth.ts

export async function register(data: {
  name: string;
  email: string;
  password: string;
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
  const res = await fetch('http://127.0.0.1:8000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to register');
  }

  return await res.json();
}
