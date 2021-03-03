import { NextFunction, Request, Response} from "express";
import {getCustomRepository} from 'typeorm';
import { AppError } from "../errors/AppError";
import {Type} from "../models/Type";
import {Weather} from "../models/Weather";
import { PokemonsRepository } from "../repositories/PokemonsRepository";
import { TypesRepository } from "../repositories/TypesRepository";
import { WeathersRepository } from "../repositories/WeathersRepository";


class PokemonController {
  
  async index(request : Request, response: Response, next: NextFunction){

    const search: string = request.query.search as string;

    const pokemonRepository = getCustomRepository(PokemonsRepository);

    const pokemons = await pokemonRepository.createQueryBuilder('pokemon')
    .leftJoinAndSelect("pokemon.type", "type")
    .where(search?`pokemon.id = '${search}' or pokemon.name like '%${search}%'`:"pokemon.id = pokemon_id")
    .paginate(20);
    
    if (!pokemons) {
      throw new AppError("Unexpected error while getting all Pokemons.");
    }
    
    return response.json(pokemons);

  }
  
  async show(request : Request, response: Response){
 
    const {id} = request.params;

    const pokemonRepository = getCustomRepository(PokemonsRepository);
    
    const pokemon = await pokemonRepository.findOne(id,{relations: ["type", "weather"]});
  
    if (!pokemon) {
      throw new AppError("Pokemon not found!",404);
    }

    const evolutions = await pokemonRepository.find({
      where: {
        family_id : pokemon.family_id
      }
    })
  
    return response.json({pokemon,evolutions});

  }
  
  async create(request : Request, response: Response){
    const {
      name,
      image,
      small_image,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      not_gettable,
      future_evolve,
      n_100_cp_40,
      n_100_cp_39,
      is_new,
      types,
      weathers
      
    } = request.body;

    const pokemonRepository = getCustomRepository(PokemonsRepository);

    const pokemon = pokemonRepository.create({
      name,
      image,
      small_image,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      not_gettable,
      future_evolve,
      n_100_cp_40,
      n_100_cp_39,
      is_new
    });

    if (types.length == 0){
      throw new AppError("Missing pokemon types");
    }

    const typeRepository = getCustomRepository(TypesRepository);

    var pokemonTypes: Type[] = [];
    
    for (let index = 0; index < types.length; index++) {
      const pokemonType = await typeRepository.findOneOrFail({id:types[index]});
      if (!pokemonType) {
        throw new AppError("Missing a correct type_id to create a Pokemon");
      }else{
        pokemonTypes.push(pokemonType);
      }
    }
    
    pokemon.type = pokemonTypes;

    if (weathers.length == 0) {
      throw new AppError("Missing pokemon weathers");
    }

    const weatherRepository = getCustomRepository(WeathersRepository);

    var pokemonWeathers: Weather[] = [];
    
    for (let index = 0; index < weathers.length; index++) {
      const pokemonWeather = await weatherRepository.findOne({id:weathers[index]});
      if (!pokemonWeather) {
        throw new AppError("Missing a correctly weather_id to create a Pokemon");
      }else{
        pokemonWeathers.push(pokemonWeather);
      }
    }

    pokemon.weather = pokemonWeathers;

    await pokemonRepository.save(pokemon);
    
    return response.status(201).json(pokemon);
  }

  async update(request : Request, response: Response){
  
    const {id} = request.params;
    
    const {
      name,
      image,
      small_image,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      not_gettable,
      future_evolve,
      n_100_cp_40,
      n_100_cp_39,
      is_new,
      types,
      weathers
    } = request.body;

    const updatePokemon = {
      name,
      image,
      small_image,
      generation,
      evolution_stage,
      evolved,
      family_id,
      cross_gen,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      not_gettable,
      future_evolve,
      n_100_cp_40,
      n_100_cp_39,
      is_new,
    };

    const pokemonRepository = getCustomRepository(PokemonsRepository);
    const pokemon = await pokemonRepository.findOne(id);
  
    if (!pokemon) {
      throw new AppError("Pokemon not found!",404);
    }

    if (types.length == 0){
      throw new AppError("Missing pokemon types");
    }

    const typeRepository = getCustomRepository(TypesRepository);

    var pokemonTypes: Type[] = [];
    
    for (let index = 0; index < types.length; index++) {
      const pokemonType = await typeRepository.findOne({id:types[index]});
      if (!pokemonType) {
        throw new AppError("Missing a correct type_id to update a Pokemon");
      }else{
        pokemonTypes.push(pokemonType);
      }
    }
    
    pokemon.type = pokemonTypes;

    if (weathers.length == 0){
      throw new AppError("Missing pokemon weathers");
    }

    const weatherRepository = getCustomRepository(WeathersRepository);

    var pokemonWeathers: Weather[] = [];
    
    for (let index = 0; index < weathers.length; index++) {
      const pokemonWeather = await weatherRepository.findOne({id:weathers[index]});
      if (!pokemonWeather) {
        throw new AppError("Missing a correct weather_id to update a Pokemon");
      }else{
        pokemonWeathers.push(pokemonWeather);
      }
    }
    
    pokemon.weather = pokemonWeathers;

    const updatedPokemon =  await pokemonRepository.save({
      ...pokemon, 
      ...updatePokemon 
    });

    return response.status(200).json(updatedPokemon);
 
  }

  async delete(request : Request, response: Response){
 
    const {id} = request.params;
    
    const pokemonRepository = getCustomRepository(PokemonsRepository);
    
    const pokemon = await pokemonRepository.findOne(id);
    
    if (pokemon) {
      await pokemonRepository.remove(pokemon);
    }else{
      throw new AppError("Pokemon not found!",404);
    }

    return response.status(200).json({ message: 'Pokemon deleted successfully!' });
    
  }

}

export {PokemonController}
