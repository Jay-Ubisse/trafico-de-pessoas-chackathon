/*
  Warnings:

  - Added the required column `message` to the `sent_messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sent_messages" ADD COLUMN     "message" TEXT NOT NULL;
