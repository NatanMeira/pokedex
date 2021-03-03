import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemon1614564517677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pokemons",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "small_image",
            type: "varchar",
          },
          {
            name: "generation",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "evolution_stage",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "evolved",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "family_id",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "cross_gen",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "stat_total",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "atk",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "def",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "sta",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "legendary",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "aquireable",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "spawns",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "regional",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "raidable",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "hatchable",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "shiny",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "nest",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "is_new",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "not_gettable",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "future_evolve",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "n_100_cp_40",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
          {
            name: "n_100_cp_39",
            type: "varchar",
            default: "0",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pokemons");
  }
}
