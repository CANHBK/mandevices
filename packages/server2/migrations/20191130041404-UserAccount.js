"use strict";
const async = require("async");

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
	dbm = options.dbmigrate;
	type = dbm.dataType;
	seed = seedLink;
};

exports.up = async function(db) {
	try {
		await db.runSql(
			`CREATE TABLE IF NOT EXISTS user_account (
          id INT UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
          email VARCHAR(45) NOT NULL,
          fullName VARCHAR(45) NOT NULL,
          password VARCHAR(45) NOT NULL,
          emailConfirmationToken VARCHAR(45) NULL,
          provinceOrCityResident VARCHAR(45) NULL COMMENT 'Tỉnh/Thành phố (Thường trú)',
          districtResident VARCHAR(45) NULL COMMENT 'Quận/Huyện (Thường trú)',
          villageOrBlockResident VARCHAR(45) NULL COMMENT 'Xã phường (Thường trú)',
          streetOrHamletResident VARCHAR(45) NULL COMMENT 'Đường/Thôn (Thường trú)\n',
          provinceOrCity VARCHAR(45) NULL COMMENT 'Tỉnh/Thành Phố (Hộ khẩu)',
          district VARCHAR(45) NULL COMMENT 'Quận/Huyện (Hộ khẩu)',
          villageOrBlock VARCHAR(45) NULL COMMENT 'Xã/Phường (Hộ khẩu)',
          streetOrHamlet VARCHAR(45) NULL COMMENT 'Đường/Thôn (Hộ khẩu)',
          school VARCHAR(45) NULL,
          course TINYINT(3) NULL,
          avatar TINYTEXT NULL,
          PRIMARY KEY (id),
          UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE,
          UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE
        )
      ENGINE = InnoDB;`
		);
	} catch (error) {
		console.log("error :", error);
	}
};

exports.down = async function(db) {
	try {
		await db.runSql(`
      DROP TABLE user_account;
    `);
	} catch (error) {
		throw new Error(error);
	}
};

exports._meta = {
	version: 1
};
