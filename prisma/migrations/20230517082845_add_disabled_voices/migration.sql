/*
  Warnings:

  - You are about to drop the `BandVoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GigVoice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BandVoice" DROP CONSTRAINT "BandVoice_bandId_fkey";

-- DropForeignKey
ALTER TABLE "BandVoice" DROP CONSTRAINT "BandVoice_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "GigVoice" DROP CONSTRAINT "GigVoice_gigId_fkey";

-- DropForeignKey
ALTER TABLE "GigVoice" DROP CONSTRAINT "GigVoice_instrumentId_fkey";

-- DropTable
DROP TABLE "BandVoice";

-- DropTable
DROP TABLE "GigVoice";

-- CreateTable
CREATE TABLE "Voice" (
    "id" SERIAL NOT NULL,
    "instrumentId" INTEGER NOT NULL,
    "gigId" INTEGER,
    "bandId" INTEGER,

    CONSTRAINT "Voice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisabledVoice" (
    "id" SERIAL NOT NULL,
    "gigId" INTEGER NOT NULL,
    "voiceId" INTEGER NOT NULL,

    CONSTRAINT "DisabledVoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voice_id_gigId_key" ON "Voice"("id", "gigId");

-- CreateIndex
CREATE UNIQUE INDEX "Voice_id_bandId_key" ON "Voice"("id", "bandId");

-- CreateIndex
CREATE UNIQUE INDEX "DisabledVoice_gigId_voiceId_key" ON "DisabledVoice"("gigId", "voiceId");

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisabledVoice" ADD CONSTRAINT "DisabledVoice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisabledVoice" ADD CONSTRAINT "DisabledVoice_voiceId_fkey" FOREIGN KEY ("voiceId") REFERENCES "Voice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
