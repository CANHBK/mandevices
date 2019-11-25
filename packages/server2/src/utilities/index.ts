import { PathLike, readdir } from "fs";

export const getListNameFolder = async (path: PathLike): Promise<string[]> => {
	const result: string[] = [];
	return new Promise((resolve, reject) => {
		readdir(
			path,
			{
				withFileTypes: true
			},
			(error, files) => {
				if (error) {
					reject(error);
				}
				for (let f of files) {
					if (f.isDirectory()) {
						result.push(f.name);
					}
				}
				resolve(result);
			}
		);
	});
};
