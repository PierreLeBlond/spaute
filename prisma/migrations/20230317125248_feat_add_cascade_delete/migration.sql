-- DropForeignKey
ALTER TABLE "Gig" DROP CONSTRAINT "Gig_bandId_fkey";

-- DropForeignKey
ALTER TABLE "Presence" DROP CONSTRAINT "Presence_gigId_fkey";

-- DropForeignKey
ALTER TABLE "Presence" DROP CONSTRAINT "Presence_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_playerId_fkey";

-- AddForeignKey
ALTER TABLE "Gig" ADD CONSTRAINT "Gig_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
