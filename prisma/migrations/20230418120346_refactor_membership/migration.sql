/*
  Warnings:

  - You are about to drop the `AdminRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizerRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BandToPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdminRole" DROP CONSTRAINT "AdminRole_bandId_fkey";

-- DropForeignKey
ALTER TABLE "AdminRole" DROP CONSTRAINT "AdminRole_playerId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizerRole" DROP CONSTRAINT "OrganizerRole_gigId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizerRole" DROP CONSTRAINT "OrganizerRole_playerId_fkey";

-- DropForeignKey
ALTER TABLE "_BandToPlayer" DROP CONSTRAINT "_BandToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_BandToPlayer" DROP CONSTRAINT "_BandToPlayer_B_fkey";

-- AlterTable
ALTER TABLE "Presence" ADD COLUMN     "isOrganizer" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "AdminRole";

-- DropTable
DROP TABLE "OrganizerRole";

-- DropTable
DROP TABLE "_BandToPlayer";

-- CreateTable
CREATE TABLE "Membership" (
    "id" SERIAL NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "bandId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Membership_bandId_playerId_key" ON "Membership"("bandId", "playerId");

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
