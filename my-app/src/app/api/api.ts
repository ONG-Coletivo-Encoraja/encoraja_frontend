export const API_URL = 'http://127.0.0.1:8000/api';

export async function fetcher(url: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${url}`, options);
  return res.json();
}
