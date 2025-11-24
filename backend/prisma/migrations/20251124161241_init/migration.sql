-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('fisica', 'juridica');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(120) NOT NULL,
    "email" TEXT NOT NULL,
    "password_Hash" TEXT NOT NULL,
    "password_type" "PersonType" NOT NULL,
    "cpf" VARCHAR(11),
    "cnph" VARCHAR(14),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_cpf_key" ON "Account"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Account_cnph_key" ON "Account"("cnph");
