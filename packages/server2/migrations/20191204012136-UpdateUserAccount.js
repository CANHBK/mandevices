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

exports.up = async function(db) {
	try {
		await db.runSql(`
      ALTER TABLE user_account
      ADD COLUMN role ENUM('GUEST','MANAGER') NOT NULL DEFAULT 'GUEST';
    `);
		return true;
	} catch (error) {
		throw new Error(error);
	}
};

exports.down = async function(db) {
	try {
    await db.runSql(`
      ALTER TABLE user_account
      DROP COLUMN role;
    `)
		return true;
	} catch (error) {
		throw new Error(error);
	}
};

exports._meta = {
	version: 1
};
