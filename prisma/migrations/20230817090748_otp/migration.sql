-- CreateTable
CREATE TABLE "OneTimePassword" (
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expires" TEXT NOT NULL,

    CONSTRAINT "OneTimePassword_pkey" PRIMARY KEY ("password","email")
);

-- CreateTable
CREATE TABLE "AuthOneTimePassword" (
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TEXT NOT NULL,

    CONSTRAINT "AuthOneTimePassword_pkey" PRIMARY KEY ("password","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OneTimePassword_password_key" ON "OneTimePassword"("password");

-- CreateIndex
CREATE UNIQUE INDEX "OneTimePassword_email_key" ON "OneTimePassword"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AuthOneTimePassword_password_key" ON "AuthOneTimePassword"("password");

-- CreateIndex
CREATE UNIQUE INDEX "AuthOneTimePassword_user_id_key" ON "AuthOneTimePassword"("user_id");

-- AddForeignKey
ALTER TABLE "AuthOneTimePassword" ADD CONSTRAINT "AuthOneTimePassword_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
