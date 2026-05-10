import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { CompanyService } from '../company/company.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private companyService: CompanyService,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new BadRequestException('Email já cadastrado');
    }

    const hash = await bcrypt.hash(data.password, 10);

    const defaultName = data.email.split('@')[0] || 'Usuário';

    const user = await this.prisma.user.create({
      data: {
        name: defaultName,
        email: data.email,
        password: hash,
        phone: '',
      },
    });

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Usuário criado com sucesso',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    };
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new BadRequestException('Credenciais inválidas');
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) {
      throw new BadRequestException('Credenciais inválidas');
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Login realizado',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    };
  }

  async me(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    const companies = await this.companyService.listUserCompanies(userId);

    return {
      user,
      companies,
    };
  }

  async updateMe(userId: number, data: UpdateProfileDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
    });

    const companies = await this.companyService.listUserCompanies(userId);

    return {
      user,
      companies,
    };
  }
}
