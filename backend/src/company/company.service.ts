import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async createCompany(userId: number, data: CreateCompanyDto) {
    const exists = await this.prisma.company.findUnique({
      where: { cnpj: data.cnpj },
    });

    if (exists) throw new BadRequestException('CNPJ já cadastrado');

    return this.prisma.company.create({
      data: {
        ...data,
        ownerId: userId,
      },
    });
  }

  async listUserCompanies(userId: number) {
    return this.prisma.company.findMany({
      where: { ownerId: userId },
      include: { services: true },
    });
  }

  async upsertPrimaryCompany(userId: number, data: CreateCompanyDto) {
    const firstCompany = await this.prisma.company.findFirst({
      where: { ownerId: userId },
      orderBy: { id: 'asc' },
    });

    const cnpjConflict = await this.prisma.company.findUnique({
      where: { cnpj: data.cnpj },
    });

    if (cnpjConflict && cnpjConflict.ownerId !== userId) {
      throw new BadRequestException('CNPJ já cadastrado');
    }

    if (firstCompany) {
      return this.prisma.company.update({
        where: { id: firstCompany.id },
        data,
      });
    }

    return this.prisma.company.create({
      data: {
        ...data,
        ownerId: userId,
      },
    });
  }
}
