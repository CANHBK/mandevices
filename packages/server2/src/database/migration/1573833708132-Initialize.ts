import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1573833708132 implements MigrationInterface {
    name = 'Initialize1573833708132'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `resource` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_c8ed18ff47475e2c4a7bf59daa` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_group` (`id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_profile` (`id` int NOT NULL AUTO_INCREMENT, `fullName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_account` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `passwordSalt` varchar(255) NOT NULL, `passwordHashAlgorithm` varchar(255) NOT NULL, `registrationTime` datetime NOT NULL COMMENT 'Thời gian đăng kí tài khoản', `emailConfirmationToken` varchar(255) NULL COMMENT 'Token để xác thực Email', `passwordReminderToken` varchar(255) NULL COMMENT 'Token để khôi phục mật khẩu', `passwordReminderExpire` tinyint UNSIGNED NULL COMMENT 'Thời gian sống của token khôi phục mật khẩu', `userProfileId` int NULL, UNIQUE INDEX `IDX_56a0e4bcec2b5411beafa47ffa` (`email`), UNIQUE INDEX `REL_0e3ab64d65f30445259aa9aafe` (`userProfileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `permission` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `permissionCategoryId` int NULL, UNIQUE INDEX `IDX_240853a0c3353c25fb12434ad3` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_group_roles_role` (`userGroupId` int NOT NULL, `roleId` int NOT NULL, INDEX `IDX_59ff37d332e3a2a0d06c538b16` (`userGroupId`), INDEX `IDX_e7209cb0b4b3eee227c64f16f0` (`roleId`), PRIMARY KEY (`userGroupId`, `roleId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_group_users_user_profile` (`userGroupId` int NOT NULL, `userProfileId` int NOT NULL, INDEX `IDX_a7650ec1101f763864b583d242` (`userGroupId`), INDEX `IDX_0c29650f06089065df91fb5e46` (`userProfileId`), PRIMARY KEY (`userGroupId`, `userProfileId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `role_permissions_permission` (`roleId` int NOT NULL, `permissionId` int NOT NULL, INDEX `IDX_b36cb2e04bc353ca4ede00d87b` (`roleId`), INDEX `IDX_bfbc9e263d4cea6d7a8c9eb3ad` (`permissionId`), PRIMARY KEY (`roleId`, `permissionId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user_account` ADD CONSTRAINT `FK_0e3ab64d65f30445259aa9aafe3` FOREIGN KEY (`userProfileId`) REFERENCES `user_profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `permission` ADD CONSTRAINT `FK_3cb806eabd2d071691d242eb00b` FOREIGN KEY (`permissionCategoryId`) REFERENCES `resource`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_group_roles_role` ADD CONSTRAINT `FK_59ff37d332e3a2a0d06c538b16d` FOREIGN KEY (`userGroupId`) REFERENCES `user_group`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_group_roles_role` ADD CONSTRAINT `FK_e7209cb0b4b3eee227c64f16f04` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_group_users_user_profile` ADD CONSTRAINT `FK_a7650ec1101f763864b583d242e` FOREIGN KEY (`userGroupId`) REFERENCES `user_group`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_group_users_user_profile` ADD CONSTRAINT `FK_0c29650f06089065df91fb5e466` FOREIGN KEY (`userProfileId`) REFERENCES `user_profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `role_permissions_permission` ADD CONSTRAINT `FK_b36cb2e04bc353ca4ede00d87b9` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `role_permissions_permission` ADD CONSTRAINT `FK_bfbc9e263d4cea6d7a8c9eb3ad2` FOREIGN KEY (`permissionId`) REFERENCES `permission`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `role_permissions_permission` DROP FOREIGN KEY `FK_bfbc9e263d4cea6d7a8c9eb3ad2`", undefined);
        await queryRunner.query("ALTER TABLE `role_permissions_permission` DROP FOREIGN KEY `FK_b36cb2e04bc353ca4ede00d87b9`", undefined);
        await queryRunner.query("ALTER TABLE `user_group_users_user_profile` DROP FOREIGN KEY `FK_0c29650f06089065df91fb5e466`", undefined);
        await queryRunner.query("ALTER TABLE `user_group_users_user_profile` DROP FOREIGN KEY `FK_a7650ec1101f763864b583d242e`", undefined);
        await queryRunner.query("ALTER TABLE `user_group_roles_role` DROP FOREIGN KEY `FK_e7209cb0b4b3eee227c64f16f04`", undefined);
        await queryRunner.query("ALTER TABLE `user_group_roles_role` DROP FOREIGN KEY `FK_59ff37d332e3a2a0d06c538b16d`", undefined);
        await queryRunner.query("ALTER TABLE `permission` DROP FOREIGN KEY `FK_3cb806eabd2d071691d242eb00b`", undefined);
        await queryRunner.query("ALTER TABLE `user_account` DROP FOREIGN KEY `FK_0e3ab64d65f30445259aa9aafe3`", undefined);
        await queryRunner.query("DROP INDEX `IDX_bfbc9e263d4cea6d7a8c9eb3ad` ON `role_permissions_permission`", undefined);
        await queryRunner.query("DROP INDEX `IDX_b36cb2e04bc353ca4ede00d87b` ON `role_permissions_permission`", undefined);
        await queryRunner.query("DROP TABLE `role_permissions_permission`", undefined);
        await queryRunner.query("DROP INDEX `IDX_0c29650f06089065df91fb5e46` ON `user_group_users_user_profile`", undefined);
        await queryRunner.query("DROP INDEX `IDX_a7650ec1101f763864b583d242` ON `user_group_users_user_profile`", undefined);
        await queryRunner.query("DROP TABLE `user_group_users_user_profile`", undefined);
        await queryRunner.query("DROP INDEX `IDX_e7209cb0b4b3eee227c64f16f0` ON `user_group_roles_role`", undefined);
        await queryRunner.query("DROP INDEX `IDX_59ff37d332e3a2a0d06c538b16` ON `user_group_roles_role`", undefined);
        await queryRunner.query("DROP TABLE `user_group_roles_role`", undefined);
        await queryRunner.query("DROP INDEX `IDX_240853a0c3353c25fb12434ad3` ON `permission`", undefined);
        await queryRunner.query("DROP TABLE `permission`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ae4578dcaed5adff96595e6166` ON `role`", undefined);
        await queryRunner.query("DROP TABLE `role`", undefined);
        await queryRunner.query("DROP INDEX `REL_0e3ab64d65f30445259aa9aafe` ON `user_account`", undefined);
        await queryRunner.query("DROP INDEX `IDX_56a0e4bcec2b5411beafa47ffa` ON `user_account`", undefined);
        await queryRunner.query("DROP TABLE `user_account`", undefined);
        await queryRunner.query("DROP TABLE `user_profile`", undefined);
        await queryRunner.query("DROP TABLE `user_group`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c8ed18ff47475e2c4a7bf59daa` ON `resource`", undefined);
        await queryRunner.query("DROP TABLE `resource`", undefined);
    }

}
