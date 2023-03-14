/*
  Warnings:

  - You are about to drop the column `bandId` on the `Player` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_bandId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "bandId";

-- CreateTable
CREATE TABLE "_BandToPlayer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BandToPlayer_AB_unique" ON "_BandToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_BandToPlayer_B_index" ON "_BandToPlayer"("B");

-- AddForeignKey
ALTER TABLE "_BandToPlayer" ADD CONSTRAINT "_BandToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BandToPlayer" ADD CONSTRAINT "_BandToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
