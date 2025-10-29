/*
  Warnings:

  - You are about to drop the `Vulnerable-people` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Vulnerable-people";

-- DropEnum
DROP TYPE "public"."Region";

-- DropEnum
DROP TYPE "public"."VulnerabilityLevel";

-- CreateTable
CREATE TABLE "vulnerable_people" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ageGroup" INTEGER NOT NULL,
    "vulnerable" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gender" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "childTraffickingScore" DOUBLE PRECISION NOT NULL,
    "domesticServitudeScore" DOUBLE PRECISION NOT NULL,
    "drugsCoercionScore" DOUBLE PRECISION NOT NULL,
    "forcedLaborScore" DOUBLE PRECISION NOT NULL,
    "fraudDeceptionScore" DOUBLE PRECISION NOT NULL,
    "organTraffickingScore" DOUBLE PRECISION NOT NULL,
    "sexualExploitationScore" DOUBLE PRECISION NOT NULL,
    "totalVulnerabilityScore" DOUBLE PRECISION NOT NULL,
    "vulnerabilityLevel" TEXT NOT NULL,
    "vulnerabilityType" TEXT NOT NULL,

    CONSTRAINT "vulnerable_people_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vulnerable_people_number_key" ON "vulnerable_people"("number");
