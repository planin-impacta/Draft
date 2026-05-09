const API_URL = 'http://192.168.1.14:3000';

export async function signupRequest(data: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return {
    ok: response.ok,
    data: result,
  };
}