-- DropForeignKey
ALTER TABLE "AdminRole" DROP CONSTRAINT "AdminRole_bandId_fkey";

-- DropForeignKey
ALTER TABLE "AdminRole" DROP CONSTRAINT "AdminRole_playerId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizerRole" DROP CONSTRAINT "OrganizerRole_gigId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizerRole" DROP CONSTRAINT "OrganizerRole_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_bandId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_instrumentId_fkey";

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizerRole" ADD CONSTRAINT "OrganizerRole_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizerRole" ADD CONSTRAINT "OrganizerRole_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminRole" ADD CONSTRAINT "AdminRole_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminRole" ADD CONSTRAINT "AdminRole_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
