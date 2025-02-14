-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" TEXT NOT NULL,
    "role" BOOLEAN NOT NULL DEFAULT false,
    "session" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
