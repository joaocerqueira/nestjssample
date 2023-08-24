-- CreateTable
CREATE TABLE `SampleOfSample` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sample_id` INTEGER NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SampleOfSample` ADD CONSTRAINT `SampleOfSample_sample_id_fkey` FOREIGN KEY (`sample_id`) REFERENCES `Sample`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
