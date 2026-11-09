/*
  Warnings:

  - You are about to drop the `Donneur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Donneur`;

-- CreateTable
CREATE TABLE `donneurs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `groupe_sanguin` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
