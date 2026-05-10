import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';
import { UpdateProfileDto } from './dto/update-profile.dto';

interface AuthRequest extends Request {
  user: { id: number };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  me(@Req() req: AuthRequest) {
    return this.authService.me(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Patch('me')
  updateMe(@Req() req: AuthRequest, @Body() data: UpdateProfileDto) {
    return this.authService.updateMe(req.user.id, data);
  }
}
