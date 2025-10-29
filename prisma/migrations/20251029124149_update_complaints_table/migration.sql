-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Em_Curso', 'Resolvido', 'Não_Resolvido');

-- AlterTable
ALTER TABLE "complaints" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Em_Curso';
