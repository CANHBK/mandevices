import typeDefs from "./schema";
import { ProvinceController } from "../../../database/controller/province.controller";

export default typeDefs;

export const resolvers = {
	District: {
		wards: (parent, _, { loaders: { wardLoader } }) => {
			return wardLoader.load(parent.id);
		}
	},
	City: {
		id: parent => {
			return parent.id;
		},
		name: parent => {
			return parent.name;
		},
		districts: (parent, _, { loaders: { districtLoader } }) => {
			return districtLoader.load(parent.id);
		}
	},
	Query: {
		cities: async (_, __, { dataSources }) => {
			const result = await dataSources.administrationAPI.getCities();
			return ProvinceController.getInstance().getAll();
		}
	}
};
