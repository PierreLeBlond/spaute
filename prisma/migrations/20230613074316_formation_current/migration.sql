/*
  Warnings:

  - A unique constraint covering the columns `[gigCurrentFromId]` on the table `Formation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Formation" ADD COLUMN     "gigCurrentFromId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Formation_gigCurrentFromId_key" ON "Formation"("gigCurrentFromId");

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_gigCurrentFromId_fkey" FOREIGN KEY ("gigCurrentFromId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
