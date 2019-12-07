import { dbClient } from "..";
import DataLoader from "dataloader";
import { groupBy } from "lodash";

export const wardLoader = () => {
	return new DataLoader<string, any[]>(districtIds =>
		getWardsByDistrictId(districtIds)
	);
};

const getWardsByDistrictId = async (districtIds: readonly string[]) => {
	console.log("districtIds :", districtIds);
	try {
		const [result] = await dbClient.query(
			`
            SELECT *
            FROM ward
            WHERE district_id IN (?)
        `,
			[districtIds]
		);

		const wardsGroupByDistrictId = groupBy(result, "district_id");
		return districtIds.map(
			districtId => wardsGroupByDistrictId[districtId] || []
		);
	} catch (error) {
		throw new Error(error);
	}
};
export const districtLoader = () => {
	return new DataLoader<string, any[]>(provinceIds =>
		getDistrictByProvinceId(provinceIds)
	);
};

const getDistrictByProvinceId = async (provinceIds: readonly string[]) => {
	console.log("provinceIds :", provinceIds);
	try {
		const [result] = await dbClient.query(
			`
            SELECT *
            FROM district
            WHERE province_id IN (?)
        `,
			[provinceIds]
		);

		const districtsGroupByProvinceId = groupBy(result, "province_id");
		return provinceIds.map(
			provinceId => districtsGroupByProvinceId[provinceId] || []
		);
	} catch (error) {
		throw new Error(error);
	}
};

export class ProvinceController {
	private static instance: ProvinceController;
	private constructor() {}
	static getInstance = (): ProvinceController => {
		if (!ProvinceController.instance) {
			ProvinceController.instance = new ProvinceController();
		}
		return ProvinceController.instance;
	};
	getAll = async () => {
		try {
			const [result] = await dbClient.query(`
                SELECT *
                FROM province
            `);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	};

	getDistrictsByProvineId = async (id: string) => {
		try {
			const [result] = await dbClient.query(
				`
                SELECT *
                FROM district
                WHERE province_id = ?
            `,
				[id]
			);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	};
	getWardsByDistrictId = async (id: string) => {
		try {
			const [result] = await dbClient.query(
				`
                SELECT *
                FROM ward
                WHERE district_id = ?
            `,
				[id]
			);
			console.log(result);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	};
}
