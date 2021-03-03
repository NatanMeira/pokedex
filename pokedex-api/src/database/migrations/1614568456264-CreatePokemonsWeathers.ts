import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemonsWeathers1614568456264 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pokemons_weathers",
        columns:[
          {
            name: "pokemon_id",
            type: "integer",
            isPrimary: true
          },
          {
            name: "weather_id",
            type: "integer",
            isPrimary: true, 
          }
        ],
        foreignKeys:[
          {
            name: "fk_pokemons_w",
            referencedTableName: "pokemons",
            referencedColumnNames: ["id"],
            columnNames: ["pokemon_id"],
          },
          {
            name: "fk_weathers",
            referencedTableName: "weathers",
            referencedColumnNames: ["id"],
            columnNames: ["weather_id"],
          }                
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pokemons_weathers");
  }

}
