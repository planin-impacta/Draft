-- Add address fields to Company
ALTER TABLE "Company"
ADD COLUMN "cep" TEXT,
ADD COLUMN "street" TEXT,
ADD COLUMN "number" TEXT,
ADD COLUMN "complement" TEXT,
ADD COLUMN "neighborhood" TEXT,
ADD COLUMN "city" TEXT,
ADD COLUMN "state" TEXT;
