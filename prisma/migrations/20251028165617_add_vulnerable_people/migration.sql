-- CreateEnum
CREATE TYPE "Region" AS ENUM ('Gaza', 'Inhambane', 'Maputo', 'Nampula', 'ÁfricaDoSul');

-- CreateEnum
CREATE TYPE "VulnerabilityLevel" AS ENUM ('Baixo', 'Medio', 'Alto');

-- CreateTable
CREATE TABLE "Vulnerable-people" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ageGroup" INTEGER NOT NULL,
    "vulnerable" TEXT NOT NULL,
    "VulnerabilityLevel" "VulnerabilityLevel" NOT NULL,
    "region" "Region" NOT NULL,
    "message" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vulnerable-people_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vulnerable-people_number_key" ON "Vulnerable-people"("number");
