/*
  Warnings:

  - You are about to drop the `Voice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_bandId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_gigId_fkey";

-- DropForeignKey
ALTER TABLE "Voice" DROP CONSTRAINT "Voice_instrumentId_fkey";

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
    "active" BOOLEAN NOT NULL DEFAULT true,
    "instrumentId" INTEGER NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "BandVoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GigVoice_id_gigId_key" ON "GigVoice"("id", "gigId");

-- CreateIndex
CREATE UNIQUE INDEX "BandVoice_id_bandId_key" ON "BandVoice"("id", "bandId");

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GigVoice" ADD CONSTRAINT "GigVoice_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandVoice" ADD CONSTRAINT "BandVoice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;
