import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import {Pokemon} from './Pokemon';

@Entity('Types')
 class Type{
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  
  @ManyToMany(() => Pokemon, pokemon => pokemon.type)
  pokemon: Pokemon[];
}

export {Type}
