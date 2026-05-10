-- DropIndex
DROP INDEX IF EXISTS "User_cpf_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN IF EXISTS "cpf";
