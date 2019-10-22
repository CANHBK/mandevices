// import { Seeder } from 'mongo-seeding';
// import { dbConnect } from '.';
// import faker from 'faker/locale/vi';
// import { resolve } from 'path';

// const seeder = new Seeder({
// 	database: 'mongodb://127.0.0.1:27017/mandevices'
// });

// const collections = seeder.readCollectionsFromPath(
// 	resolve('./src/database/data'),
// 	{
// 		extensions: ['ts'],
// 	transformers:[
// 		Seeder.Transformers.replaceDocumentIdWithUnderscoreId
// 	]
// 	}
// );
// export const seed = async () => {
// 	try {
// 		await seeder.import(collections);
// 	} catch (err) {
// 		console.log('err', err);
// 		// Handle errors
// 	}
// };
