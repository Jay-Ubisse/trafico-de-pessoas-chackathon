-- CreateTable
CREATE TABLE "complaints" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "means" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ageGroup" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "complaints_pkey" PRIMARY KEY ("id")
);
