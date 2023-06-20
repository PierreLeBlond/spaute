/*
  Warnings:

  - You are about to drop the column `currentFormationId` on the `Gig` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gigCurrentFromId]` on the table `Formation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gigCurrentFromId` to the `Formation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Gig" DROP CONSTRAINT "Gig_currentFormationId_fkey";

-- DropIndex
DROP INDEX "Gig_currentFormationId_key";

-- AlterTable
ALTER TABLE "Formation" ADD COLUMN     "gigCurrentFromId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Gig" DROP COLUMN "currentFormationId";

-- CreateIndex
CREATE UNIQUE INDEX "Formation_gigCurrentFromId_key" ON "Formation"("gigCurrentFromId");

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_gigCurrentFromId_fkey" FOREIGN KEY ("gigCurrentFromId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
