import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemonsTypes1614567937271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "pokemons_types",
          columns:[
            {
              name: "pokemon_id",
              type: "integer",
              isPrimary: true
            },
            {
              name: "type_id",
              type: "integer",
              isPrimary: true, 
            }
          ],
          foreignKeys:[
            {
              name: "fk_pokemons",
              referencedTableName: "pokemons",
              referencedColumnNames: ["id"],
              columnNames: ["pokemon_id"],
            },
            {
              name: "fk_types",
              referencedTableName: "types",
              referencedColumnNames: ["id"],
              columnNames: ["type_id"],
            }                
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("pokemons_types");
    }

}
