/*
  Warnings:

  - You are about to drop the column `roleId` on the `Instrument` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[instrumentId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `instrumentId` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_roleId_fkey";

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "roleId";

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "instrumentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Role_instrumentId_key" ON "Role"("instrumentId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
