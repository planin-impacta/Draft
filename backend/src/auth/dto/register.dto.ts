import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  @Matches(/^\d{10,11}$/, { message: 'Telefone deve ter 10 ou 11 dígitos' })
  phone: string;

  @IsNotEmpty({ message: 'Nome da empresa é obrigatório' })
  @IsString()
  companyName: string;

  @IsNotEmpty({ message: 'CNPJ é obrigatório' })
  @Matches(/^\d{14}$/, { message: 'CNPJ deve ter 14 dígitos' })
  cnpj: string;

  @IsNotEmpty({ message: 'Horário de abertura é obrigatório' })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: 'Horário de abertura inválido',
  })
  openingHour: string;

  @IsNotEmpty({ message: 'Horário de fechamento é obrigatório' })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: 'Horário de fechamento inválido',
  })
  closingHour: string;

  @IsNotEmpty({ message: 'Dias de funcionamento é obrigatório' })
  @IsString()
  daysOpen?: string;
}
