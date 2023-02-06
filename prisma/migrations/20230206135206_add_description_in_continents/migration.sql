/*
  Warnings:

  - Added the required column `description` to the `continents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_continents" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "countries_amount" INTEGER NOT NULL,
    "languages_amount" INTEGER NOT NULL,
    "cities_amount" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_continents" ("banner_url", "cities_amount", "countries_amount", "created_at", "languages_amount", "name", "resume", "slug") SELECT "banner_url", "cities_amount", "countries_amount", "created_at", "languages_amount", "name", "resume", "slug" FROM "continents";
DROP TABLE "continents";
ALTER TABLE "new_continents" RENAME TO "continents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
