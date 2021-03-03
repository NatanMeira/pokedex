import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import {Pokemon} from './Pokemon';

@Entity('Weathers')
class Weather{
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  name: string;
  
  @ManyToMany(() => Pokemon, pokemon => pokemon.weather)
  pokemon: Pokemon[];
}

export {Weather}
