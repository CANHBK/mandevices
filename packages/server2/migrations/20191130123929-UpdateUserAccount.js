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
		MODIFY emailConfirmationToken VARCHAR(140),
		MODIFY password VARCHAR(140);
	   `);
	} catch (error) {
		throw new Error(error);
	}
};

exports.down = async function(db) {
	try {
		db.runSql(`
		ALTER TABLE user_account
		MODIFY emailConfirmationToken VARCHAR(45),
		MODIFY password VARCHAR(45);
	   `);
	} catch (error) {
		throw new Error(error)
	}
};

exports._meta = {
	version: 1
};
