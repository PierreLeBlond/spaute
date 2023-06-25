/*
  Warnings:

  - The primary key for the `Band` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BandVoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DisabledVoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Formation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FormationUndefinedVoicePresence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FormationVoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FormationVoicePresence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Gig` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GigVoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Instrument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Membership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Presence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "BandVoice" DROP CONSTRAINT "BandVoice_bandId_fkey";

-- DropForeignKey
ALTER TABLE "BandVoice" DROP CONSTRAINT "BandVoice_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "DisabledVoice" DROP CONSTRAINT "DisabledVoice_bandVoiceId_fkey";

-- DropForeignKey
ALTER TABLE "DisabledVoice" DROP CONSTRAINT "DisabledVoice_gigId_fkey";

-- DropForeignKey
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_gigCurrentFromId_fkey";

-- DropForeignKey
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_gigId_fkey";

-- DropForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" DROP CONSTRAINT "FormationUndefinedVoicePresence_formationId_fkey";

-- DropForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" DROP CONSTRAINT "FormationUndefinedVoicePresence_presenceId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoice" DROP CONSTRAINT "FormationVoice_formationId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoice" DROP CONSTRAINT "FormationVoice_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoicePresence" DROP CONSTRAINT "FormationVoicePresence_formationVoiceId_fkey";

-- DropForeignKey
ALTER TABLE "FormationVoicePresence" DROP CONSTRAINT "FormationVoicePresence_presenceId_fkey";

-- DropForeignKey
ALTER TABLE "Gig" DROP CONSTRAINT "Gig_bandId_fkey";

-- DropForeignKey
ALTER TABLE "GigVoice" DROP CONSTRAINT "GigVoice_gigId_fkey";

-- DropForeignKey
ALTER TABLE "GigVoice" DROP CONSTRAINT "GigVoice_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_bandId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Presence" DROP CONSTRAINT "Presence_gigId_fkey";

-- DropForeignKey
ALTER TABLE "Presence" DROP CONSTRAINT "Presence_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_playerId_fkey";

-- AlterTable
ALTER TABLE "Band" DROP CONSTRAINT "Band_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Band_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Band_id_seq";

-- AlterTable
ALTER TABLE "BandVoice" DROP CONSTRAINT "BandVoice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "instrumentId" SET DATA TYPE TEXT,
ALTER COLUMN "bandId" SET DATA TYPE TEXT,
ADD CONSTRAINT "BandVoice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BandVoice_id_seq";

-- AlterTable
ALTER TABLE "DisabledVoice" DROP CONSTRAINT "DisabledVoice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gigId" SET DATA TYPE TEXT,
ALTER COLUMN "bandVoiceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "DisabledVoice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DisabledVoice_id_seq";

-- AlterTable
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gigId" SET DATA TYPE TEXT,
ALTER COLUMN "gigCurrentFromId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Formation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Formation_id_seq";

-- AlterTable
ALTER TABLE "FormationUndefinedVoicePresence" DROP CONSTRAINT "FormationUndefinedVoicePresence_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "formationId" SET DATA TYPE TEXT,
ALTER COLUMN "presenceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FormationUndefinedVoicePresence_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FormationUndefinedVoicePresence_id_seq";

-- AlterTable
ALTER TABLE "FormationVoice" DROP CONSTRAINT "FormationVoice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "formationId" SET DATA TYPE TEXT,
ALTER COLUMN "instrumentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FormationVoice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FormationVoice_id_seq";

-- AlterTable
ALTER TABLE "FormationVoicePresence" DROP CONSTRAINT "FormationVoicePresence_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "formationVoiceId" SET DATA TYPE TEXT,
ALTER COLUMN "presenceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FormationVoicePresence_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FormationVoicePresence_id_seq";

-- AlterTable
ALTER TABLE "Gig" DROP CONSTRAINT "Gig_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "bandId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Gig_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Gig_id_seq";

-- AlterTable
ALTER TABLE "GigVoice" DROP CONSTRAINT "GigVoice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "instrumentId" SET DATA TYPE TEXT,
ALTER COLUMN "gigId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GigVoice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GigVoice_id_seq";

-- AlterTable
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Instrument_id_seq";

-- AlterTable
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "bandId" SET DATA TYPE TEXT,
ALTER COLUMN "playerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Membership_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Membership_id_seq";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Player_id_seq";

-- AlterTable
ALTER TABLE "Presence" DROP CONSTRAINT "Presence_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gigId" SET DATA TYPE TEXT,
ALTER COLUMN "playerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Presence_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Presence_id_seq";

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "playerId" SET DATA TYPE TEXT,
ALTER COLUMN "instrumentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisabledVoice" ADD CONSTRAINT "DisabledVoice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisabledVoice" ADD CONSTRAINT "DisabledVoice_bandVoiceId_fkey" FOREIGN KEY ("bandVoiceId") REFERENCES "BandVoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoice" ADD CONSTRAINT "FormationVoice_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoice" ADD CONSTRAINT "FormationVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" ADD CONSTRAINT "FormationUndefinedVoicePresence_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationUndefinedVoicePresence" ADD CONSTRAINT "FormationUndefinedVoicePresence_presenceId_fkey" FOREIGN KEY ("presenceId") REFERENCES "Presence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePresence" ADD CONSTRAINT "FormationVoicePresence_formationVoiceId_fkey" FOREIGN KEY ("formationVoiceId") REFERENCES "FormationVoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormationVoicePresence" ADD CONSTRAINT "FormationVoicePresence_presenceId_fkey" FOREIGN KEY ("presenceId") REFERENCES "Presence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_gigCurrentFromId_fkey" FOREIGN KEY ("gigCurrentFromId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
