/*
  Warnings:

  - You are about to drop the column `message` on the `vulnerable_people` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `vulnerable_people` table. All the data in the column will be lost.
  - You are about to drop the column `vulnerable` on the `vulnerable_people` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vulnerable_people" DROP COLUMN "message",
DROP COLUMN "sentAt",
DROP COLUMN "vulnerable",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
