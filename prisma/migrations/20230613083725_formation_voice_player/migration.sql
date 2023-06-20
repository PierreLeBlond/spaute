/*
  Warnings:

  - You are about to drop the column `roleId` on the `FormationVoice` table. All the data in the column will be lost.
  - Added the required column `instrumentId` to the `FormationVoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FormationVoice" DROP CONSTRAINT "FormationVoice_roleId_fkey";

-- AlterTable
ALTER TABLE "FormationVoice" DROP COLUMN "roleId",
ADD COLUMN     "instrumentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FormationVoicePlayer" (
    "id" SERIAL NOT NULL,
    "formationVoiceId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "FormationVoicePlayer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FormationVoice" ADD CONSTRAINT "FormationVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePlayer" ADD CONSTRAINT "FormationVoicePlayer_formationVoiceId_fkey" FOREIGN KEY ("formationVoiceId") REFERENCES "FormationVoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePlayer" ADD CONSTRAINT "FormationVoicePlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
