'use strict';

const mongodb = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/mandevices';

module.exports.up = function(next) {
	let mClient = null;
	return (
		MongoClient.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
			.then(client => {
				mClient = client;
				return client.db();
			})
			.then(async db => {
				const User = db.collection(
					'users'
				);
				const abc = await User.find({
					name: {
						$exists: false
					}
				}).toArray();

				abc.forEach(async result => {
					// if (
					// 	!result ||
					// 	result.name
					// ) {
					// 	return next();
					// }
					if (
						!result.name &&
						result.firstName &&
						result.lastName
					) {
						result.name = `${result.firstName} ${result.lastName}`;
						delete result.firstName;
						delete result.lastName
					}
					return result;
				});

				return Promise.all(
					abc.map(
						async user =>
							await db
								.collection(
									'users'
								)
								.updateOne(
									{
										_id: ObjectID(
											user._id
										)
									},
									{
										$set: {
											...user
										}
									}
								)
								.then(
									() => {
										console.log(
											'update thanh cong'
										);
									}
								)
								.catch(
									err => {
										console.log(
											'err',
											err
										);
									}
								)
					)
				);
			})
			// .then(data => {
			// 	const updatedData = data.map;
			// 	console.log('updatedData', updatedData);
			// 	return db
			// 		.collection('users')
			// 		.insertMany(updatedData)
			// 		.then(data => {
			// 			console.log(
			// 				'data',
			// 				data
			// 			);
			// 		});
			// })
			.then(d => {
				mClient.close();
				return next();
			})
			.catch(err => next(err))
	);
};

module.exports.down = function(next) {
	let mClient = null;
	return MongoClient.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then(client => {
			mClient = client;
			return client.db();
		})
		.then(db =>
			db.collection('users').updateMany(
				{
					name: {
						$exists: true
					}
				},
				{
					$unset: {
						name: ''
					}
				},
				{ multi: true }
			)
		)
		.then(() => {
			mClient.close();
			return next();
		})
		.catch(err => next(err));
};
