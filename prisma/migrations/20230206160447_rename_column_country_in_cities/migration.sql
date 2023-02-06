/*
  Warnings:

  - You are about to drop the column `Country` on the `cities` table. All the data in the column will be lost.
  - Added the required column `country` to the `cities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "continent_slug" TEXT NOT NULL,
    CONSTRAINT "cities_continent_slug_fkey" FOREIGN KEY ("continent_slug") REFERENCES "continents" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cities" ("continent_slug", "flag", "id", "image_url", "name") SELECT "continent_slug", "flag", "id", "image_url", "name" FROM "cities";
DROP TABLE "cities";
ALTER TABLE "new_cities" RENAME TO "cities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
