/*
  Warnings:

  - You are about to drop the `AuthOneTimePassword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_key` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuthOneTimePassword" DROP CONSTRAINT "AuthOneTimePassword_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth_key" DROP CONSTRAINT "auth_key_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth_session" DROP CONSTRAINT "auth_session_user_id_fkey";

-- DropTable
DROP TABLE "AuthOneTimePassword";

-- DropTable
DROP TABLE "auth_key";

-- DropTable
DROP TABLE "auth_session";

-- CreateTable
CREATE TABLE "UserOneTimePassword" (
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TEXT NOT NULL,

    CONSTRAINT "UserOneTimePassword_pkey" PRIMARY KEY ("password","user_id")
);

-- CreateTable
CREATE TABLE "Key" (
    "id" TEXT NOT NULL,
    "hashed_password" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "active_expires" BIGINT NOT NULL,
    "idle_expires" BIGINT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserOneTimePassword_password_key" ON "UserOneTimePassword"("password");

-- CreateIndex
CREATE UNIQUE INDEX "UserOneTimePassword_user_id_key" ON "UserOneTimePassword"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Key_id_key" ON "Key"("id");

-- CreateIndex
CREATE INDEX "Key_user_id_idx" ON "Key"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE INDEX "Session_user_id_idx" ON "Session"("user_id");

-- AddForeignKey
ALTER TABLE "UserOneTimePassword" ADD CONSTRAINT "UserOneTimePassword_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Key" ADD CONSTRAINT "Key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
