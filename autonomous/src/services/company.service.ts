export async function saveCompanyRequest(data: any, token: string) {
  const response = await fetch('http://192.168.1.14:3000/companies/me', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return {
    ok: response.ok,
    data: result,
  };
}