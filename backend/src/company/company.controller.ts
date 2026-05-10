import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

interface AuthRequest extends Request {
  user: { id: number };
}

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: AuthRequest, @Body() data: CreateCompanyDto) {
    return this.companyService.createCompany(req.user.id, data);
  }

  @UseGuards(AuthGuard)
  @Get()
  list(@Req() req: AuthRequest) {
    return this.companyService.listUserCompanies(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Put('me')
  upsertMyCompany(@Req() req: AuthRequest, @Body() data: CreateCompanyDto) {
    return this.companyService.upsertPrimaryCompany(req.user.id, data);
  }
}
