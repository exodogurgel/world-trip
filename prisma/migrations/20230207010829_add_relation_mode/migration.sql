-- DropForeignKey
ALTER TABLE `cities` DROP FOREIGN KEY `cities_continent_slug_fkey`;

-- RenameIndex
ALTER TABLE `cities` RENAME INDEX `cities_continent_slug_fkey` TO `cities_continent_slug_idx`;
