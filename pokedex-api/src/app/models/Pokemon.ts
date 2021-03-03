import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import {Type} from './Type';
import {Weather} from './Weather';

@Entity('Pokemons')
class Pokemon{
  
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() name: string;
  @Column() image: string; 
  @Column() small_image: string; 
  @Column() generation: string; 
  @Column() evolution_stage: string;
  @Column() evolved: string;
  @Column() family_id: string;
  @Column() cross_gen: string;
  @Column() stat_total: string;
  @Column() atk: string;
  @Column() def: string;
  @Column() sta: string;
  @Column() legendary: string;
  @Column() aquireable: string;
  @Column() spawns: string;
  @Column() regional: string;
  @Column() raidable: string;
  @Column() hatchable: string;
  @Column() shiny: string;
  @Column() nest: string;
  @Column() is_new: string;
  @Column() not_gettable: string;
  @Column() future_evolve: string;
  @Column() n_100_cp_40: string;
  @Column() n_100_cp_39: string;

  @ManyToMany(() => Type, type => type.pokemon)
  @JoinTable({
    name: "pokemons_types",
    joinColumn: {
      name: "pokemon_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "type_id",
        referencedColumnName: "id"
    } 
  })
  public type: Type[];

  @ManyToMany(() => Weather, weather => weather.pokemon)
  @JoinTable({
    name: "pokemons_weathers",
    joinColumn: {
      name: "pokemon_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "weather_id",
        referencedColumnName: "id"
    } 
  })
  public weather: Weather[];
}

export {Pokemon}
