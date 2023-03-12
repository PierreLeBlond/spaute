-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gig" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bandId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Gig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Presence" (
    "id" SERIAL NOT NULL,
    "value" BOOLEAN NOT NULL DEFAULT false,
    "gigId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "playable" BOOLEAN NOT NULL DEFAULT false,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Band_name_key" ON "Band"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Presence_gigId_playerId_key" ON "Presence"("gigId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_key" ON "Instrument"("name");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gig" ADD CONSTRAINT "Gig_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
