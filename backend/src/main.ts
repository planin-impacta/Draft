import * as fs from 'node:fs';
import * as path from 'node:path';
import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

function resolveBackendRoot(): string {
  for (let up = 0; up <= 6; up++) {
    const candidate = path.resolve(
      __dirname,
      ...Array.from({ length: up }, () => '..'),
    );
    if (fs.existsSync(path.join(candidate, 'prisma', 'schema.prisma'))) {
      return candidate;
    }
  }

  // Fallback
  return process.cwd();
}

const backendRoot = resolveBackendRoot();
const envLocalPath = path.join(backendRoot, '.env.local');
const envPath = path.join(backendRoot, '.env');

dotenv.config({
  path: fs.existsSync(envLocalPath) ? envLocalPath : envPath,
  override: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );

  const isDev = process.env.NODE_ENV !== 'production';

  app.enableCors(
    isDev
      ? {
          origin: true, // aceita qualquer origin (DEV)
          credentials: true,
        }
      : {
          origin: ['https://site.com'],
          credentials: true,
        },
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

void bootstrap();
