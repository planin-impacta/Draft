export type FlowStep = 'signup' | 'company';

export type SignUpFormState = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type CompanyFormState = {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricaoEstadual: string;
  emailCorporativo: string;
  telefoneWhatsapp: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  openingHour: string;
  closingHour: string;
  daysOpen: string;
};

export const initialSignUpForm: SignUpFormState = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const initialCompanyForm: CompanyFormState = {
  razaoSocial: '',
  nomeFantasia: '',
  cnpj: '',
  inscricaoEstadual: '',
  emailCorporativo: '',
  telefoneWhatsapp: '',
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  openingHour: '',
  closingHour: '',
  daysOpen: '',
};

