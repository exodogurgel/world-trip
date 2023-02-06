-- CreateTable
CREATE TABLE "continents" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "countries_amount" INTEGER NOT NULL,
    "languages_amount" INTEGER NOT NULL,
    "cities_amount" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "continent_slug" TEXT NOT NULL,
    CONSTRAINT "cities_continent_slug_fkey" FOREIGN KEY ("continent_slug") REFERENCES "continents" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
