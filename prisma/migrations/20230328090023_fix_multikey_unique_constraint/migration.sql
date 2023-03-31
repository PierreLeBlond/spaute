/*
  Warnings:

  - A unique constraint covering the columns `[bandId,playerId]` on the table `AdminRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gigId,playerId]` on the table `OrganizerRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instrumentId,playerId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_bandId_playerId_key" ON "AdminRole"("bandId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizerRole_gigId_playerId_key" ON "OrganizerRole"("gigId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_instrumentId_playerId_key" ON "Role"("instrumentId", "playerId");
