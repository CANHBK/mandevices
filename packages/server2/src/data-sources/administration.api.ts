import { RESTDataSource } from "apollo-datasource-rest";

export class AdministrationAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://thongtindoanhnghiep.co/";
	}

	async getCities() {
		return this.get(`api/city`);
	}

	async getMostViewedMovies(limit = 10) {
		const data = await this.get("movies", {
			per_page: limit,
			order_by: "most_viewed"
		});
		return data.results;
	}
}
