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
    INSERT INTO province (id, name, code) VALUES
    (1, 'Hồ Chí Minh', 'SG'),
    (2, 'Hà Nội', 'HN'),
    (3, 'Đà Nẵng', 'DDN'),
    (4, 'Bình Dương', 'BD'),
    (5, 'Đồng Nai', 'DNA'),
    (6, 'Khánh Hòa', 'KH'),
    (7, 'Hải Phòng', 'HP'),
    (8, 'Long An', 'LA'),
    (9, 'Quảng Nam', 'QNA'),
    (10, 'Bà Rịa Vũng Tàu', 'VT'),
    (11, 'Đắk Lắk', 'DDL'),
    (12, 'Cần Thơ', 'CT'),
    (13, 'Bình Thuận  ', 'BTH'),
    (14, 'Lâm Đồng', 'LDD'),
    (15, 'Thừa Thiên Huế', 'TTH'),
    (16, 'Kiên Giang', 'KG'),
    (17, 'Bắc Ninh', 'BN'),
    (18, 'Quảng Ninh', 'QNI'),
    (19, 'Thanh Hóa', 'TH'),
    (20, 'Nghệ An', 'NA'),
    (21, 'Hải Dương', 'HD'),
    (22, 'Gia Lai', 'GL'),
    (23, 'Bình Phước', 'BP'),
    (24, 'Hưng Yên', 'HY'),
    (25, 'Bình Định', 'BDD'),
    (26, 'Tiền Giang', 'TG'),
    (27, 'Thái Bình', 'TB'),
    (28, 'Bắc Giang', 'BG'),
    (29, 'Hòa Bình', 'HB'),
    (30, 'An Giang', 'AG'),
    (31, 'Vĩnh Phúc', 'VP'),
    (32, 'Tây Ninh', 'TNI'),
    (33, 'Thái Nguyên', 'TN'),
    (34, 'Lào Cai', 'LCA'),
    (35, 'Nam Định', 'NDD'),
    (36, 'Quảng Ngãi', 'QNG'),
    (37, 'Bến Tre', 'BTR'),
    (38, 'Đắk Nông', 'DNO'),
    (39, 'Cà Mau', 'CM'),
    (40, 'Vĩnh Long', 'VL'),
    (41, 'Ninh Bình', 'NB'),
    (42, 'Phú Thọ', 'PT'),
    (43, 'Ninh Thuận', 'NT'),
    (44, 'Phú Yên', 'PY'),
    (45, 'Hà Nam', 'HNA'),
    (46, 'Hà Tĩnh', 'HT'),
    (47, 'Đồng Tháp', 'DDT'),
    (48, 'Sóc Trăng', 'ST'),
    (49, 'Kon Tum', 'KT'),
    (50, 'Quảng Bình', 'QB'),
    (51, 'Quảng Trị', 'QT'),
    (52, 'Trà Vinh', 'TV'),
    (53, 'Hậu Giang', 'HGI'),
    (54, 'Sơn La', 'SL'),
    (55, 'Bạc Liêu', 'BL'),
    (56, 'Yên Bái', 'YB'),
    (57, 'Tuyên Quang', 'TQ'),
    (58, 'Điện Biên', 'DDB'),
    (59, 'Lai Châu', 'LCH'),
    (60, 'Lạng Sơn', 'LS'),
    (61, 'Hà Giang', 'HG'),
    (62, 'Bắc Kạn', 'BK'),
    (63, 'Cao Bằng', 'CB');
    `);

	
		return true;
	} catch (error) {}
};

exports.down = async function(db) {
	try {
		await db.runSql(`
      DELETE FROM province;
    `);

		await db.runSql();

		return true;
	} catch (error) {}
};

exports._meta = {
	version: 1
};
