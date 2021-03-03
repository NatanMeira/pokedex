import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateWeather1614564442985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
				new Table({
						name: "weathers",
						columns:[
								{
										name: "id",
										type: "integer",
										isPrimary: true,
										isGenerated: true,
										generationStrategy: 'increment',

								},
								{
										name: "name",
										type: "varchar",
								}
						]

				})
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable("weathers");
    }

}
