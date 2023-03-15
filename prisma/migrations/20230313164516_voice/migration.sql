-- AlterTable
ALTER TABLE "Gig" ADD COLUMN     "playable" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Voice" (
    "id" SERIAL NOT NULL,
    "instrumentId" INTEGER NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "Voice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voice_instrumentId_key" ON "Voice"("instrumentId");

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
