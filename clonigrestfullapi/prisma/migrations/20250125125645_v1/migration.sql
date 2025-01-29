-- CreateTable
CREATE TABLE `adresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(50) NOT NULL,
    `province` VARCHAR(100) NULL,
    `city` VARCHAR(50) NULL,
    `contactId` INTEGER NOT NULL,

    INDEX `adresses_contactId_fkey`(`contactId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(20) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `userId` VARCHAR(100) NOT NULL,

    INDEX `contacts_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `adresses` ADD CONSTRAINT `adresses_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
