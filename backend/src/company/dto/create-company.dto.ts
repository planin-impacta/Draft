import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Matches(/^\d{14}$/, { message: 'CNPJ deve ter 14 dígitos' })
  cnpj: string;

  @IsNotEmpty()
  openingHour: string; // formato HH:mm

  @IsNotEmpty()
  closingHour: string; // formato HH:mm

  @IsNotEmpty()
  @IsString()
  daysOpen: string; // ex: "Mon-Fri"

  @IsOptional()
  @Matches(/^\d{8}$/, { message: 'CEP deve ter 8 dígitos' })
  cep?: string;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  number?: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;
}
