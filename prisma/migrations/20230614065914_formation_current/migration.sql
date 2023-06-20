/*
  Warnings:

  - You are about to drop the column `gigCurrentFromId` on the `Formation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[currentFormationId]` on the table `Gig` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currentFormationId` to the `Gig` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_gigCurrentFromId_fkey";

-- DropIndex
DROP INDEX "Formation_gigCurrentFromId_key";

-- AlterTable
ALTER TABLE "Formation" DROP COLUMN "gigCurrentFromId",
ALTER COLUMN "gigId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Gig" ADD COLUMN     "currentFormationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Gig_currentFormationId_key" ON "Gig"("currentFormationId");

-- AddForeignKey
ALTER TABLE "Gig" ADD CONSTRAINT "Gig_currentFormationId_fkey" FOREIGN KEY ("currentFormationId") REFERENCES "Formation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
