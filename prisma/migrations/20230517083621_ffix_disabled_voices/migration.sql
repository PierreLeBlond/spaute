/*
  Warnings:

  - You are about to drop the column `voiceId` on the `DisabledVoice` table. All the data in the column will be lost.
  - You are about to drop the `Voice` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[gigId,bandVoiceId]` on the table `DisabledVoice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bandVoiceId` to the `DisabledVoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DisabledVoice" DROP CONSTRAINT "DisabledVoice_voiceId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_bandId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_gigId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_instrumentId_fkey";

-- DropIndex
DROP INDEX "DisabledVoice_gigId_voiceId_key";

-- AlterTable
ALTER TABLE "DisabledVoice" DROP COLUMN "voiceId",
ADD COLUMN     "bandVoiceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Voice";

-- CreateTable
CREATE TABLE "GigVoice" (
    "id" SERIAL NOT NULL,
    "instrumentId" INTEGER NOT NULL,
    "gigId" INTEGER NOT NULL,

    CONSTRAINT "GigVoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandVoice" (
    "id" SERIAL NOT NULL,
    "instrumentId" INTEGER NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "BandVoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GigVoice_id_gigId_key" ON "GigVoice"("id", "gigId");

-- CreateIndex
CREATE UNIQUE INDEX "BandVoice_id_bandId_key" ON "BandVoice"("id", "bandId");

-- CreateIndex
CREATE UNIQUE INDEX "DisabledVoice_gigId_bandVoiceId_key" ON "DisabledVoice"("gigId", "bandVoiceId");

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisabledVoice" ADD CONSTRAINT "DisabledVoice_bandVoiceId_fkey" FOREIGN KEY ("bandVoiceId") REFERENCES "BandVoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
