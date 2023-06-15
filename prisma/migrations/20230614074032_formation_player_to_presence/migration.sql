/*
  Warnings:

  - You are about to drop the `FormationUndefinedVoicePlayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormationVoicePlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FormationUndefinedVoicePlayer" DROP CONSTRAINT "FormationUndefinedVoicePlayer_formationId_fkey";

-- DropForeignKey
ALTER TABLE "FormationUndefinedVoicePlayer" DROP CONSTRAINT "FormationUndefinedVoicePlayer_playerId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoicePlayer" DROP CONSTRAINT "FormationVoicePlayer_formationVoiceId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoicePlayer" DROP CONSTRAINT "FormationVoicePlayer_playerId_fkey";

-- DropTable
DROP TABLE "FormationUndefinedVoicePlayer";

-- DropTable
DROP TABLE "FormationVoicePlayer";

-- CreateTable
CREATE TABLE "FormationUndefinedVoicePresence" (
    "id" SERIAL NOT NULL,
    "formationId" INTEGER NOT NULL,
    "presenceId" INTEGER NOT NULL,

    CONSTRAINT "FormationUndefinedVoicePresence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormationVoicePresence" (
    "id" SERIAL NOT NULL,
    "formationVoiceId" INTEGER NOT NULL,
    "presenceId" INTEGER NOT NULL,

    CONSTRAINT "FormationVoicePresence_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" ADD CONSTRAINT "FormationUndefinedVoicePresence_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" ADD CONSTRAINT "FormationUndefinedVoicePresence_presenceId_fkey" FOREIGN KEY ("presenceId") REFERENCES "Presence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePresence" ADD CONSTRAINT "FormationVoicePresence_formationVoiceId_fkey" FOREIGN KEY ("formationVoiceId") REFERENCES "FormationVoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePresence" ADD CONSTRAINT "FormationVoicePresence_presenceId_fkey" FOREIGN KEY ("presenceId") REFERENCES "Presence"("id") ON DELETE CASCADE ON UPDATE CASCADE;
