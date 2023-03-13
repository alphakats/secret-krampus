-- CreateTable
CREATE TABLE "Draw" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "passphrase" TEXT NOT NULL,
    "giver" TEXT NOT NULL,
    "receiver" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Draw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Draw_passphrase_key" ON "Draw"("passphrase");

-- AddForeignKey
ALTER TABLE "Draw" ADD CONSTRAINT "Draw_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
