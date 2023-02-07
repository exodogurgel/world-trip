-- CreateTable
CREATE TABLE `continents` (
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `resume` TEXT NOT NULL,
    `banner_url` TEXT NOT NULL,
    `cover` TEXT NOT NULL,
    `countries_amount` INTEGER NOT NULL,
    `languages_amount` INTEGER NOT NULL,
    `cities_amount` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` VARCHAR(191) NOT NULL,
    `image_url` TEXT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `flag` TEXT NOT NULL,
    `continent_slug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cities` ADD CONSTRAINT `cities_continent_slug_fkey` FOREIGN KEY (`continent_slug`) REFERENCES `continents`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
