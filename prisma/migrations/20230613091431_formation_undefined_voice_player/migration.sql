/*
  Warnings:

  - A unique constraint covering the columns `[formationId,instrumentId]` on the table `FormationVoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "FormationUndefinedVoicePlayer" (
    "id" SERIAL NOT NULL,
    "formationId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "FormationUndefinedVoicePlayer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FormationVoice_formationId_instrumentId_key" ON "FormationVoice"("formationId", "instrumentId");

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePlayer" ADD CONSTRAINT "FormationUndefinedVoicePlayer_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePlayer" ADD CONSTRAINT "FormationUndefinedVoicePlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
