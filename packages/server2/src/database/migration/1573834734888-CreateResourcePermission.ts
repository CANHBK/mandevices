import { MigrationInterface, QueryRunner } from "typeorm";

import { Resource } from "../entity/rabc/resource";
import { getListNameFolder } from "../../utilities";
import path from "path";

export class CrateResourcePermission1573834734888
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const resourceEntities: Resource[] = [];
		const resources = await getListNameFolder(
			path.join(__dirname, "../security")
		);
		for (let resource of resources) {
			resourceEntities.push(
				queryRunner.manager.create(Resource, {
					name: resource
				})
			);
		}
		await queryRunner.manager.save(resourceEntities);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {}
}
