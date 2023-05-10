/*
  Warnings:

  - You are about to drop the column `playerId` on the `auth_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "auth_user" DROP CONSTRAINT "auth_user_playerId_fkey";

-- DropIndex
DROP INDEX "auth_user_playerId_key";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "auth_user" DROP COLUMN "playerId";

-- CreateIndex
CREATE UNIQUE INDEX "Player_userId_key" ON "Player"("userId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
