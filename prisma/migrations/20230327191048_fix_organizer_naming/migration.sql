/*
  Warnings:

  - You are about to drop the `OrganisatorRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrganisatorRole" DROP CONSTRAINT "OrganisatorRole_gigId_fkey";

-- DropForeignKey
ALTER TABLE "OrganisatorRole" DROP CONSTRAINT "OrganisatorRole_playerId_fkey";

-- DropTable
DROP TABLE "OrganisatorRole";

-- CreateTable
CREATE TABLE "OrganizerRole" (
    "id" SERIAL NOT NULL,
    "gigId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "OrganizerRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrganizerRole" ADD CONSTRAINT "OrganizerRole_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizerRole" ADD CONSTRAINT "OrganizerRole_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
