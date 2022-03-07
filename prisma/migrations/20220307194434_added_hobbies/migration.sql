-- CreateTable
CREATE TABLE "Hobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "_HobbyToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Hobby" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_HobbyToUser_AB_unique" ON "_HobbyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_HobbyToUser_B_index" ON "_HobbyToUser"("B");
