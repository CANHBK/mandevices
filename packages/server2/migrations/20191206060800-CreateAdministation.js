"use strict";

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

/**
 * Tạo Database quản lý Tỉnh/Thành phố - Quận/Huyện - Phường/Xã - Đường
 */

exports.up = async function(db) {
	try {
    /**
     * Tỉnh/Thành phố Table
     */
		await db.runSql(`
    CREATE TABLE province (
      id int(10) UNSIGNED ZEROFILL NOT NULL PRIMARY KEY AUTO_INCREMENT,
      name varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      code varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    `);

    /**
     * Quận/Huyện Table
     */
    await db.runSql(`
    CREATE TABLE district (
      id int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
      name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
      prefix varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
      province_id int(10) UNSIGNED NOT NULL,
      PRIMARY KEY (id, province_id),
      CONSTRAINT fk_district_provice
      FOREIGN KEY (province_id)
      REFERENCES province(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    `)

    /**
     * Đường/Phố Table (Thuộc Quận/Huyện)
     */
    await db.runSql(`
    CREATE TABLE street (
      id int(10) UNSIGNED ZEROFILL PRIMARY KEY NOT NULL AUTO_INCREMENT,
      name varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
      prefix varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
      province_id int(10) UNSIGNED DEFAULT NULL,
      district_id int(10) UNSIGNED DEFAULT NULL,
      CONSTRAINT fk_street_district
      FOREIGN KEY (district_id)
      REFERENCES district(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    `)

    /**
     * Xã/Phường (Thuộc Quận/Huyện)
     */
    await db.runSql(`
    CREATE TABLE ward (
      id int(10) UNSIGNED ZEROFILL PRIMARY KEY NOT NULL AUTO_INCREMENT,
      name varchar(50) COLLATE utf8_unicode_ci NOT NULL,
      prefix varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
      province_id int(10) UNSIGNED DEFAULT NULL,
      district_id int(10) UNSIGNED DEFAULT NULL,
      CONSTRAINT fk_ward_district
      FOREIGN KEY (district_id)
      REFERENCES district(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    `)

		return true;
	} catch (error) {
		throw new Error(error);
	}
};

exports.down = async function(db) {
	try {
    await db.runSql(`
      DROP TABLE ward;
    `)
    await db.runSql(`
      DROP TABLE street;
    `)
    await db.runSql(`
    DROP TABLE district;
    `)
    await db.runSql(`
      DROP TABLE province;
    `);
		return true;
	} catch (error) {
		throw new Error(error);
	}
};

exports._meta = {
	version: 1
};
