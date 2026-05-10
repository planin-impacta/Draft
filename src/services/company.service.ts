import { API_URL } from '../config/api';
import { CompanyFormState } from '../types';

export async function saveCompanyRequest(data: CompanyFormState, token: string) {
  const payload = {
    name: data.nomeFantasia,
    razaoSocial: data.razaoSocial,
    nomeFantasia: data.nomeFantasia,
    cnpj: data.cnpj.replace(/\D/g, ''),
    inscricaoEstadual: data.inscricaoEstadual,
    emailCorporativo: data.emailCorporativo,
    telefoneWhatsapp: data.telefoneWhatsapp.replace(/\D/g, ''),
    cep: data.cep.replace(/\D/g, ''),
    rua: data.rua,
    numero: data.numero,
    complemento: data.complemento,
    bairro: data.bairro,
    cidade: data.cidade,
    estado: data.estado,
    openingHour: data.openingHour,
    closingHour: data.closingHour,
    daysOpen: data.daysOpen,
  };

  const response = await fetch(`${API_URL}/companies/me`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  return {
    ok: response.ok,
    data: result,
  };
}
