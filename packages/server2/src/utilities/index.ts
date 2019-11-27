import { PathLike, readdir } from "fs";
import { sign } from "jsonwebtoken";

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

export const generateToken = (id: string | number) => {
	return sign(
		{
			id
		},
		process.env.JSON_WEB_TOKEN_SECRET!
	);
};
