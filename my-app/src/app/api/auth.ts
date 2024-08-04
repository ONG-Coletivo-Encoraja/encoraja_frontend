export async function register(name: string, email: string, password: string) {
    const res = await fetch('http://127.0.0.1:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!res.ok) {
      throw new Error('Failed to register');
    }
  
    return await res.json();
  }