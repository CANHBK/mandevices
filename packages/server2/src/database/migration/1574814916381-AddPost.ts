import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPost1574814916381 implements MigrationInterface {
    name = 'AddPost1574814916381'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_profile_posts_post` (`userProfileId` int NOT NULL, `postId` int NOT NULL, INDEX `IDX_dd349fefab341cc86df9e5dbc4` (`userProfileId`), INDEX `IDX_4a59147dcf83bd9084638ef5b9` (`postId`), PRIMARY KEY (`userProfileId`, `postId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user_account` CHANGE `passwordReminderExpire` `passwordReminderExpire` tinyint UNSIGNED NULL COMMENT 'Thời gian sống của token khôi phục mật khẩu'", undefined);
        await queryRunner.query("ALTER TABLE `user_profile_posts_post` ADD CONSTRAINT `FK_dd349fefab341cc86df9e5dbc47` FOREIGN KEY (`userProfileId`) REFERENCES `user_profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_profile_posts_post` ADD CONSTRAINT `FK_4a59147dcf83bd9084638ef5b98` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user_profile_posts_post` DROP FOREIGN KEY `FK_4a59147dcf83bd9084638ef5b98`", undefined);
        await queryRunner.query("ALTER TABLE `user_profile_posts_post` DROP FOREIGN KEY `FK_dd349fefab341cc86df9e5dbc47`", undefined);
        await queryRunner.query("ALTER TABLE `user_account` CHANGE `passwordReminderExpire` `passwordReminderExpire` tinyint(3) UNSIGNED NULL COMMENT 'Thời gian sống của token khôi phục mật khẩu'", undefined);
        await queryRunner.query("DROP INDEX `IDX_4a59147dcf83bd9084638ef5b9` ON `user_profile_posts_post`", undefined);
        await queryRunner.query("DROP INDEX `IDX_dd349fefab341cc86df9e5dbc4` ON `user_profile_posts_post`", undefined);
        await queryRunner.query("DROP TABLE `user_profile_posts_post`", undefined);
        await queryRunner.query("DROP TABLE `post`", undefined);
    }

}
