import { API_URL } from '../config/api';
import { CompanyFormState } from '../types';

export async function saveCompanyRequest(data: CompanyFormState, token: string) {
  const response = await fetch(`${API_URL}/companies/me`, {
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
